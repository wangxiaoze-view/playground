<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'
import { EColor } from 'functional-helpers/enums'
import plShare from './pl-share.vue'
import plDownload from './pl-download.vue'
import { links } from '@/config/cdn'
import { useCodeStore } from '@/store/modules/code'
import { useTemplate } from '@/hooks/useTemplate'
const store = useAppStore()
const codeStore = useCodeStore()
const appStore = useAppStore()
const { onChangeTemplate } = useTemplate()
const onpenUrl = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <el-row :gutter="0" class="pl-header">
    <el-col :span="12">
      <b>Play-Ground</b>
    </el-col>
    <el-col :span="12">
      <div class="pl-header-tool">
        <el-tooltip
          class="box-item"
          effect="light"
          content="如果加载缓慢，请尝试切换CDN"
          placement="bottom"
        >
          <el-select
            class="w"
            v-model="codeStore.cdnType"
            placeholder="请选择CDN"
            @change="onChangeTemplate('cache')"
          >
            <el-option
              v-for="item in codeStore.cdnList"
              :key="item.name"
              :value="item.name"
              :label="item.name"
            ></el-option>
          </el-select>
        </el-tooltip>

        <el-color-picker
          v-model="store.themeColor"
          :show-alpha="false"
          :predefine="Object.values(EColor)"
          @change="store.onSetThemeColor"
        />

        <el-tooltip class="box-item" effect="light" content="使用教程" placement="bottom">
          <el-button type="primary" @click="appStore.onSetTour(true)">
            <i class="ri-book-3-line icon-middle"></i>使用教程
          </el-button>
        </el-tooltip>

        <el-tooltip class="box-item" effect="light" content="更新日志" placement="bottom">
          <el-button type="primary" @click="onpenUrl(links.uploadLog)">
            <i class="ri-blogger-line icon-middle"></i>更新日志
          </el-button>
        </el-tooltip>

        <!-- 下载 -->
        <pl-download />
        <!-- 分享 -->
        <pl-share />

        <el-tooltip class="box-item" effect="light" content="我的项目" placement="bottom">
          <i class="ri-bubble-chart-fill icon icon-middle" @click="onpenUrl(links.home)"></i>
        </el-tooltip>

        <el-tooltip class="box-item" effect="light" content="Github" placement="bottom">
          <i class="ri-github-fill icon" @click="onpenUrl(links.github)"></i>
        </el-tooltip>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.pl-header {
  padding: 0 14px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #6666;
  b {
    font-size: 20px;
    color: #fff;
  }
  &-tool {
    display: flex;
    align-items: center;
    gap: 14px;
    justify-content: flex-end;
    .icon-middle {
      margin-right: 6px;
    }
    :deep() {
      .el-button {
        margin-left: 0;
      }
    }
  }
}
.w {
  width: 100px;
}
</style>
