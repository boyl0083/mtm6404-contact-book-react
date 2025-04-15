import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Details from "../routes/details.jsx";
import { Add } from "../utils/add.jsx";
import EditForm from "../components/EditForm.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/add',
    element: <Add />
  },
  {
    path: '/contact/view/:id',
    element: <Details />
  },
  {
    path: '/contact/edit/:id',
    element: <EditForm />
  }
]);

export default router;