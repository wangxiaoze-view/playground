<script lang="ts" setup>
import { useEditor, type Editor } from '@/hooks/useEditor'
import { nextTick, onMounted, ref, watch } from 'vue'
const { code = '', language = '' } = defineProps<{
  code: string
  language: string
}>()
const emit = defineEmits<{
  'update:code': [code: string]
}>()
const { editorRef, onEditorInit } = useEditor()
const editorCode = ref(code)
let editor: Editor
onMounted(() => {
  onEditorInit({
    code: editorCode,
    language,
    onChange: (newCode: string) => {
      editorCode.value = newCode
      emit('update:code', newCode)
    },
    onInit: (e: Editor) => {
      editor = e
    },
  })
})
watch(
  () => code,
  (newCode) => {
    nextTick(() => {
      if (editor && newCode !== editorCode.value) {
        editor.setValue(newCode)
        editorCode.value = newCode
      }
    })
  },
  { immediate: true },
)
</script>

<template>
  <div class="pl-editor" ref="editorRef"></div>
</template>

<style lang="scss" scoped>
.pl-editor {
  width: 100%;
  height: 100%;
}
</style>
