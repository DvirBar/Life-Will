import MyDocument from "./cmps/pdf/pdf";
import { HomePage } from "./pages/home-page";

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: "/",
    component: <MyDocument />,
  },
//   {
//     path: "/",
//     component: <HomePage />,
//   },
];

export default routes;
