import {AppRoutes} from "@/app/AppRoutes";
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import '@/assets/styles/index.css'
import {Sidebar} from "@/components/Sidebar/Sidebar";
import {useEffect} from "react";
import {instance} from "@/api";

export function App() {

  useEffect(() => {
    instance('/categories').then(({data})=>{
      console.log({data})
    });
  }, [])
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
