import { createServer, Model, Factory } from "miragejs";
import { v4 as uuidv4 } from 'uuid';
export default function setupMirage({ environment = 'development' }) {
  createServer({
    environment,
    routes() {
      this.namespace = "api/v1";
      this.get("/foods", (schema) => {
        let page = 1;
        let offset = (page - 1) * 10;
        return DATA.slice(offset, offset + 10)
      })

    },
  });
}


const DATA = [{
  "id": uuidv4(),
  "name": "sushi",
  "price": 84537,
  "description": "Great value for money",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "OEJB",
  "supplierID": "VNVT"
}, {
  "id": uuidv4(),
  "name": "pizza",
  "price": 13856,
  "description": "Affordable price",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "YMHU",
  "supplierID": "ZMMG"
}, {
  "id": uuidv4(),
  "name": "ramen",
  "price": 25090,
  "description": "Premium craftsmanship",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "HEBL",
  "supplierID": "SBMA"
}, {
  "id": uuidv4(),
  "name": "salad",
  "price": 74164,
  "description": "Comfortable and ergonomic",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "FLLK",
  "supplierID": "SPHI"
}, {
  "id": uuidv4(),
  "name": "taco",
  "price": 45998,
  "description": "Premium craftsmanship",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "RCKH"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 62082,
  "description": "Affordable price",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KMQS",
  "supplierID": "KCSV"
}, {
  "id": uuidv4(),
  "name": "burger",
  "price": 3346,
  "description": "Multi-functional",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "RJFO",
  "supplierID": "CYBL"
}, {
  "id": uuidv4(),
  "name": "taco",
  "price": 73012,
  "description": "Affordable price",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "WBGK",
  "supplierID": "YMMI"
}, {
  "id": uuidv4(),
  "name": "sandwich",
  "price": 23257,
  "description": "Easy to use",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "LEMG",
  "supplierID": "SBPJ"
}, {
  "id": uuidv4(),
  "name": "salad",
  "price": 66494,
  "description": "Stylish design",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "SCAP",
  "supplierID": "ZYSQ"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 95889,
  "description": "Wide range of colors",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "MGQZ"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 279,
  "description": "Affordable price",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "AGGR",
  "supplierID": "MMCP"
}, {
  "id": uuidv4(),
  "name": "taco",
  "price": 45220,
  "description": "Eco-friendly materials",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "CYVK",
  "supplierID": "KHOT"
}, {
  "id": uuidv4(),
  "name": "sandwich",
  "price": 15016,
  "description": "Wide range of colors",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "VABJ",
  "supplierID": "HASK"
}, {
  "id": uuidv4(),
  "name": "steak",
  "price": 96781,
  "description": "Trusted brand",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "EGTB",
  "supplierID": "SWLB"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 51193,
  "description": "Fast shipping",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KPUW",
  "supplierID": "ZPWS"
}, {
  "id": uuidv4(),
  "name": "ramen",
  "price": 38528,
  "description": "High-quality product",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "LIPR",
  "supplierID": "SKAR"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 29636,
  "description": "Unique and eye-catching",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "CYDN",
  "supplierID": "AYAQ"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 296,
  "description": "Eco-friendly materials",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "YCBE",
  "supplierID": "AGGE"
}, {
  "id": uuidv4(),
  "name": "ramen",
  "price": 85947,
  "description": "Wide range of colors",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "CYLK",
  "supplierID": "LPVZ"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 88235,
  "description": "Innovative features",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "UNTT",
  "supplierID": "UKON"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 35553,
  "description": "Excellent customer reviews",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KVRB",
  "supplierID": "LBGO"
}, {
  "id": uuidv4(),
  "name": "steak",
  "price": 4968,
  "description": "Durable and long-lasting",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "ULNN",
  "supplierID": "YMBA"
}, {
  "id": uuidv4(),
  "name": "taco",
  "price": 64287,
  "description": "Affordable price",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "supplierID": "LSZS"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 89743,
  "description": "Unique and eye-catching",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "FOGQ",
  "supplierID": "MRCH"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 11599,
  "description": "Durable and long-lasting",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "ZMUH",
  "supplierID": "YDRD"
}, {
  "id": uuidv4(),
  "name": "burger",
  "price": 95697,
  "description": "Innovative features",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KDYS",
  "supplierID": "FAER"
}, {
  "id": uuidv4(),
  "name": "burger",
  "price": 2217,
  "description": "Easy to use",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "CYCL"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 83173,
  "description": "Fast shipping",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KBTF",
  "supplierID": "AYNI"
}, {
  "id": uuidv4(),
  "name": "pizza",
  "price": 41438,
  "description": "Wide range of colors",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "FKAN",
  "supplierID": "UADD"
}, {
  "id": uuidv4(),
  "name": "sandwich",
  "price": 50880,
  "description": "Easy to use",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "WALB",
  "supplierID": "VIAX"
}, {
  "id": uuidv4(),
  "name": "salad",
  "price": 6449,
  "description": "Durable and long-lasting",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "SBSN",
  "supplierID": "PAUM"
}, {
  "id": uuidv4(),
  "name": "ramen",
  "price": 58739,
  "description": "Versatile and practical",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KPPA",
  "supplierID": "LPPM"
}, {
  "id": uuidv4(),
  "name": "salad",
  "price": 4247,
  "description": "Unique and eye-catching",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KCRE",
  "supplierID": "FAPG"
}, {
  "id": uuidv4(),
  "name": "ramen",
  "price": 35791,
  "description": "Unique and eye-catching",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "FMSK",
  "supplierID": "KGFL"
}, {
  "id": uuidv4(),
  "name": "salad",
  "price": 67776,
  "description": "Eco-friendly materials",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "supplierID": "SAOU"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 49718,
  "description": "Sleek and modern",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "NGKT",
  "supplierID": "MZBZ"
}, {
  "id": uuidv4(),
  "name": "sandwich",
  "price": 84544,
  "description": "Multi-functional",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "EGTK"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 34494,
  "description": "Excellent customer reviews",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "VIAR",
  "supplierID": "WBKN"
}, {
  "id": uuidv4(),
  "name": "burger",
  "price": 8910,
  "description": "Multi-functional",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KSBX",
  "supplierID": "KAYS"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 50621,
  "description": "Easy to use",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "OBBI",
  "supplierID": "KSNY"
}, {
  "id": uuidv4(),
  "name": "steak",
  "price": 241,
  "description": "Excellent customer reviews",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "UNNT",
  "supplierID": "KSYI"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 12356,
  "description": "Wide range of colors",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "SWLB",
  "supplierID": "AYOK"
}, {
  "id": uuidv4(),
  "name": "ramen",
  "price": 13588,
  "description": "Versatile and practical",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "supplierID": "CYRS"
}, {
  "id": uuidv4(),
  "name": "burger",
  "price": 98970,
  "description": "Affordable price",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "VVPK",
  "supplierID": "SSBL"
}, {
  "id": uuidv4(),
  "name": "pizza",
  "price": 46625,
  "description": "Trusted brand",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "WBGF",
  "supplierID": "OOBR"
}, {
  "id": uuidv4(),
  "name": "taco",
  "price": 76956,
  "description": "Trusted brand",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "AYIH",
  "supplierID": "SBQV"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 64761,
  "description": "Excellent customer reviews",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "SKAR",
  "supplierID": "YPLM"
}, {
  "id": uuidv4(),
  "name": "sandwich",
  "price": 51320,
  "description": "Unique and eye-catching",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "SVEZ",
  "supplierID": "VIPK"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 50254,
  "description": "Fast shipping",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "CKB6",
  "supplierID": "MMTG"
}, {
  "id": uuidv4(),
  "name": "ramen",
  "price": 97,
  "description": "Innovative features",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KTUP",
  "supplierID": "4KA"
}, {
  "id": uuidv4(),
  "name": "sandwich",
  "price": 62343,
  "description": "Affordable price",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "HKHO",
  "supplierID": "HSGG"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 3088,
  "description": "Trusted brand",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "MHUT",
  "supplierID": "SNTK"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 88626,
  "description": "Easy to use",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "ZBXH"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 95973,
  "description": "Eco-friendly materials",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "FYWE",
  "supplierID": "UKLU"
}, {
  "id": uuidv4(),
  "name": "steak",
  "price": 34424,
  "description": "Versatile and practical",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "LFOP"
}, {
  "id": uuidv4(),
  "name": "salad",
  "price": 25665,
  "description": "Excellent customer reviews",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "supplierID": "SOOG"
}, {
  "id": uuidv4(),
  "name": "sandwich",
  "price": 60588,
  "description": "High-quality product",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "ZPJH",
  "supplierID": "MMQT"
}, {
  "id": uuidv4(),
  "name": "pizza",
  "price": 66161,
  "description": "Excellent customer reviews",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "FZUK",
  "supplierID": "YBDV"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 867,
  "description": "Innovative features",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "SPTN",
  "supplierID": "PACK"
}, {
  "id": uuidv4(),
  "name": "taco",
  "price": 47319,
  "description": "Affordable price",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "WICN",
  "supplierID": "OEGT"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 74029,
  "description": "Comfortable and ergonomic",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "EGEF",
  "supplierID": "MPBO"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 73718,
  "description": "Affordable price",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "DXXX",
  "supplierID": "UKCS"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 61409,
  "description": "Trusted brand",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "supplierID": "KSFZ"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 34225,
  "description": "Multi-functional",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "NVVA",
  "supplierID": "YWBS"
}, {
  "id": uuidv4(),
  "name": "steak",
  "price": 14041,
  "description": "Durable and long-lasting",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "supplierID": "ESNK"
}, {
  "id": uuidv4(),
  "name": "burger",
  "price": 72017,
  "description": "Wide range of colors",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "D60",
  "supplierID": "OAUZ"
}, {
  "id": uuidv4(),
  "name": "pizza",
  "price": 21781,
  "description": "Stylish design",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "ZUNZ",
  "supplierID": "SYAH"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 75333,
  "description": "High-quality product",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "YCPN",
  "supplierID": "2Z6"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 81661,
  "description": "Sleek and modern",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "SOOM",
  "supplierID": "KHOB"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 48176,
  "description": "Fast shipping",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "PAEM",
  "supplierID": "RCLM"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 25106,
  "description": "Stylish design",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "SAWE",
  "supplierID": "SBOI"
}, {
  "id": uuidv4(),
  "name": "steak",
  "price": 18356,
  "description": "Comfortable and ergonomic",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "VECC",
  "supplierID": "ENBL"
}, {
  "id": uuidv4(),
  "name": "steak",
  "price": 75680,
  "description": "Sleek and modern",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KOEO",
  "supplierID": "SYSK"
}, {
  "id": uuidv4(),
  "name": "taco",
  "price": 85971,
  "description": "High-quality product",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KSPI",
  "supplierID": "FZWA"
}, {
  "id": uuidv4(),
  "name": "pizza",
  "price": 12411,
  "description": "Premium craftsmanship",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KRXE"
}, {
  "id": uuidv4(),
  "name": "taco",
  "price": 67062,
  "description": "Stylish design",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KMBO",
  "supplierID": "CYPR"
}, {
  "id": uuidv4(),
  "name": "steak",
  "price": 75059,
  "description": "Excellent customer reviews",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "MMMT",
  "supplierID": "GCRR"
}, {
  "id": uuidv4(),
  "name": "sandwich",
  "price": 46772,
  "description": "Great value for money",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "BIVO",
  "supplierID": "LZTT"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 41830,
  "description": "Sleek and modern",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "YBWM",
  "supplierID": "AK75"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 89314,
  "description": "Unique and eye-catching",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "YSCO",
  "supplierID": "O22"
}, {
  "id": uuidv4(),
  "name": "steak",
  "price": 36736,
  "description": "Premium craftsmanship",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KBVI",
  "supplierID": "CYKY"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 4019,
  "description": "Innovative features",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "HCMJ",
  "supplierID": "KCIR"
}, {
  "id": uuidv4(),
  "name": "salad",
  "price": 52227,
  "description": "Multi-functional",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "EICA",
  "supplierID": "PAHX"
}, {
  "id": uuidv4(),
  "name": "curry",
  "price": 69383,
  "description": "Affordable price",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "VIGG",
  "supplierID": "MWCB"
}, {
  "id": uuidv4(),
  "name": "taco",
  "price": 24087,
  "description": "Perfect gift idea",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "EGFE",
  "supplierID": "FBMN"
}, {
  "id": uuidv4(),
  "name": "burger",
  "price": 15911,
  "description": "Wide range of colors",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "supplierID": "PAKK"
}, {
  "id": uuidv4(),
  "name": "sandwich",
  "price": 99558,
  "description": "Versatile and practical",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "supplierID": "KOAK"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 90616,
  "description": "Suitable for all ages",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "CYMM",
  "supplierID": "YGIB"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 20552,
  "description": "Perfect gift idea",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "OPFA",
  "supplierID": "KEVM"
}, {
  "id": uuidv4(),
  "name": "sandwich",
  "price": 21248,
  "description": "Unique and eye-catching",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "DFCP",
  "supplierID": "VTSG"
}, {
  "id": uuidv4(),
  "name": "burger",
  "price": 74573,
  "description": "Unique and eye-catching",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "YYNG",
  "supplierID": "YBOU"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 55449,
  "description": "Fast shipping",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KLWT",
  "supplierID": "WITT"
}, {
  "id": uuidv4(),
  "name": "ramen",
  "price": 4607,
  "description": "Premium craftsmanship",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "SLPS",
  "supplierID": "UUMO"
}, {
  "id": uuidv4(),
  "name": "ramen",
  "price": 36820,
  "description": "Comfortable and ergonomic",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "ZBAR",
  "supplierID": "KDRI"
}, {
  "id": uuidv4(),
  "name": "salad",
  "price": 66307,
  "description": "Perfect gift idea",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "DRZL",
  "supplierID": "KGLR"
}, {
  "id": uuidv4(),
  "name": "salad",
  "price": 37887,
  "description": "Great value for money",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "KBWG",
  "supplierID": "PAGT"
}, {
  "id": uuidv4(),
  "name": "steak",
  "price": 64158,
  "description": "Multi-functional",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "YGON",
  "supplierID": "FAMN"
}, {
  "id": uuidv4(),
  "name": "pasta",
  "price": 82220,
  "description": "Innovative features",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "categoryId": "DNKN",
  "supplierID": "FZJH"
}, {
  "id": uuidv4(),
  "name": "sushi",
  "price": 74370,
  "description": "Suitable for all ages",
  "image": "https://raw.githubusercontent.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/master/assets/dummyData/hamburger.png",
  "supplierID": "CYQY"
}]
