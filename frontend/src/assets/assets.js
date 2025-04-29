import logo from "./Logo (2).png";
import main_banner from "./Palma.png";
import main_banner_mobile from "./Banner_bg_sm.png";
import heels from "./White_Stiletto_High_Heel_Ankle_Strap_Sandals___30____liked_on_Polyvore-removebg-preview.png";
import sneakers from "./download__4_-removebg-preview.png";
import flats from "./Orcajump_-_Stylish_Cross-Strap_Sandals__Elegant_and_Comfy_Outdoor_Slippers_with_Faux_Hemp_Rope_Design-removebg-preview.png";
import boots from "./Women_s_Chunky_Heel_Short_Boots__High_Heel_Pointed_Toe_Boots__Winter_Slim_Boots__British_Boots-removebg-preview.png";
import loafers from "./Olivia_Mark_-_Peppy_Buckle_Heeled_Loafers_for_Women_s_Fashionable_Footwear-removebg-preview.png";
import mules from "./Women_Mules_Designer_Pointed_Toe_Summer_Ladies_Fashion_Slippers_New_Comfort_Solid_Slides_Female-removebg-preview.png";
import sliders from "./Vegan_Leather_Crinkled_Vamp_Sandals___SHEIN_USA-removebg-preview.png";
import widges from "./BLACK_PLATFORM_WEDGE_SLIDE_HEELS_-_BLACK___6-removebg-preview.png";
import ballet_flats from "./Soft_Leather_Ballet_Shoes_Ballet_Slippers_Dance_Shoes__Toddler_Little_Big_Kid_Women_-removebg-preview.png";
import address from "./address-illustration-concept.png";


export const assets = {
    logo,
    main_banner,
    main_banner_mobile,
    address,
}

export const categories = [
    {
        text: "Heels",
        path: "heels",
        image : heels,
        bgColor: "#E7F2FF",
    },
    {
        text: "Sneakers",
        path: "sneakers",
        image : sneakers,
        bgColor: "#E7F2FF",
    },
    {
        text: "Flats",
        path: "flats",
        image : flats,
        bgColor: "#E7F2FF",
    },
    {
        text: "Boots",
        path: "boots",
        image : boots,
        bgColor: "#E7F2FF",
    },
    {
        text: "Loafers",
        path: "loafers",
        image : loafers,
        bgColor: "#E7F2FF",
    },
    {
        text: "Mules",
        path: "mules",
        image : mules,
        bgColor: "#E7F2FF",
    },
    {
        text: "Sliders",
        path: "sliders",
        image : sliders,
        bgColor: "#E7F2FF",
    },
    {
        text: "Widges",
        path: "widges",
        image : widges,
        bgColor: "#E7F2FF",
    },
    {
        text: "Ballet Flats",
        path: "ballet-flats",
        image : ballet_flats,
        bgColor: "#E7F2FF",
    },
]

export const dummyAddress = [
    {
        id: 1,
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        country: "USA",
        zipCode: "10001",
    },
    {
        id: 2,
        street: "456 Elm Street",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        zipCode: "90001",
    },
    {
        id: 3,
        street: "789 Oak Avenue",
        city: "Chicago",
        state: "IL",
        country: "USA",
        zipCode: "60601",
    },
    {
        id: 4,
        street: "101 Pine Lane",
        city: "Houston",
        state: "TX",
        country: "USA",
        zipCode: "77001",
    },
]

export const dummyProducts = [
    {
        _id: "001",
        name: "White Stiletto",
        category: "Heels",
        price: 500,
        offerPrice: 399,
        rating: 4,
        image:[heels,'','',''],
        description: [
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
        ],
        createdAt: "2025-04-24T12:00:00Z",
        updatedAt: "2025-04-24T12:00:00Z",
        inStock: true,
    },
    {
        _id: "002",
        name: "Cross Strap Sandals",
        category: "Flats",
        price: 400,
        offerPrice: 259,
        rating: 4,
        image:[flats,'','',''],
        description: [
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
        ],
        createdAt: "2025-04-24T12:00:00Z",
        updatedAt: "2025-04-24T12:00:00Z",
        inStock: true,
    },
    {
        _id: "003",
        name: "Chunkey Heels",
        category: "Boots",
        price: 1000,
        offerPrice: 799,
        rating: 5,
        image:[boots,'','',''],
        description: [
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
        ],
        createdAt: "2025-04-24T12:00:00Z",
        updatedAt: "2025-04-24T12:00:00Z",
        inStock: true,
    },
    {
        _id: "004",
        name: "Crinkled Vamp Sandals",
        category: "Sliders",
        price: 600,
        offerPrice: 499,
        rating: 4,
        image:[sliders,'','',''],
        description: [
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
        ],
        createdAt: "2025-04-24T12:00:00Z",
        updatedAt: "2025-04-24T12:00:00Z",
        inStock: true,
    },
    {
        _id: "005",
        name: "White Stiletto",
        category: "Heels",
        price: 500,
        offerPrice: 399,
        rating: 4,
        image:[heels,'','',''],
        description: [
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
        ],
        createdAt: "2025-04-24T12:00:00Z",
        updatedAt: "2025-04-24T12:00:00Z",
        inStock: true,
    },
    {
        _id: "006",
        name: "White Stiletto",
        category: "Heels",
        price: 500,
        offerPrice: 399,
        rating: 4,
        image:[heels,'','',''],
        description: [
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
            "This is a description of the product. It is a very good product. You should buy it.",
        ],
        createdAt: "2025-04-24T12:00:00Z",
        updatedAt: "2025-04-24T12:00:00Z",
        inStock: true,
    },
]

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { text: "Home", url: "#" },
            { text: "Best Sellers", url: "#" },
            { text: "Offers & Deals", url: "#" },
            { text: "Contact Us", url: "#" },
            { text: "FAQs", url: "#" },
        ],
    },
    {
        title: "Need Help?",
        links: [
            { text: "Delivery Information", url: "#" },
            { text: "Return & Refund Policy", url: "#" },
            { text: "Payment Methods", url: "#" },
            { text: "Track your Order", url: "#" },
            { text: "Contact Us", url: "#" },
        ],
    },
    {
        title: "Follow Us",
        links: [
            { text: "Instagram", url: "#" },
            { text: "Twitter", url: "#" },
            { text: "Facebook", url: "#" },
            { text: "YouTube", url: "#" },
        ],
    },
]

export const dummyOrders = [
    {
        _id: "12898trdfgyt34565657980udoe0",
        userID: " 3245rty9uidjoknrodo287837e",
        items: [
            {product: dummyProducts[0],
            quantity: 2,
            _id: "1234567890",
            },
        ],
        amount: 500,
        address: dummyAddress[0],
        status: "Order Placed",
        paymentType: "COD",
        isPaid: false,
        createdAt: "2025-04-24T12:00:00Z",
        updatedAt: "2025-04-24T12:00:00Z",

    },
    {
        _id: "12898trdfgyt3454567865657980udoe0",
        userID: " 3245rty9u9876idjoknrodo287837e",
        items: [
            {product: dummyProducts[1],
            quantity: 2,
            _id: "1234434567890",
            },
            {product: dummyProducts[2],
                quantity: 4,
                _id: "1234434567890",
                },
        ],
        amount: 5000,
        address: dummyAddress[0],
        status: "Order Placed",
        paymentType: "COD",
        isPaid: false,
        createdAt: "2025-04-24T12:00:00Z",
        updatedAt: "2025-04-24T12:00:00Z",

    },

]