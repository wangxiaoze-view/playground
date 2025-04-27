import defaultTemplate from './templates/default'
import vue2Template from './templates/vue2'
import vue3Template from './templates/vue3'
import reactTemplate from './templates/react'
import type { Template } from './types'

export const templates: Template[] = [
  { value: 'default', label: '默认模板', icon: 'ri-list-indefinite', children: defaultTemplate },
  { value: 'Vue2', label: 'Vue2', icon: 'ri-vuejs-line', children: vue2Template },
  { value: 'Vue3', label: 'Vue3', icon: 'ri-vuejs-fill', children: vue3Template },
  { value: 'React', label: 'React', icon: 'ri-reactjs-line', children: reactTemplate },
]
