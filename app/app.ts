import express from "express";
import { registerRoutes } from "./modules/routes/routes.register";


export const startApp = () => {
  const app = express();
  const { PORT } = process.env;
  registerRoutes(app);
  app.listen(PORT, () => console.log(`server listening at port : ${PORT}`));
};
