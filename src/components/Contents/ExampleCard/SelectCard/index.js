import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation} from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const selectMenu = [
    {
        title:'Fast food',
        type:'fastfood',
        image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
    },
    {
        title:'Sushi',
        type:'sushi',
        image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
    },
    {
        title:'Fruit',
        type:'fruit',
        image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
    },
    {
        title:'Soups',
        type:'soups',
        image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
    },
    {
        title:'Drinks',
        type:'drinks',
        image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
    },
  ]
export default function SelectCard({state,setState}) {
    return (
      <>
        <p className="text-2xl font-semibold text-center pt-8"> Options</p>

        <Swiper
        modules={[Autoplay,Navigation]}
        spaceBetween={-150}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{ delay: 2500,disableOnInteraction: false }}
        breakpoints={{
          // when window width is >= 640px
        
          // when window width is >= 768px
          768:{
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
        },
        }}
        
        >
            {
                selectMenu.map((menu,index)=>(
                <SwiperSlide key={index}>
                    <div className="flex flex-col lg:flex-row flex-wrap gap-x-8 gap-y-20 justify-center items-center pt-8 mb-4"
                    onClick={()=>{setState(menu.type)}}
                    >

                    <div className="basis-1/2 rounded-2xl flex flex-col xl:flex-row items-center justify-center shadow-lg
                        border border-solid border-green-500 border-2 transition ease-in-out hover:-translate-y-1 hover:scale-110
                        hover:bg-green-100"> 

                        <img className="w-24 ml-6" src={menu.image} alt=""></img>
                        
                        <p className="mx-auto font-semibold text-xl">{menu.title}</p>
                        
                    </div>
                    </div>
                </SwiperSlide>
                ))

            }
       
       

        

        </Swiper>


      </>
    
    );
  }
  