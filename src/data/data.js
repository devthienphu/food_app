
import {useState} from 'react'


let foodList =[
    { 
        id:1,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'sushi',
        isPopular:true
    },
    { 
        id:2,
        name:'Burger Plus',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49.99',
        image:'https://freepngimg.com/thumb/burger/22388-5-burger-food.png',
        isCheck:false,
        cate:'sushi',
        isPopular:true
    },
    { 
        id:3,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'sushi',
        isPopular:true
    },
    { 
        id:4,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'sushi',
        isPopular:true
    },
    { 
        id:5,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'sushi',
        isPopular:true
    },
    { 
        id:6,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'sushi',
        isPopular:true
    },
    { 
        id:7,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'sushi',
        isPopular:true
    },
    { 
        id:8,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'sushi',
        isPopular:true
    },
    { 
        id:9,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'soups'
    },
    { 
        id:10,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'soups'
    },
    { 
        id:24,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'soups'
    },
    { 
        id:25,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'soups'
    },
    { 
        id:11,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'fruit'
    },
    { 
        id:12,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'fruit'
    },
    { 
        id:13,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'fruit'
    },
    { 
        id:14,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'fruit'
    },
    { 
        id:15,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'drinks'
    },
    { 
        id:17,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'drinks'
    },
    { 
        id:18,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'drinks'
    },
    { 
        id:19,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'drinks'
    },
    { 
        id:20,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'fastfood'
    },
    { 
        id:21,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'fastfood'
    },
    { 
        id:22,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'fastfood'
    },
    { 
        id:23,
        name:'Salamon salad',
        description:'Smoke salmon, red, caviar, boiled potatoes, boiled carrots, frozen green peas, set',
        detail:'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        price:'49',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        isCheck:false,
        cate:'fastfood'
    },

  ];


export default foodList;