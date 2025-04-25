<script lang="ts" setup>
import { useTab } from '@/hooks/useTab'
import plEditor from './pl-editor.vue'

const { initCodeTab, codeTab, onChangeCodeTab } = useTab()
</script>

<template>
  <el-row :gutter="0" class="pl-content">
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
            <el-button type="primary">
              <i class="ri-code-ai-line icon icon-middle"></i>运行
            </el-button>
            <el-button type="primary">
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
          <plEditor code="<div>Hello World</div>" language="html" v-if="initCodeTab === 'html'" />
          <plEditor code=".div{colorr: red;}" language="css" v-if="initCodeTab === 'css'" />
          <plEditor
            code="console.log(1)"
            language="javascript"
            v-if="initCodeTab === 'javascript'"
          />
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="pl-content-right">
        <div class="pl-content-right--header">
          <div class="tab">
            <span class="active"><i class="ri-eye-fill icon icon-middle"></i>效果预览</span>
            <span><i class="ri-terminal-box-fill icon icon-middle"></i>日志</span>
          </div>
          <div></div>
        </div>
        <div class="pl-content-right--editor pl-main">
          <iframe src="" frameborder="0"></iframe>
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
        gap: 14px;
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
  }
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
