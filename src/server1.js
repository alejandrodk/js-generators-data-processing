import { createServer } from "http";

const PORT = 3000;
async function handler(request, response) {
  if (request.method === "GET" && request.url.includes("products")) {
    console.log("request", request.url);
  }
  return response.end(`hey!`);
}

createServer(handler)
  .listen(PORT)
  .on("listening", () => {
    console.log(`products API is running at ${PORT}`);
  });
