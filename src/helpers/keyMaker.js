function keyMaker() {
    let count = 0;
    return function() {
        return ++count
    }
};

export default keyMaker();