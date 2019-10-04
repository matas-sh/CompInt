const graph = require('./Graph');

const costCalculator = (route) => {
    let cost = 0;
    route.forEach((city, i) => {
        if (route[i+1] !== undefined) {
            cost += graph[city][route[i+1]];
        }
    });
    return cost;
}
module.exports = costCalculator;