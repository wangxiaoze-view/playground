<script lang="ts" setup>
import { useThemeStore } from '@/store/modules/theme'
import { storeToRefs } from 'pinia'
import { EColor } from 'functional-helpers/enums'

const store = useThemeStore()
const { getThemeColor } = storeToRefs(store)
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
          <el-button type="primary"><i class="ri-blogger-line icon-middle"></i>更新日志</el-button>
        </el-tooltip>

        <el-tooltip class="box-item" effect="light" content="下载" placement="bottom">
          <el-button type="primary">
            <i class="ri-download-cloud-line icon-middle"></i>下载
          </el-button>
        </el-tooltip>
        <el-tooltip class="box-item" effect="light" content="分享" placement="bottom">
          <el-button type="primary"><i class="ri-share-line icon-middle"></i>分享</el-button>
        </el-tooltip>
        <el-tooltip class="box-item" effect="light" content="设置" placement="bottom">
          <el-button type="primary"><i class="ri-settings-2-line icon-middle"></i>设置</el-button>
        </el-tooltip>
        <el-tooltip class="box-item" effect="light" content="Github" placement="bottom">
          <i class="ri-github-fill icon"></i>
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
