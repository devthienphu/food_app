

const categories =[
    {   
        id:1,
        name:'Sushi',
        description:'burgers, hamburgers ,hot dogs, fries, nuggest',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png'
    },
    {
        id:2,
        name:'Fast Food',
        description:'burgers, hamburgers ,hot dogs, fries, nuggest',
        image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
    },
    {
        id:3,
        name:'Fruit',
        description:'burgers, hamburgers ,hot dogs, fries, nuggest',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png'
    },


];

export default function Category() {
    return (

        <div className="flex flex-col lg:flex-row flex-wrap gap-x-8 gap-y-8 justify-center items-center">
            {/* <div className="flex flex-row basis-1/4 rounded-lg flex bg-gray-200 shadow-lg ml-16 justify-center items-center overflow-hidden"> */}

                { 
                    categories.map((category)=>(
                <>
                    <div key ={category.id} className="basis-1/4 flex flex-col items-center bg-white rounded-2xl border shadow-md 
                                xl:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
                                transition ease-in-out hover:-translate-y-1 hover:scale-110">
                        <img className="object-cover w-32 rounded-t-lg md:h-auto md:ml-4 md:w-32 md:rounded-none md:rounded-l-lg" src={category.image} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category.name}</h5>
                            <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{category.description}</p>

                            <button className="hidden xl:flex float-right mt-2 2xl:ml-32 xl:ml-20 whitespace-nowrap w-16 inline-flex items-center justify-center px-2 py-1
                                                border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenevenodd" />
                                </svg>
                            </button>
                        </div>
                        
                    </div>
                
                {/* </div> */}

               

                </>
                    ))
                }
 
            {/* </div> */}

            {/* <div div className="basis-1/4 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
            
            <div className="basis-1/4 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div> */}
        </div>

        


    );
  }
  