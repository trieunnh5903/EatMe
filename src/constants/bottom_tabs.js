import { Cart, Favourite, Home, Notification, Search } from "../screens";
import icons from "./icons";

export const bottom_tabs = [
    {
        id: 1,
        name: "Home",
        component: Home,
        icon: icons.home,
        icon_fill: icons.home_fill
    },
    {
        id: 2,
        name: "Search",
        component: Search,
        icon: icons.search,
        icon_fill: icons.search
    },
    {
        id: 3,
        name: "Cart",
        component: Cart,
        icon: icons.cart,
        icon_fill: icons.cart_fill
    },
    {
        id: 4,
        name: "Favourite",
        component: Favourite,
        icon: icons.favourite,
        icon_fill: icons.favourite_fill
    },
    {
        id: 5,
        name: "Notification",
        component: Notification,
        icon: icons.notification,
        icon_fill: icons.notification_fill,
    },

]