import Card from "../../Contents/Cards/card";
import SelectCard from "../../Contents/ExampleCard/SelectCard";
import Footer from "../../Footer";
import Header from "../../Header";
import foodList from '../../../data/data'
import {useState} from 'react';

const selectMenu = [
  {
    cateName: 'Áo thun',
    cateID: 1,
    image: 'https://static.vecteezy.com/system/resources/previews/008/847/318/non_2x/isolated-black-t-shirt-front-free-png.png'
  },
  {
    cateName: 'Áo sơ mi',
    cateID: 2,
    image: 'https://freepngimg.com/save/12846-dress-shirt-png-hd/480x480'
  }, {
    cateName: 'Nón',
    cateID: 3,
    image: 'https://static.vecteezy.com/system/resources/thumbnails/011/356/628/small/black-baseball-cap-png.png'
  }, {
    cateName: 'Quần',
    cateID: 4,
    image: 'https://product.hstatic.net/200000775589/product/qsk101_001_f881ad28db3749e1af71c2f2b0dcbf05_master.png'
  }
]

let cate ='all';

export default function Menu() {


    const [state, setState] = useState(cate);

    return (
      <>
        <Header></Header>
        <SelectCard state={state} setState={setState}/>
        <Card foodList={foodList} state={state} setState={setState}/>
        <Footer/>
      </>
    )
}
  
