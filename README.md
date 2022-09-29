# Processing data on demand using Javascript Generators

Javascript generators could be very usefull to get and process data **on demand**. Doing that, we'll be able to process small portions of data without block our application instead of await and store larges amounts of data in memory before be able to process it.

This project was developed using only NodeJs native packages and experimental functions, without any framework.

[Mozilla - Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
[Mozilla - Function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

## Packages

[node - http](https://nodejs.org/api/http.html)
[node - url](https://nodejs.org/api/url.html)
[node - crypto](https://nodejs.org/api/crypto.html)
[node - events](https://nodejs.org/api/events.html)

## Files

| file       | description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| server1.js | get a single product name and return product detail                                                                |
| server2.js | get a single product, process it and return ACK                                                                    |
| client.js  | get products from DB, get detail of each one from server1 and then, send it to server2 and display success message |

## Explanation

### Using regular functions

The first approach developed into `processDBData()` method have several lacks that may affect the process performance, first of all, it needs to get and store all database products in memory, then, iterate over each product and first, request the product detail and then, send it to cart API to process, awaiting for the cart API response. Once the response comes, push it to `responses` array.

When all database products had processed, the process print a table with the results.

### Using Generators

In the second approach using Javascript Generators (notice that the function was declared with a `*` at the end -> `function*`), the process still getting all products of the fake database and store it in memory, but the key of this approach comes from the `yield` method replacing the `return` statement that we usually use.

Using the `yield` method of **Generator functions**, we can return a partial result on each iteration, instead of await until all products will be processed. This simple change allow us to get, process and return data **on demand**, getting instant results.

## Considerations

This project was developed using new core packages from node **v18.4**, run `nvm use` or install node `18.4` before run it.

## Run project

1. set up node version `nvm use` or `nvm install 18.4`
2. run server 1 (products) `npm run start:server1`
3. run server 2 (cart) `npm run start:server2`
4. run client `npm run start:client`

First, try running the project with the `processDBData` method to see the difference between both solutions.

```js
//for await (const data of processDBDataGen()) {
//  console.table(data);
//}
console.table(await processDBData());
```
