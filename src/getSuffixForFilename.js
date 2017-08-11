const isSuffixMatch = (suffix, str) => new RegExp(`${suffix}$`).test(str)

const NO_MATCH = {
    toSuffix: null
}

module.exports = (map, fileName) => {
    for (const fromSuffix in map) {

        if (isSuffixMatch(fromSuffix, fileName)) {
            return {
                fromSuffix,
                toSuffix: map[fromSuffix]
            }
        }
    }

    return NO_MATCH
}