import { images } from "../constants"
import icons from "../constants/icons"

const myProfile = {
    id: 1,
    name: "Hai Trieu",
    profile_image: "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "No. 88, Jin Padungan, Kuching"
}



const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/on_boarding/background_01.png"),
        bannerImage: require("../assets/images/on_boarding/favourite_food.png"),
        title: "Choose a Favourite Food",
        description: "When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards"
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/on_boarding/background_02.png"),
        bannerImage: require("../assets/images/on_boarding/hot_delivery.png"),
        title: "Hot Delivery to Home",
        description: "We make food ordering fasr, simple and free-no matter if you order online or cash"
    },
    {
        id: 3,
        backgroundImage: require("../assets/images/on_boarding/background_01.png"),
        bannerImage: require("../assets/images/on_boarding/great_food.png"),
        title: "Receive the Great Food",
        description: "You’ll receive the great food within a hour. And get free delivery credits for every order."
    }
]
const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

const tags = [
    {
        id: 1,
        label: "Burger"
    },
    {
        id: 2,
        label: "Fast Food"
    },
    {
        id: 3,
        label: "Pizza"
    },
    {
        id: 4,
        label: "Asian"
    },
    {
        id: 5,
        label: "Dessert"
    },
    {
        id: 6,
        label: "Breakfast"
    },
    {
        id: 7,
        label: "Vegetable"
    },
    {
        id: 8,
        label: "Taccos"
    }
]


const categories = [
    {
        id: 1,
        name: "Baguette",
        icon: icons.baguette
    },
    {
        id: 2,
        name: "Drinks",
        icon: icons.cola
    },
    {
        id: 3,
        name: "Rice",
        icon: icons.rice
    },
    {
        id: 4,
        name: "Cookies",
        icon: icons.cookies
    },
    {
        id: 5,
        name: "Hamburger",
        icon: icons.hamburger
    },
    {
        id: 6,
        name: "Hot Dog",
        icon: icons.hot_dog
    },
    {
        id: 7,
        name: "Mcdonald",
        icon: icons.mcdonald_french_fries
    },
    {
        id: 8,
        name: "Noodles",
        icon: icons.noodles
    },
    {
        id: 9,
        name: "Rice",
        icon: icons.pizza
    }
]

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png'
}

const hamburger2 = {
    id: 22,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png'
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hot_tacos.png'
}

const hotTacos2 = {
    id: 23,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hot_tacos.png'
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/veg_biryani.png'
}


const vegBiryani3 = {
    id: 33,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/veg_biryani.png'
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/wrap_sandwich.png'
}

const wrapSandwich4 = {
    id: 44,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: 'https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/wrap_sandwich.png'
}

const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani, hamburger2, hotTacos2, vegBiryani3,
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich, hamburger2, hotTacos2, vegBiryani3,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich, hamburger2, hotTacos2, vegBiryani3,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich, hamburger2, hotTacos2, vegBiryani3,
        ]
    },

]

const myCart = [
    hamburger,
    hotTacos,
    vegBiryani,
    hamburger2,
    hotTacos2,
    vegBiryani3,
]

const myCard = [
    {
        id: 1,
        name: 'Zalo Pay',
        icon: icons.zalo_pay,
    },

]

const allCards = [
    {
        id: 1,
        name: 'Zalo Pay',
        icon: icons.zalo_pay
    },
    {
        id: 3,
        name: 'Visa',
        icon: icons.visa
    },
]

const carousel = [
    {
        id: 1,
        image: images.carousel_1
    },
    {
        id: 2,
        image: images.carousel_1
    },
    {
        id: 3,
        image: images.carousel_1
    },
    {
        id: 4,
        image: images.carousel_1
    },
    {
        id: 5,
        image: images.carousel_1
    },
    {
        id: 6,
        image: images.carousel_1
    },
    {
        id: 7,
        image: images.carousel_1
    },
    {
        id: 8,
        image: images.carousel_1
    },
    {
        id: 9,
        image: images.carousel_1
    },
    {
        id: 10,
        image: images.carousel_1
    },
]
export default data = {
    myProfile, menu, categories, tags, ratings, delivery_time, onboarding_screens, hamburger, myCart, myCard,
    allCards,
    carousel,
}
