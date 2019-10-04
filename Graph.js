
const sampleGraph = {
    a: {
        b:20,
        c:42,
        d:35
    },
    b: {
        a:20,
        c:30,
        d:34
    },
    c: {
        a:42,
        b:30,
        d:12
    },
    d: {
        a:35,
        b:34,
        c:12
    },
};

module.exports = sampleGraph;