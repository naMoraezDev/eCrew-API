import { normalize } from "path";
import app from "../app";

const port = Number(normalize(process.env.PORT || "3333"));

app.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
