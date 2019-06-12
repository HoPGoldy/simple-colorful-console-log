const COLOR_MAP = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']

function initColor({defaultTitle='COLOR', defaultColor='yellow', functionName='color'} = {}) {
    console[functionName] = (msg, { title = defaultTitle, color = defaultColor } = {}) => {
        const COLOR_CODE = COLOR_MAP.indexOf(color)
        if (COLOR_CODE >= 0) {
            const TITLE_STR = title ? `\x1b[4${COLOR_CODE};30m ${title} \x1b[0m ` : ''
            console.log(`${TITLE_STR}\x1b[3${COLOR_CODE}m${msg}\x1b[;0m`)
        }
        else {
            console.log(title ? `${title} ${msg}` : msg)
        }
    }
}

module.exports = initColor