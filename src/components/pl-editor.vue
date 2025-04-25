<script lang="ts" setup>
import { useEditor } from '@/hooks/useEditor'
import { onMounted, ref, watch } from 'vue'

const { editorRef, onEditorInit } = useEditor()
const { code = '', language = '' } = defineProps<{
  code: string
  language: string
}>()

const emit = defineEmits<{
  'update:code': [code: string]
}>()

const editorCode = ref(code)

onMounted(() => {
  onEditorInit({
    code: editorCode,
    language,
    onChange: (newCode: string) => {
      editorCode.value = newCode
      emit('update:code', newCode)
    },
  })
})

watch(
  () => code,
  (newCode) => {
    editorCode.value = newCode
  },
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
