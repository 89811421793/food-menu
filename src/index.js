import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bask from "./pages/prodbasket";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store'
import Item from "./pages/description"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },

  {
    path: "/prodbasket",
    element: <Bask />,
  },

  {
    path: "/description/:id",
    element: <Item />,
  },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
