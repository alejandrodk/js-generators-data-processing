const myFakeDB = async () =>
  Array.from(
    {
      length: 1000,
    },
    (v, index) => `${index}-laptop`
  );

const PRODUCTS_API = `http://localhost:3000/products`;
const CART_API = `http://localhost:3001/cart`;

async function processDBData() {
  const products = await myFakeDB();
  const responses = [];

  for (const product of products) {
    const productInfo = await (
      await fetch(`${PRODUCTS_API}?name=${product}`)
    ).text();

    const cartInfo = await (
      await fetch(`${CART_API}`, {
        method: "POST",
        body: productInfo,
      })
    ).text();

    responses.push(cartInfo);
  }

  return responses;
}

console.table(await processDBData());
