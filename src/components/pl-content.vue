<script lang="ts" setup>
import { useTab } from '@/hooks/useTab'
import plEditor from './pl-editor.vue'
import { useTemplate } from '@/hooks/useTemplate'
const { initCodeTab, codeTab, onChangeCodeTab } = useTab()
const { store, onChangeTemplate, templates, onGetRenderStr, onRefreshRender, plIframe } =
  useTemplate()
</script>

<template>
  <el-row
    :gutter="0"
    class="pl-content"
    v-loading.fullscreen="store.getLoading"
    element-loading-text="资源正在加载，请稍等..."
  >
    <el-col :span="12">
      <div class="pl-content-left">
        <div class="pl-content-left--header">
          <div class="tab">
            <span
              :class="[initCodeTab === item.name ? 'active' : '']"
              v-for="item in codeTab"
              :key="item.name"
              @click="onChangeCodeTab(item.name)"
            >
              <i :class="item.icon"></i>{{ item.name }}
            </span>
          </div>
          <div class="tool">
            <div class="tool-template">
              <el-cascader
                v-model="store.currrentTemplateKey"
                :options="templates"
                @change="onChangeTemplate('no-cache')"
              >
                <template #default="{ data }">
                  <i v-if="data.icon" :class="[data.icon, 'cascader-icon icon-middle']"></i>
                  {{ data.label }}
                </template>
              </el-cascader>
            </div>

            <el-button type="primary" @click="onGetRenderStr">
              <i class="ri-refresh-line icon icon-middle"></i>刷新
            </el-button>

            <el-tooltip
              class="box-item"
              effect="light"
              content="1. 一款在线便捷代码编辑器，方便编写您的测试代码。<br/>2. 本地免安装项目, 只需在编辑器中输入您的代码即可预览。"
              placement="right-end"
              raw-content
            >
              <i class="ri-error-warning-fill icon icon-middle"> </i>
            </el-tooltip>
          </div>
        </div>

        <div class="pl-content-left--editor pl-main">
          <plEditor
            :code="store.htmlCode"
            language="html"
            v-if="initCodeTab === 'html'"
            @update:code="(code) => onRefreshRender(code, initCodeTab)"
          />
          <plEditor
            :code="store.cssCode"
            language="css"
            v-if="initCodeTab === 'css'"
            @update:code="(code) => onRefreshRender(code, initCodeTab)"
          />
          <plEditor
            :code="store.jsCode"
            language="javascript"
            v-if="initCodeTab === 'javascript'"
            @update:code="(code) => onRefreshRender(code, initCodeTab)"
          />
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="pl-content-right">
        <div class="pl-content-right--header">
          <div class="tab">
            <span class="active"><i class="ri-eye-fill icon icon-middle"></i>效果预览</span>
            <!-- <span><i class="ri-terminal-box-fill icon icon-middle"></i>日志</span> -->
          </div>
          <div></div>
        </div>
        <div class="pl-content-right--editor pl-main">
          <plIframe :ref="(el) => store.setIframeRef(el)" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.pl-content {
  overflow: hidden;
  &-left,
  &-right {
    height: 100%;
    border-right: 0.5px solid #6666;

    &--header {
      height: 100%;
      padding: 0 14px;
      border-bottom: 0.5px solid #6666;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .tab {
        display: flex;
        align-items: center;
        gap: 4px;
        span {
          display: flex;
          align-items: center;
          padding: 4px 14px;
          color: #fff;
          border-radius: 6px;
          transition: all 0.3s ease-in;
          cursor: pointer;
          &.active {
            background-color: var(--el-color-primary);
          }
        }
      }

      .tool {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }

  &-right {
    border-right: none;
  }

  :deep() {
    .el-button {
      margin-left: 0;
    }
    .el-select {
      width: 200px;
    }
  }
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #fff;
}

.cascader-icon {
  color: var(--el-color-primary);
}
</style>
