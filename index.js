// supported colors
const COLOR_MAP = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']

// main display function
const mainLog = (msg, { title = defaultTitle, color = defaultColor } = {}) => {
    const COLOR_CODE = COLOR_MAP.indexOf(color)
    if (COLOR_CODE >= 0) {
        const TITLE_STR = title ? `\x1b[4${COLOR_CODE};30m ${title} \x1b[0m ` : ''
        console.log(`${TITLE_STR}\x1b[3${COLOR_CODE}m${msg}\x1b[;0m`)
        return true
    }
    else {
        console.log(title ? `${title} ${msg}` : msg)
        return false
    }
}

function initColor({defaultTitle='', defaultColor='yellow', functionName='color'} = {}) {
    // add function in console module
    console[functionName] = (msg, { title = defaultTitle, color = defaultColor } = {}) => {
        return mainLog(msg, { 
            title: title,
            color: color 
        })
    }

    // add easy function
    COLOR_MAP.map(colorName => {
        console[functionName][colorName] = (msg, title=defaultTitle) => {
            return mainLog(msg, { 
                title: title, 
                color: colorName
            })
        }
    })
}

module.exports = initColor