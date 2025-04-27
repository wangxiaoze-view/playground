interface BaseTempalte {
  value: string
  label: string
  icon: string
}
type CdnType = { type: 'script' | 'style'; url: string }
export interface TemplateSdn {
  unpkg: CdnType[]
  jsdelivr: CdnType[]
  cdnjs: CdnType[]
}
export interface TemplateItem extends BaseTempalte {
  html: string
  css: string
  js: string
  cdn: TemplateSdn
  children?: TemplateItem[]
}
export interface Template extends BaseTempalte {
  children: TemplateItem[]
}
