# simple-colorful-console-log

一个简单易用的彩色日志显示函数

# 安装

```
npm install colors-log
```

# 引入

```js
require('colors-log')()
```


# 使用

```js
console.color('simple log!')
```

控制台就会输出默认为黄色的日志，你也可以使用如下方法输入其他颜色的日志

```js
console.color.red('simple log!')
```

本模块支持六种彩色字体，如下：

- red 红色
- green 绿色
- yellow 黄色
- blue 蓝色
- magenta 洋红
- cyan 青色

# 配置

你可以在模块执行 `require` 时传入一个对象来进行配置，支持的配置项如下：

```js
require('colors-log')({
    // 默认行首
    defaultTitle: 'title',
    // 默认颜色
    defaultColor: 'blue',
    // 模块挂载在 console 模块上的方法名
    functionName: 'colors'
})
```

# 单条 log 的配置

你可以通过给 `console.color` 方法的第二个参数传递一个对象来进行单条配置

```js
console.color('simple log!', {
    // 本条标题
    title: 'custom title',
    // 本条颜色
    color: 'blue'
})
```

你也可以给 `console.color[colorName]` 方法的第二个参数传递一个字符串来指定本条的标题，如下：

```js
console.color.red('red log!', 'custom title')
```