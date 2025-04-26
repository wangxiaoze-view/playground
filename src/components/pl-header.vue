<script lang="ts" setup>
import { useThemeStore } from '@/store/modules/theme'
import { EColor } from 'functional-helpers/enums'
import plShare from './pl-share.vue'
import plDownload from './pl-download.vue'
const store = useThemeStore()

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
        <el-color-picker
          v-model="store.themeColor"
          :show-alpha="false"
          :predefine="Object.values(EColor)"
          @change="store.onSetThemeColor"
        />
        <el-tooltip class="box-item" effect="light" content="更新日志" placement="bottom">
          <el-button
            type="primary"
            @click="
              onpenUrl('https://github.com/wangxiaoze-view/playground/blob/main/CHANGELOG.md')
            "
            ><i class="ri-blogger-line icon-middle"></i>更新日志</el-button
          >
        </el-tooltip>

        <!-- <pl-download /> -->
        <pl-share />
        <!-- <el-tooltip class="box-item" effect="light" content="设置" placement="bottom">
          <el-button type="primary"><i class="ri-settings-2-line icon-middle"></i>设置</el-button>
        </el-tooltip> -->
        <el-tooltip class="box-item" effect="light" content="我的项目" placement="bottom">
          <i
            class="ri-bubble-chart-fill icon icon-middle"
            @click="onpenUrl('https://www.wangxiaoze.cn/')"
          ></i>
        </el-tooltip>

        <el-tooltip class="box-item" effect="light" content="Github" placement="bottom">
          <i
            class="ri-github-fill icon"
            @click="onpenUrl('https://github.com/wangxiaoze-view/playground')"
          ></i>
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
</style>
