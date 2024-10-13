import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "@/navigation/ProtectedRoute";

import CityList from "@/features/cities/CityList";
import CountryList from "@/features/countries/CountryList";
import City from "@/features/cities/City";
import Form from "@/features/newCityForm/Form";
import SpinnerFullPage from "@/navigation/spinnerFullPage/SpinnerFullPage";

const Homepage = lazy(() => import("@/features/home/Homepage"));
const Product = lazy(() => import("@/features/pricingProduct/Product"));
const Pricing = lazy(() => import("@/features/pricingProduct/Pricing"));
const Login = lazy(() => import("@/features/login/Login"));
const AppLayout = lazy(() => import("@/layout/app/AppLayout"));
const HomeLayout = lazy(() => import("@/layout/home/HomeLayout"));
const PageNotFound = lazy(() => import("./PageNotFound"));

export default function Navigation() {
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<HomeLayout />}>
          <Route path="login" element={<Login />} />
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>

        <Route
          path="app"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList />} />
          <Route path="cities/:id" element={<City />} />
          <Route path="countries" element={<CountryList />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
