#!/usr/bin/env sh

# 确保你处于项目的根目录
cd "$(dirname "$0")"

# 构建项目
npm run generate

# 进入 dist 目录
cd dist

# 初始化 Git 仓库 (如果还没有)
git init -b main

# 添加所有文件
git add -A

# 提交更改
git commit -m 'deploy'

# 推送到 gh-pages 分支
git push -f git@github.com:1510207073/tik-grabber.git main:gh-pages

# 返回项目根目录
cd ..