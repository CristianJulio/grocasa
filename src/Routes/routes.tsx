import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";

export const HOME = "/"
export const DETAILS = "/detalles"

export const routes = [
  {
    path: HOME,
    element: <Home />
  },
  {
    path: DETAILS,
    element: <Details />
  }
]