---
title: Load 加载效果
group:
  title: Load 加载效果
nav:
  title: '组件'
  path: /components
---

## Load

Demo:

<code src="./demos/sample.tsx" />

## API

| 参数            | 说明                                                                                                                                                                                                | 类型     | 默认值    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| tip             | 自定义内容，可以传入 string 或 reactElement                                                                                                                                                         | any      | -         |
| size            | 设置动画尺寸<br/>**可选值**:<br/>'large'(大号)<br/>'medium'(中号)                                                                                                                                   | Enum     | 'large'   |
| tipAlign        | 自定义内容位置<br/> **可选值**:<br/> 'right'(出现在动画右边) <br/>'bottom'(出现在动画下面)                                                                                                          | Enum     | 'bottom'  |
| visible         | loading 状态, 默认 true                                                                                                                                                                             | Boolean  | true      |
| onVisibleChange | 全屏模式下，loading 弹层请求关闭时触发的回调函数 <br/> **签名**: <br/>Function(type: String, e: Object) => void <br/>**参数**:<br/> _type_: {String} 弹层关闭的来源 <br/>_e_: {Object} DOM 事件     | Function | func.noop |
| indicator       | 自定义动画                                                                                                                                                                                          | any      | -         |
| color           | 动画颜色                                                                                                                                                                                            | String   | -         |
| fullScreen      | 全屏展示                                                                                                                                                                                            | Boolean  | -         |
| disableScroll   | 当点击 document 的时候，如果包含该节点则不会关闭弹层， 如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组 是否禁用滚动，仅在 fullScreen 模式下生效 | Boolean  | false     |
| safeNode        | 安全节点，fullScreen 时有效，                                                                                                                                                                       | any      | -         |
| children        | 子元素                                                                                                                                                                                              | any      | -         |
