const isSuffixMatch = str => suffix => new RegExp(`${suffix}$`).test(str)
const byLengthDescending = (first, second) => second.length - first.length;

const NO_MATCH = {
    toSuffix: null
}

module.exports = (map, fileName) => {
    const keys = Object.keys(map);

    const match = keys
    .filter(isSuffixMatch(fileName))
    .sort(byLengthDescending)
    .shift();

    if(match){
        return {
            fromSuffix: match,
            toSuffix: map[match]
        }
    }

    return NO_MATCH
}