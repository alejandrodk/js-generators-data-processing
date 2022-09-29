import { createServer } from "http";

const PORT = 3000;
async function handler(request, response) {
  return response.end(`hey!`);
}

createServer(handler)
  .listen(PORT)
  .on("listening", () => {
    console.log(`products API is running at ${PORT}`);
  });
