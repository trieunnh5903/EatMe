import { Cart, Favourite, Home, Notification, Search } from "../screens";
import icons from "./icons";

export const bottom_tabs = [
    {
        id: 1,
        name: "Home",
        component: Home,
        icon: icons.home
    },
    {
        id: 2,
        name: "Search",
        component: Search,
        icon: icons.search
    },
    {
        id: 3,
        name: "Cart",
        component: Cart,
        icon: icons.cart
    },
    {
        id: 4,
        name: "Favourite",
        component: Favourite,
        icon: icons.favourite
    },
    {
        id: 5,
        name: "Notification",
        component: Notification,
        icon: icons.notification
    },

]