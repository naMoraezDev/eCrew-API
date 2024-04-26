import app from "../src/app";
import { normalize } from "path";

const port = Number(normalize(process.env.PORT || "3333"));

app.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
