import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes , Route } from "react-router-dom"
import Home from './composant/Home';
import Panier from './composant/Panier';
import { PanierContextProvider } from './context/panierContext';
import Bon from './composant/Bon';
import NotFound from './composant/NotFound';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PanierContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='panier' element={<Panier/>}/>
          <Route path='bon' element={<Bon />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </PanierContextProvider>
  </React.StrictMode>,
)
