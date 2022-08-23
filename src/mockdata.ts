import { IDrinkCategory, IIngridientsFull, IPaymentVariants, IPizzaCategory, ISideCategory } from "./types";


export const ingridientsList:IIngridientsFull[] = [
    {id: 11,category: 1,title: 'Соус Dominos',addPrice: 20,imageUrl: 'https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/07/31/%D1%81%D0%BE%D1%83%D1%81_%D0%B4%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%81-thumbnail-512x512.png'},
    {id: 12,category: 1,title: 'Соус Барбекю',addPrice: 20,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/07/31/%D1%81%D0%BE%D1%83%D1%81_%D0%B1%D0%B1%D0%BA-thumbnail-512x512.png"},
    {id: 13,category: 1,title: "Соус Альфредо",addPrice: 20,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/07/31/%D0%B0%D0%BB%D1%8C%D1%84%D1%80%D0%B5%D0%B4%D0%BE-thumbnail-512x512-70.jpg"},
    {id: 14,category: 1,title: "Соус Часниковий",addPrice: 20,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/07/31/%D1%87%D0%B5%D1%81%D0%BD%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-thumbnail-512x512.png"},
    {id: 15,category: 4,title: "Сир  Моцарела",addPrice: 20,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/07/31/mozzarella--thumbnail-512x512.png"},
    {id: 16,category: 3,title: "Цибуля",addPrice: 20,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/07/31/%D0%BB%D1%83%D0%BA-thumbnail-512x512-70.jpg"},
    {id: 17,category: 3,title: "Гриби",addPrice: 16,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/05/08/shampinony-thumbnail-512x512.png"},
    {id: 18,category: 2,title: "Бекон",addPrice: 21,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/05/08/%D0%B7%D0%B0%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-thumbnail-512x512-70.jpg"},
    {id: 19,category: 2,title: "Шинка",addPrice: 25,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/05/08/large_vetchina_narez-thumbnail-512x512-70.jpg"},
    {id: 23,category: 2,title: "Пепероні",addPrice: 26,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/05/08/Pepp_302x302-thumbnail-512x512-70.jpg"},
    {id: 20,category: 3,title: "Кукурудза",addPrice: 22,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/07/31/yak-pravilno-zvariti-kukurudzu-v-kachanah-shvidko-smachno-prigotuvannya-z-vdeo_894-thumbnail-512x512-70.jpeg"},
    {id: 21,category: 3,title: "Халапеньо",addPrice: 19,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/07/31/%D1%85%D0%B0%D0%BB%D0%B0%D0%BF%D0%B5%D0%BD%D1%8C%D0%BE-thumbnail-512x512-70.jpg"},
    {id: 22,category: 3,title: "Шпинат",addPrice: 15,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/05/08/shpinat350-thumbnail-512x512.png"},
    {id: 24,category: 3,title: "Помідори",addPrice: 18,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2021/07/27/tomato_PNG125491_1-thumbnail-512x512.png"},
    {id: 26,category: 3,title: "Помідори чері",addPrice: 15,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/05/08/cherry-tomatoes-thumbnail-512x512.png"},
    {id: 25,category: 3,title: "Огірки мариновані",addPrice: 15,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/05/08/marinovannye-ogurcy-thumbnail-512x512-70.jpg"},
    {id: 26,category: 3,title: "Болгарський перець",addPrice: 15,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/07/31/%D0%BF%D0%B5%D1%80%D0%B5%D1%86-thumbnail-512x512.png"},
]


export const pizzaCategory: IPizzaCategory[] = [
    {
        id: 0,
        title: 'Краща ціна'
    },
    {
        id: 1,
        title: 'Герої'
    },
    {
        id: 2,
        title: 'Дивина'
    },
    {
        id: 3,
        title: 'Файнест'
    }
]

export const sidesCategory: ISideCategory[] = [
    {
        id: 0,
        title: 'Комбо-бокси'
    },
    {
        id: 1,
        title: 'Хлібці'
    },
    {
        id: 2,
        title: 'Курка'
    },
    {
        id: 3,
        title: 'Соуси'
    }
]

export const drinkCategory: IDrinkCategory[] = [
    {
        id: 0,
        title: 'Вода'
    },    {
        id: 1,
        title: 'Сік'
    },    {
        id: 2,
        title: 'Пиво'
    }
]

export const paymentVariants: IPaymentVariants[] = [{
    id: 0,
    title: 'Готівка'
},{
    id: 1,
    title: 'Картой курєру'
},{
    id: 2,
    title: 'Картой онлайн'
}]



const data = [
    {
     "id": 1,
     "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi-thumbnail-960x960-70.jpg",
     "title": "Пепероні з томатами",
     "rating": 4,
     "category": 0,
     "class": 0,
     "defaultPrice": 251,
     "variants": [
      {
       "title": "Середня",
       "variants": [
        {
         "id": 10,
         "inSell": true,
         "title": "Тонке",
         "fulltitle": "Пепероні з томатами на тонкому(середня)",
         "price": 251
        },
        {
         "id": 11,
         "inSell": true,
         "title": "Пишне",
         "fulltitle": "Пепероні з томатами на пишному(середня)",
         "price": 251
        },
        {
         "id": 12,
         "inSell": true,
         "title": "З філадельфією",
         "fulltitle": "Пепероні з томатами з бортиками філадельфія(середня)",
         "price": 290
        },
        {
         "id": 13,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "fulltitle": "Пепероні з томатами з бортиками хот-дог(середня)",
         "price": 297
        }
       ]
      },
      {
       "title": "Велика",
       "variants": [
        {
         "id": 14,
         "inSell": true,
         "fulltitle": "Пепероні з томатами на тонкому(велика)",
         "title": "Тонке",
         "price": 270
        },
        {
         "id": 15,
         "inSell": true,
         "fulltitle": "Пепероні з томатами на пишному(велика)",
         "title": "Пишне",
         "price": 270
        },
        {
         "id": 16,
         "inSell": true,
         "fulltitle": "Пепероні з томатами з бортиками філадельфія(велика)",
         "title": "З філадельфією",
         "price": 310
        },
        {
         "id": 17,
         "inSell": true,
         "fulltitle": "Пепероні з томатами з бортиками хот-дог(велика)",
         "title": "З Хот-Дог бортом",
         "price": 317
        }
       ]
      }
     ],
     "ingridients": [
      {
       "id": 15,
       "qty": 1
      },
      {
       "id": 12,
       "qty": 1
      },
      {
       "id": 23,
       "qty": 1
      }
     ]
    },
    {
     "id": 2,
     "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg",
     "title": "Піца Мангеттен",
     "rating": 3,
     "defaultPrice": 215,
     "category": 0,
     "class": 0,
     "variants": [
      {
       "title": "Середня",
       "variants": [
        {
         "id": 20,
         "inSell": true,
         "title": "Тонке",
         "price": 215
        },
        {
         "id": 21,
         "inSell": true,
         "title": "Пишне",
         "price": 215
        },
        {
         "id": 22,
         "inSell": true,
         "title": "З філадельфією",
         "price": 259
        },
        {
         "id": 23,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 268
        }
       ]
      },
      {
       "title": "Велика",
       "variants": [
        {
         "id": 24,
         "inSell": true,
         "title": "Тонке",
         "price": 270
        },
        {
         "id": 25,
         "inSell": true,
         "title": "Пишне",
         "price": 270
        },
        {
         "id": 26,
         "inSell": true,
         "title": "З філадельфією",
         "price": 310
        },
        {
         "id": 27,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 317
        }
       ]
      }
     ]
    },
    {
     "id": 3,
     "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2020/12/28/Vetchina_i_griby_-thumbnail-960x960-70.jpg",
     "title": "Піца Шинка та гриби",
     "rating": 3,
     "defaultPrice": 251,
     "category": 0,
     "class": 0,
     "variants": [
      {
       "title": "Середня",
       "variants": [
        {
         "id": 30,
         "inSell": true,
         "title": "Тонке",
         "price": 251
        },
        {
         "id": 31,
         "inSell": true,
         "title": "Пишне",
         "price": 251
        },
        {
         "id": 32,
         "inSell": true,
         "title": "З філадельфією",
         "price": 290
        },
        {
         "id": 33,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 297
        }
       ]
      },
      {
       "title": "Велика",
       "variants": [
        {
         "id": 34,
         "inSell": true,
         "title": "Тонке",
         "price": 270
        },
        {
         "id": 35,
         "inSell": true,
         "title": "Пишне",
         "price": 270
        },
        {
         "id": 36,
         "inSell": true,
         "title": "З філадельфією",
         "price": 310
        },
        {
         "id": 37,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 317
        }
       ]
      }
     ]
    },
    {
     "id": 4,
     "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg",
     "title": "Пепероні з томатами",
     "rating": 4,
     "defaultPrice": 215,
     "category": 1,
     "class": 0,
     "variants": [
      {
       "title": "Середня",
       "variants": [
        {
         "id": 40,
         "inSell": true,
         "title": "Тонке",
         "price": 215
        },
        {
         "id": 41,
         "inSell": true,
         "title": "Пишне",
         "price": 215
        },
        {
         "id": 42,
         "inSell": true,
         "title": "З філадельфією",
         "price": 259
        },
        {
         "id": 43,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 268
        }
       ]
      },
      {
       "title": "Велика",
       "variants": [
        {
         "id": 44,
         "inSell": true,
         "title": "Тонке",
         "price": 254
        },
        {
         "id": 45,
         "inSell": true,
         "title": "Пишне",
         "price": 254
        },
        {
         "id": 46,
         "inSell": true,
         "title": "З філадельфією",
         "price": 307
        },
        {
         "id": 47,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 314
        }
       ]
      },
      {
       "title": "New Yorker",
       "variants": [
        {
         "id": 48,
         "inSell": true,
         "title": "Тонке",
         "price": 300
        },
        {
         "id": 49,
         "inSell": false,
         "title": "Пишне",
         "price": 251
        },
        {
         "id": 490,
         "inSell": false,
         "title": "З філадельфією",
         "price": 290
        },
        {
         "id": 491,
         "inSell": false,
         "title": "З Хот-Дог бортом",
         "price": 297
        }
       ]
      }
     ]
    },
    {
     "id": 0,
     "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_300dpi-min-thumbnail-960x960-70.jpg",
     "title": "Піца Тоні Пепероні",
     "rating": 4,
     "category": 1,
     "class": 0,
     "defaultPrice": 250,
     "variants": [
      {
       "title": "Середня",
       "variants": [
        {
         "id": 0,
         "inSell": true,
         "title": "Тонке",
         "price": 250
        },
        {
         "id": 1,
         "inSell": true,
         "title": "Пишне",
         "price": 250
        },
        {
         "id": 2,
         "inSell": true,
         "title": "З філадельфією",
         "price": 294
        },
        {
         "id": 3,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 303
        }
       ]
      },
      {
       "title": "Велика",
       "variants": [
        {
         "id": 0,
         "inSell": true,
         "title": "Тонке",
         "price": 296
        },
        {
         "id": 1,
         "inSell": true,
         "title": "Пишне",
         "price": 296
        },
        {
         "id": 2,
         "inSell": true,
         "title": "З філадельфією",
         "price": 349
        },
        {
         "id": 3,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 356
        }
       ]
      },
      {
       "title": "New Yorker",
       "variants": [
        {
         "id": 0,
         "inSell": true,
         "title": "Тонке",
         "price": 346
        },
        {
         "id": 1,
         "inSell": false,
         "title": "Пишне",
         "price": 251
        },
        {
         "id": 2,
         "inSell": false,
         "title": "З філадельфією",
         "price": 290
        },
        {
         "id": 3,
         "inSell": false,
         "title": "З Хот-Дог бортом",
         "price": 297
        }
       ]
      }
     ]
    },
    {
     "id": 0,
     "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2020/12/28/CHiken_Kebab-thumbnail-960x960-70.jpg",
     "title": "Піца Чікен кебаб",
     "rating": 3,
     "category": 2,
     "class": 0,
     "defaultPrice": 244,
     "variants": [
      {
       "title": "Середня",
       "variants": [
        {
         "id": 0,
         "inSell": true,
         "title": "Тонке",
         "price": 244
        },
        {
         "id": 1,
         "inSell": true,
         "title": "Пишне",
         "price": 244
        },
        {
         "id": 2,
         "inSell": true,
         "title": "З філадельфією",
         "price": 288
        },
        {
         "id": 3,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 297
        }
       ]
      },
      {
       "title": "Велика",
       "variants": [
        {
         "id": 0,
         "inSell": true,
         "title": "Тонке",
         "price": 290
        },
        {
         "id": 1,
         "inSell": true,
         "title": "Пишне",
         "price": 290
        },
        {
         "id": 2,
         "inSell": true,
         "title": "З філадельфією",
         "price": 343
        },
        {
         "id": 3,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 350
        }
       ]
      }
     ]
    },
    {
     "id": 7,
     "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg",
     "title": "Піца Техас",
     "rating": 3,
     "category": 0,
     "class": 0,
     "defaultPrice": 214,
     "variants": [
      {
       "title": "Середня",
       "variants": [
        {
         "id": 71,
         "inSell": true,
         "title": "Тонке",
         "price": 215
        },
        {
         "id": 72,
         "inSell": true,
         "title": "Пишне",
         "price": 215
        },
        {
         "id": 73,
         "inSell": true,
         "title": "З філадельфією",
         "price": 259
        },
        {
         "id": 74,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 268
        }
       ]
      },
      {
       "title": "Велика",
       "variants": [
        {
         "id": 75,
         "inSell": true,
         "title": "Тонке",
         "price": 254
        },
        {
         "id": 76,
         "inSell": true,
         "title": "Пишне",
         "price": 254
        },
        {
         "id": 77,
         "inSell": true,
         "title": "З філадельфією",
         "price": 307
        },
        {
         "id": 78,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "price": 314
        }
       ]
      },
      {
       "title": "New Yorker",
       "variants": [
        {
         "id": 79,
         "inSell": true,
         "title": "Тонке",
         "price": 273
        },
        {
         "id": 791,
         "inSell": false,
         "title": "Пишне",
         "price": 251
        },
        {
         "id": 792,
         "inSell": false,
         "title": "З філадельфією",
         "price": 290
        },
        {
         "id": 793,
         "inSell": false,
         "title": "З Хот-Дог бортом",
         "price": 297
        }
       ]
      }
     ]
    },
    {
     "id": 8,
     "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg",
     "title": "Піца Маргарита",
     "rating": 4,
     "category": 1,
     "class": 0,
     "defaultPrice": 250,
     "variants": [
      {
       "title": "Середня",
       "variants": [
        {
         "id": 81,
         "inSell": true,
         "title": "Тонке",
         "fulltitle": "Маргарита на тонкому(середня)",
         "price": 250
        },
        {
         "id": 82,
         "inSell": true,
         "title": "Пишне",
         "fulltitle": "Маргарита на пишному(середня)",
         "price": 250
        },
        {
         "id": 83,
         "inSell": true,
         "title": "З філадельфією",
         "fulltitle": "Маргарита з бортиками філадельфія(середня)",
         "price": 294
        },
        {
         "id": 84,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "fulltitle": "Маргарита з бортиками хот-дог(середня)",
         "price": 303
        }
       ]
      },
      {
       "title": "Велика",
       "variants": [
        {
         "id": 85,
         "inSell": true,
         "title": "Тонке",
         "fulltitle": "Маргарита на тонкому(велика)",
         "price": 296
        },
        {
         "id": 86,
         "inSell": true,
         "title": "Пишне",
         "fulltitle": "Маргарита на пишному(велика)",
         "price": 296
        },
        {
         "id": 87,
         "inSell": true,
         "title": "З філадельфією",
         "fulltitle": "Маргарита з бортиками філадельфія(велика)",
         "price": 349
        },
        {
         "id": 88,
         "inSell": true,
         "title": "З Хот-Дог бортом",
         "fulltitle": "Маргарита з бортиками хот-дог(велика)",
         "price": 356
        }
       ]
      },
      {
       "title": "New Yorker",
       "variants": [
        {
         "id": 89,
         "inSell": true,
         "title": "Тонке",
         "fulltitle": "Маргарита на тонкому(New Yorker)",
         "price": 332
        },
        {
         "id": 891,
         "inSell": false,
         "title": "Пишне",
         "price": 251
        },
        {
         "id": 892,
         "inSell": false,
         "title": "З філадельфією",
         "price": 290
        },
        {
         "id": 893,
         "inSell": false,
         "title": "З Хот-Дог бортом",
         "price": 297
        }
       ]
      }
     ]
    },
    {
     "id": 0,
     "title": "Хлібці з шинкою та грибами",
     "class": 1,
     "category": "1",
     "defaultPrice": 154,
     "variants": [
      {
       "size": "Стандарт",
       "price": 154
      }
     ],
     "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2022/01/06/%D0%A5%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D0%B2%D0%B5%D1%82%D1%87%D0%B8%D0%BD%D0%B0_%D0%B3%D1%80%D0%B8%D0%B1%D1%8B-thumbnail-960x960-70.jpg"
    },
    {
     "id": 1,
     "title": "Хлібці з баварськими ковбасками та томатами",
     "price": 120,
     "class": 1,
     "category": "1",
     "variants": [
      {
       "size": "Стандарт",
       "price": 154
      }
     ],
     "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image/2018/04/03/%D1%85%D0%BB%D1%96%D0%B1%D0%B5%D1%86%D1%8C_%D0%B7_%D0%BC%D1%8E%D0%BD%D1%85%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%BC%D0%B8_%D0%BA%D0%BE%D0%B2%D0%B1%D0%B0%D1%81%D0%BA%D0%B0%D0%BC%D0%B8%D0%BF%D0%B5%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D1%96_%D1%82%D0%B0_%D0%B3%D1%96%D1%80%D1%87%D0%B8%D1%86%D0%B5%D1%8E-thumbnail-960x960-70.jpg"
    },
    {
     "id": 123,
     "title": "Комбо-бокс з діпами",
     "defaultPrice": 295,
     "class": 1,
     "category": "0",
     "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2022/05/26/ComboB1-thumbnail-960x960-70.jpg",
     "variants": [
      {
       "size": "Стандарт",
       "price": 295
      }]
    },
    {
        "id": 0,
        "title": "Соус гострий 25г",
        "defaultPrice": 12,
        "class": 1,
        "category": "3",
        "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/12/06/Copy_of_%D1%81%D0%BE%D1%83%D1%81_3_-thumbnail-960x960-70-thumbnail-960x960-70.jpg",
        "variants": [
         {
          "size": "DIP",
          "price": 12
         }]
      },
      {
        "id": 122,
        "title": "Комбо-бокс з фрі",
        "defaultPrice": 295,
        "class": 1,
        "category": 0,
        "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2022/06/23/ComboB1fri-thumbnail-960x960-70.jpg",
        "variants": [
         {
          "size": "Стандарт",
          "price": 295
         }]
       },
       {
        "id": 124,
        "title": "Курячі стріпси",
        "defaultPrice": 159,
        "class": 1,
        "category": 2,
        "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2022/01/24/strips-thumbnail-960x960-70.jpg",
        "variants": [
         {
          "size": "Стандарт",
          "price": 159
         },{
            "size": "Подвійний",
            "price": 220
         }]
       },{
        "id": 125,
        "title": "BonAqua газована",
        "defaultPrice": 31,
        "class": 2,
        "category": 0,
        "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2020/09/11/gaz-thumbnail-960x960.png",
        "variants": [
         {
          "size": "500 мл",
          "price": 31
         }]
       },{
        "id": 126,
        "title": "Coca-Cola",
        "defaultPrice": 31,
        "class": 2,
        "category": 0,
        "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2020/09/11/cc-thumbnail-960x960.png",
        "variants": [
         {
          "size": "330 мл",
          "price": 31
         },{
            "size": "500 мл",
            "price": 44
           },{
            "size": "1 л",
            "price": 57
           }]
       },{
        "id": 127,
        "title": "Rich Яблуко",
        "defaultPrice": 58,
        "class": 2,
        "category": 1,
        "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2020/09/11/apple-thumbnail-960x960.png",
        "variants": [
         {
          "size": "1 л",
          "price": 58
         }]
       },{
        "id": 128,
        "title": "Bud",
        "defaultPrice": 53,
        "class": 2,
        "category": 2,
        "imageUrl": "https://media.dominos.ua/__sized__/menu/product_osg_image_category/2020/09/16/bud_new-thumbnail-960x960-70.jpg",
        "variants": [
         {
          "size": "500мл",
          "price": 53
         }]
       }
]