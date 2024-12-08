import Image from "next/image";
import Top from "@/app/layout/Top";
import Header from "./layout/Header";
import Hero from "./component/Hero";
import Arrival from "./component/Arrival";
import TopS from "./component/Top-selling";
import Style from "./component/Style";
import Customer from "./component/Customer";
import Footer from "./layout/Footer";


export default function Home() {
  return (
    <div>
      <Top/>
      <Header/>
      <Hero/>
      <Arrival/>
      <TopS/>
      <Style/>
      <Customer/>
      <Footer/>
      
    </div>
  );
}
