import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { ElMessage } from 'element-plus'

export interface DownloadData {
  html: string
  css: string
  js: string
  template: string
  templateName: string
  mode: 'simple' | 'project'
}

interface ProjectConfig {
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
  viteConfig: string
  readme: string
}

const projectConfigs: Record<string, ProjectConfig> = {
  'vue3-element': {
    dependencies: {
      vue: '^3.3.4',
      'element-plus': '^2.3.9',
      '@element-plus/icons-vue': '^2.3.1',
    },
    devDependencies: {
      '@vitejs/plugin-vue': '^4.2.3',
      vite: '^4.4.9',
    },
    viteConfig: `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 3000,
    open: true
  }
})`,
    readme: `# Vue 3 + Element Plus 项目

## 项目说明
这是一个使用 Vue 3 和 Element Plus 创建的项目。

## 项目结构
\`\`\`
项目名称/
├── src/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── package.json
├── vite.config.js
└── README.md
\`\`\`

## 使用说明
1. 安装依赖
\`\`\`bash
npm install
# 或
yarn
# 或
pnpm install
\`\`\`

2. 启动开发服务器
\`\`\`bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
\`\`\`

3. 构建生产版本
\`\`\`bash
npm run build
# 或
yarn build
# 或
pnpm build
\`\`\`
`,
  },
  react: {
    dependencies: {
      react: '^18.2.0',
      'react-dom': '^18.2.0',
      '@douyinfe/semi-ui': '^2.34.0',
      '@douyinfe/semi-icons': '^2.34.0',
    },
    devDependencies: {
      '@vitejs/plugin-react': '^4.0.3',
      vite: '^4.4.9',
    },
    viteConfig: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})`,
    readme: `# React + Semi Design 项目

## 项目说明
这是一个使用 React 和 Semi Design 创建的项目。

## 项目结构
\`\`\`
项目名称/
├── src/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── package.json
├── vite.config.js
└── README.md
\`\`\`

## 使用说明
1. 安装依赖
\`\`\`bash
npm install
# 或
yarn
# 或
pnpm install
\`\`\`

2. 启动开发服务器
\`\`\`bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
\`\`\`

3. 构建生产版本
\`\`\`bash
npm run build
# 或
yarn build
# 或
pnpm build
\`\`\`
`,
  },
}

/**
 * 下载项目文件
 */
// TODO: 需要考虑一下
export async function downloadProject(data: DownloadData) {
  try {
    const zip = new JSZip()

    if (data.mode === 'simple') {
      // 简单模式：直接下载三个文件
      zip.file('index.html', data.html)
      zip.file('styles.css', data.css)
      zip.file('script.js', data.js)
    } else {
      ElMessage.warning('工程化项目下载功能正在开发中...')
      return false
      // // 工程化模式：创建完整的项目结构
      // const projectFolder = zip.folder(data.templateName)
      // const config = projectConfigs[data.template] || projectConfigs['vue3-element']
      // // 添加项目文件
      // projectFolder?.file('src/index.html', data.html)
      // projectFolder?.file('src/styles.css', data.css)
      // projectFolder?.file('src/script.js', data.js)
      // // 添加 package.json
      // const packageJson = {
      //   name: data.templateName.toLowerCase().replace(/\s+/g, '-'),
      //   version: '1.0.0',
      //   description: `A project created with ${data.template} template`,
      //   scripts: {
      //     dev: 'vite',
      //     build: 'vite build',
      //     preview: 'vite preview',
      //   },
      //   dependencies: config.dependencies,
      //   devDependencies: config.devDependencies,
      // }
      // projectFolder?.file('package.json', JSON.stringify(packageJson, null, 2))
      // // 添加 vite.config.js
      // projectFolder?.file('vite.config.js', config.viteConfig)
      // // 添加 README.md
      // projectFolder?.file('README.md', config.readme.replace(/项目名称/g, data.templateName))
    }

    // 生成并下载 zip 文件
    const content = await zip.generateAsync({ type: 'blob' })
    saveAs(content, `${data.templateName}.zip`)

    return true
  } catch (error) {
    console.error('Failed to download project:', error)
    return false
  }
}
