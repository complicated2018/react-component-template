lusf react component lib

```bash
# 安装lerna
$ yarn global add lerna
$ npm i lerna -g
```

```bash
# 安装依赖
# 会把所有包的依赖安装到根node_modules
$ lerna bootstrap
```

```bash
# 增加本地或者远程package做为当前项目packages里面的依赖
# --dev devDependencies 替代 dependencies
# --exact 安装准确版本，就是安装的包版本前面不带^, Eg: "^2.20.0" ➜ "2.20.0"
$ lerna add <package>[@version] [--dev] [--exact] --scope scopeName
# 例：lerna add lodash --scope @lusf/lykang
```

```bash
# 删除所有包的node_modules目录
$ lerna clean
```

```bash
# 列出下次发版lerna publish 要更新的包
# 原理：
# 需要先git add,git commit 提交。
# 然后内部会运行git diff --name-only v版本号 ，搜集改动的包，就是下次要发布的。并不是网上人说的所有包都是同一个版全发布。
$ lerna changed
```

```bash
# git 提交
$ yarn commit
```

```bash
# 编译lykang组件库
$ yarn build:lykang
```

```bash
# 发布
# 会打tag，上传git,上传npm
$ lerna publish
```
