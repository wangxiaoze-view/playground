<script lang="ts" setup>
import { useEditor } from '@/hooks/useEditor'
import { onMounted, ref } from 'vue'

const { editorRef, onEditorInit } = useEditor()
const { code = '', language = '' } = defineProps<{
  code: string
  language: string
}>()

onMounted(() => {
  onEditorInit({
    code: ref(code),
    language,
  })
})
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
