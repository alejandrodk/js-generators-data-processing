import { createServer } from "http";

const PORT = 3001;
async function handler(request, response) {
  return response.end(`hey!`);
}

createServer(handler)
  .listen(PORT)
  .on("listening", () => {
    console.log(`cart API is running at ${PORT}`);
  });
