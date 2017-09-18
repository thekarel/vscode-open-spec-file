const isSuffixMatch = (regex, str) => new RegExp(regex).test(str)

const NO_MATCH = {
    toSuffix: null
}

module.exports = (map, fileName) => {
    for (const fromRegex in map) {

        if (isSuffixMatch(fromRegex, fileName)) {
            return {
                fromRegex,
                toRegex: map[fromRegex]
            }
        }
    }

    return NO_MATCH
}