// Transpile all .ts/.tsx files under src/ into .js/.jsx, stripping types
// and deleting the original files. Intended to run once during migration.

import fs from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'
import ts from 'typescript'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectRoot = path.resolve(__dirname, '..')
const SRC_DIR = path.join(projectRoot, 'src')

async function* walk(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true })
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name)
    if (dirent.isDirectory()) {
      yield* walk(res)
    } else {
      yield res
    }
  }
}

function outPathFor(filePath) {
  if (filePath.endsWith('.tsx')) return filePath.slice(0, -4) + '.jsx'
  if (filePath.endsWith('.ts')) return filePath.slice(0, -2) + '.js'
  return filePath
}

const compilerOptions = {
  target: ts.ScriptTarget.ES2020,
  module: ts.ModuleKind.ESNext,
  jsx: ts.JsxEmit.Preserve, // keep JSX so we can write .jsx
  esModuleInterop: true,
  allowJs: true,
  isolatedModules: true,
  resolveJsonModule: true,
  importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
  verbatimModuleSyntax: true,
  preserveValueImports: true,
  removeComments: false,
}

async function transpileFile(inFile) {
  const source = await fs.readFile(inFile, 'utf8')
  const { outputText, diagnostics } = ts.transpileModule(source, {
    compilerOptions,
    fileName: inFile,
    reportDiagnostics: true,
  })

  const hasError = (diagnostics || []).some(d => (d.category === ts.DiagnosticCategory.Error))
  if (hasError) {
    const formatted = ts.formatDiagnosticsWithColorAndContext(diagnostics, {
      getCurrentDirectory: () => process.cwd(),
      getCanonicalFileName: f => f,
      getNewLine: () => '\n',
    })
    console.warn(`TypeScript reported diagnostics while transpiling ${inFile}:\n${formatted}`)
  }

  // Small cleanup: remove `export {};` emitted in isolatedModules mode for files with no imports
  const cleaned = outputText.replace(/\n?export\s*\{\s*\};\s*$/s, '')

  const outFile = outPathFor(inFile)
  await fs.writeFile(outFile, cleaned, 'utf8')
  await fs.unlink(inFile)
  return { inFile, outFile }
}

async function main() {
  const changed = []
  for await (const file of walk(SRC_DIR)) {
    if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      // Skip .d.ts just in case
      if (file.endsWith('.d.ts')) continue
      const res = await transpileFile(file)
      changed.push(res)
      console.log(`Converted: ${path.relative(projectRoot, res.inFile)} -> ${path.relative(projectRoot, res.outFile)}`)
    }
  }

  // Fix any mistakenly created files like "Componentjsx" or "utilsjs" (no dot) from prior runs
  const renames = []
  for await (const file of walk(SRC_DIR)) {
    const ext = path.extname(file)
    if (!ext && file.endsWith('jsx')) {
      const correct = file.slice(0, -3) + '.jsx'
      await fs.rename(file, correct)
      renames.push({ from: file, to: correct })
      console.log(`Renamed (fix): ${path.relative(projectRoot, file)} -> ${path.relative(projectRoot, correct)}`)
    } else if (!ext && file.endsWith('js')) {
      const correct = file.slice(0, -2) + '.js'
      await fs.rename(file, correct)
      renames.push({ from: file, to: correct })
      console.log(`Renamed (fix): ${path.relative(projectRoot, file)} -> ${path.relative(projectRoot, correct)}`)
    }
  }

  if (changed.length === 0) {
    console.log('No .ts or .tsx files found under src/. Nothing to do.')
  } else {
    console.log(`\nDone. Converted ${changed.length} files.`)
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
