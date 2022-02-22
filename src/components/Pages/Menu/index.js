import Card from "../../Contents/Cards/card";
import SelectCard from "../../Contents/ExampleCard/SelectCard";
import Footer from "../../Footer";
import Header from "../../Header";
import foodList from '../../../data/data'



export default function Menu() {
    return (
      <>
        <Header></Header>
        <SelectCard></SelectCard>
        <Card foodList={foodList}/>
        <Footer/>
      </>
    )
}
  
