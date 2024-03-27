import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation} from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const selectMenu = [
  {
    title: 'Áo thun',
    cateID: 1,
    image: 'https://static.vecteezy.com/system/resources/previews/008/847/318/non_2x/isolated-black-t-shirt-front-free-png.png'
  },
  {
    title: 'Áo sơ mi',
    cateID: 2,
    image: 'https://freepngimg.com/save/12846-dress-shirt-png-hd/480x480'
  }, {
    title: 'Nón',
    cateID: 3,
    image: 'https://static.vecteezy.com/system/resources/thumbnails/011/356/628/small/black-baseball-cap-png.png'
  }, {
    title: 'Quần',
    cateID: 4,
    image: 'https://product.hstatic.net/200000775589/product/qsk101_001_f881ad28db3749e1af71c2f2b0dcbf05_master.png'
  }
  ]
export default function SelectCard({state,setState}) {
    return (
      <>
        <p className="text-2xl font-semibold text-center pt-32"> Options</p>

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
                    onClick={()=>{setState(menu.title)}}
                    >
                    <div className="basis-1/2 rounded-2xl flex flex-col xl:flex-row items-center justify-center shadow-lg
                        border border-solid border-green-500 border-2 transition ease-in-out hover:-translate-y-1 hover:scale-110
                        hover:bg-green-100"> 

                        <img className="w-24 ml-6 h-24" src={menu.image} alt=""></img>
                        
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
  