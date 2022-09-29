import { createServer } from "http";
import { parse } from "url";

const PORT = 3000;
async function handler(request, response) {
  if (request.method === "GET" && request.url.includes("products")) {
    const {
      query: { name },
    } = parse(request.url, true);
  }
  return response.end(`hey!`);
}

createServer(handler)
  .listen(PORT)
  .on("listening", () => {
    console.log(`products API is running at ${PORT}`);
  });
