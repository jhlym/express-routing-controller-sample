import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controller/UserController";

// import express from "express";

const app = createExpressServer({
  controllers: [UserController] // we specify controllers we want to use
});

// app.get("/", function(req: express.Request, res: express.Response) {
//   res.send("Hello world");
// });

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
