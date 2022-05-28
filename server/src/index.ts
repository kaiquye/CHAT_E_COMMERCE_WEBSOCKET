import "dotenv/config";
import Server from "./server";

Server.listen(process.env.PORT, function () {
  console.log("runnig....", process.env.PORT);
});
