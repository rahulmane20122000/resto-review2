import  {
    Application,
    json,
    NextFunction,
    Request,
    Response,
  } from "express";
  import { routes } from "./routes.data";
  import cors from "cors";
  
  
  export const registerRoutes = (app: Application) => {
    app.use(cors());
    app.use(json());
    for (let route of routes) {
      app.use(route.path, route.router);
    }
  
    app.use((response: any, req: Request, res: Response, next: NextFunction) => {
      res.status(response.statusCode || 500).send(response);
    });
  };