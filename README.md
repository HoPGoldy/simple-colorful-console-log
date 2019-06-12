# simple-colorful-console-log
A simple console log display module

# Add

```
npm install colors-log
```

# Init

```js
require('colors-log')()
```

# Usage

```js
console.color('simple log!')
```

The console will show a log with a default color of **yellow**. You can also use the following method to show logs of other colors.

```js
console.color.red('simple log!')
```

This module supports six color as follows, Use it as a method name to show logs:

- red
- green
- yellow
- blue
- magenta
- cyan

# Configuration

You can pass an object to configure when executes `require()`. The supported configuration items are as follows:

```js
require('colors-log')({
    // default title displayed at the top of the log
    defaultTitle: 'title',
    // default color 
    defaultColor: 'blue',
    // The name of the method that the module mounts on the console
    functionName: 'colors'
})
```

# Single log configuration

You can take a single configuration by passing an object to the second argument of the `console.color` method.

```js
console.color('simple log!', {
    // this log's title
    title: 'custom title',
    // this log's color
    color: 'blue'
})
```

You can also pass a string to the second argument of the `console.color[colorName]` method to config the title of this log, as follows:

```js
console.color.red('red log!', 'custom title')
```