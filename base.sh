#!/bin/bash

echo "正在进行项目打包，请稍等..."

# 假设环境变量名为 TARGET_DIR
if [ -z "$Re_Install" ]; then
  echo "环境变量 Re_Install 未设置"
  exit 1
fi

# 如果不存在 build.sh文件
if [ ! -f "build.sh" ]; then
  echo "build.sh 文件不存在"
  exit 1
fi

# 是否需要install
if test "$Re_Install" = "true" ; then
	rm -rf node_modules pnpm-lock.yaml
	pnpm install
fi

#  执行 build.sh
chmod +x build.sh
./build.sh