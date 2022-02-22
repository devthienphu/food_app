import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import AddButton from "../Buttons/addButton";
import CheckButton from "../Buttons/checkButton";


// let foodList =[
//     { 
//         id:1,
//         name:'Salamon salad',
//         description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
//         price:'$49',
//         image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
//         isCheck:false
//     },
//     { 
//         id:2,
//         name:'Salamon salad',
//         description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
//         price:'$49',
//         image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
//         isCheck:false
//     },
//     { 
//         id:3,
//         name:'Salamon salad',
//         description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
//         price:'$49',
//         image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
//         isCheck:false
//     },
//     { 
//         id:4,
//         name:'Salamon salad',
//         description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
//         price:'$49',
//         image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
//         isCheck:false
//     },
//     { 
//         id:5,
//         name:'Salamon salad',
//         description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
//         price:'$49',
//         image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
//         isCheck:false
//     },
//     { 
//         id:6,
//         name:'Salamon salad',
//         description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
//         price:'$49',
//         image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
//         isCheck:false
//     },
//     { 
//         id:7,
//         name:'Salamon salad',
//         description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
//         price:'$49',
//         image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
//         isCheck:false
//     },
//     { 
//         id:8,
//         name:'Salamon salad',
//         description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
//         price:'$49',
//         image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
//         isCheck:false
//     },   
// ]

export default function Card({foodList}) {
    const navigate=useNavigate();

    // const[state,setState] = useState(false);

    return (
      <>
        <div className="flex flex-row flex-wrap space-x-4 justify-between pt-14 items-center "> 

        <h3 className="basis-1/8 m-auto textfont-medium text-lg text-center md:text-left text-xl md:ml-44 flex items-center "> Popular foods</h3>

        <div className="flex basis-1/8 hidden md:flex">

            <a className="cursor-pointer mr-44 whitespace-nowrap w-36 inline-flex items-center justify-center px-2 py-1
                        border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                        onClick={()=>{navigate('/Menu')}} href="#">
            View all
                
                
            </a>

        </div>
        </div>

        
        <div className="pt-20 flex flex-col lg:flex-row flex-wrap gap-x-8 gap-y-20 justify-center items-center">

            {
                foodList.map((food)=>(

                    <div key ={food.id} class="basis-1/5 rounded-lg flex flex-col xl:flex-row items-center justify-center bg-gray-100 
                                md:max-w-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 shadow-lg hover:bg-gray-200"
                        onClick={()=>{
                            // food.isCheck = !food.isCheck;
                            // setState(!state)
                            navigate(`/Product/${food.id}`)
                        }}
                        >

                        <img className="w-32 pb-64 rounded-t-lg absolute" src={food.image} alt="product" />
                        
                        <div className="px-5 pb-5 pt-20 ">
            
                            <h3 className="text-xl font-semibold tracking-tight text-gray-900 ">{food.name}</h3>
                            <p className="text-sm text-gray-600">{food.description}</p>

                        <div className="flex items-center mt-2.5 mb-5">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <span className='text-3xl font-bold text-gray-900 '>{food.price}</span>
                            {food.isCheck && <AddButton></AddButton> ?<CheckButton></CheckButton>:<AddButton></AddButton>}
                            
                        </div>
                        </div>
                    
                        
                    </div>

                    
                ))
            }

        </div>


        

      </>
    
    );
  }
  