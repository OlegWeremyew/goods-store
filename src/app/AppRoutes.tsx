import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "@/components/Home/Home";
import {ROUTES} from "@/utils/routes";
import {SingleProduct} from "@/components/Products/SingleProduct";

export const AppRoutes = () => (
  <Routes>
    <Route index path={ROUTES.HOME} element={<Home/>}/>
    <Route index path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
  </Routes>
);
