import logo from "./Logo (2).png";
import main_banner from "./Banner_bg.png";
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


export const assets = {
    logo,
    main_banner,
    main_banner_mobile,
}

export const categories = [
    {
        text: "Heels",
        path: "heels",
        image : heels,
        bgColor: "#FEF6DA",
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
]