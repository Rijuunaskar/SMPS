const customTrim = (str) => {
    try {
        str = str
        .replace(':/n', '')
        .replace('/n', '').replace(/\n/g, ' ')
        .replace(/[^a-zA-Z0-9. ]/g, ' ')  // Replace all non-alphanumeric characters (except space) with space
        .replace(/\s+/g, ' ').trim();     // Replace multiple spaces with a single space;
        return str
    } catch (error) {
        console.log('error in custom trim ----',str);
        return false
    }
}

module.exports = { customTrim }