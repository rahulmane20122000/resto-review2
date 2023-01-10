import { Route, Routes } from "./routes.types";
import userRouter from "../users/user.routes";
import authRouter from "../auth/auth.routes";
import restaurantRoutes from "../restaurant/restaurant.routes";
export const routes: Routes = [
  new Route("/auth", authRouter),
  new Route("/users", userRouter),
  new Route("/restaurant", restaurantRoutes),
];
