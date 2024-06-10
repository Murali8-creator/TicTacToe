import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";


const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/products" element={<ProductsPage/>}/>
  </Route>
);

// const router = createBrowserRouter([
//   { path:'/', element:<HomePage/> },
//   { path:'/products', element:<ProductsPage/>}
// ])

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
