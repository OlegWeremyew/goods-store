import {AppRoutes} from "@/app/AppRoutes";
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import '@/assets/styles/index.css'
import {Sidebar} from "@/components/Sidebar/Sidebar";
import {useEffect} from "react";
import {getCategories} from "@/store/categories/categoriesSlice";
import {useAppDispatch} from "@/store";
import {getProducts} from "@/store/products/productsSlice";

export function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])
  return (
    <div className="app">
      <Header/>
      <div className="container">
        <Sidebar/>
        <AppRoutes/>
      </div>
      <Footer/>
    </div>
  )
}
