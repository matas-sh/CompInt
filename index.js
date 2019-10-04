
const express = require("express");
const graph = require('./Graph');
const costCalculator = require('./CostCalculator');
// const routeGenerator = require('./RouteGenerator');
const routePermutation = require('./RoutePermutation');

const app = express();
const port = process.env.PORT || "8000";

const routes = routePermutation(Object.keys(graph));

console.time('routeCost');
routes.forEach(route => {
    console.log(`cost of ${route} : `,costCalculator(route));
});
console.timeEnd('routeCost');


app.get("/", (req, res) => {
  res.status(200).send("gotcha!");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});