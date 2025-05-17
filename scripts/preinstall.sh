#!/bin/bash

# 如果有lib-functional-helpers.tar.gz文件,则删除
if [ -f "lib-functional-helpers.tar.gz" ]; then
  rm -rf lib-functional-helpers.tar.gz
fi

echo ""
echo "⏬正在下载插件..."
echo ""

# 下载远程文件
curl -L -o "lib-functional-helpers.tar.gz" "https://cdn.wangxiaoze.cn/assets/libs/lib-functional-helpers.tar.gz"
echo ""
echo ""
echo "⏬正在执行脚本文件..."
echo ""
echo ""
node ./scripts/preinstall.js
echo ""
echo ""
pnpm install

