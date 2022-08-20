import { IIngridientsFull, IPizzaCategory } from "./types";


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
    {id: 22,category: 3,title: "Оливки",addPrice: 16,imageUrl: "https://media.dominos.ua/__sized__/menu/product_toppings_image/2018/07/31/%D0%BE%D0%BB%D0%B8%D0%B2%D0%BA%D0%B8-thumbnail-512x512-70.jpg"},
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