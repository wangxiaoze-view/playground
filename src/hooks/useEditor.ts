import * as monaco from 'monaco-editor'
import { nextTick, onBeforeUnmount, ref, type Ref } from 'vue'
export type Editor = monaco.editor.IStandaloneCodeEditor
export function useEditor() {
  const editorRef = ref<HTMLElement>()
  let editor: Editor
  const onEditorInit = (options: {
    code: Ref<string>
    language: string
    onChange?: (code: string) => void
    onInit?: (editor: Editor) => void
  }) => {
    nextTick(() => {
      // 配置 TypeScript 默认选项
      monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: true,
        noSuggestionDiagnostics: true,
      })

      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2016,
        allowNonTsExtensions: true,
        jsx: monaco.languages.typescript.JsxEmit.React,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.ESNext,
        allowJs: true,
        checkJs: false,
        noEmit: true,
        typeRoots: ['node_modules/@types'],
      })

      // 配置 JavaScript 默认选项
      monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: true,
        noSuggestionDiagnostics: true,
      })

      monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2016,
        allowNonTsExtensions: true,
        jsx: monaco.languages.typescript.JsxEmit.React,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.ESNext,
        allowJs: true,
        checkJs: false,
        noEmit: true,
        typeRoots: ['node_modules/@types'],
      })

      editor = monaco.editor.create(editorRef.value!, {
        value: options.code.value,
        language: options.language === 'javascript' ? 'typescript' : options.language,
        automaticLayout: true,
        theme: 'vs-dark',
        foldingStrategy: 'indentation',
        renderLineHighlight: 'all',
        selectOnLineNumbers: true,
        minimap: {
          enabled: false,
        },
        readOnly: false,
        fontSize: 16,
        scrollBeyondLastLine: false,
        overviewRulerBorder: false,
      })

      editor.onDidChangeModelContent(() => {
        const newCode = editor.getValue()
        options.code.value = newCode
        options.onChange?.(newCode)
      })

      options.onInit?.(editor)
    })
    onBeforeUnmount(() => {
      editor.dispose()
    })
  }
  return {
    editorRef,
    onEditorInit,
  }
}
