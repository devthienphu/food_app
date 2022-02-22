import Slider from "./Slider/slider";
import Category from "./ExampleCard/examCard";
import Card from "./Cards/card";
import Footer from "../Footer";
import Header from "../Header";
import banner from "../../images/banner.png";
import foodList from '../../data/data';



export default function Content() {
    return (
      <>

    <Header/>
    
    <div className="w-64 h-64 z-10 bg-green-500 right-0 fixed clip hidden lg:flex">
        
    </div>

     <Slider></Slider>
     <Category></Category>
     <Card foodList={foodList}></Card>

     <img src={banner} img="" className="m-auto pt-8 w-fit"></img>

    <Footer/>
      </>
    
    );
  }
  