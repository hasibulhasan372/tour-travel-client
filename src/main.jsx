import React from 'react'
import ReactDOM from 'react-dom/client'
import "react-datepicker/dist/react-datepicker.css";
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import 'rsuite/dist/rsuite-no-reset.min.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
