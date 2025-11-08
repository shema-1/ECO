export const categoryStructure = {
  "Electronics": {
    subcategories: ["Phones & Tablets", "Computers", "Wearables", "Audio", "TV & Home Theater"],
    featured: ["iPhone 14 Pro", "Gaming PC RTX 4080", "Premium Headphones"],
    bannerImage: "https://picsum.photos/id/160/1200/300"
  },
  "Fashion": {
    subcategories: ["Traditional Wear", "Modern Fashion", "Kids & Baby", "Shoes", "Accessories"],
    featured: ["Umushanana Collection", "Modern Imikenyero", "Traditional Accessories"],
    bannerImage: "https://picsum.photos/id/1005/1200/300"
  },
  "Home & Living": {
    subcategories: ["Furniture", "Kitchen", "Decor", "Bedding", "Garden"],
    featured: ["Kitchen Essentials", "Home Office", "Outdoor"],
    bannerImage: "https://picsum.photos/id/1048/1200/300"
  },
  "Sports": {
    subcategories: ["Fitness", "Outdoor Sports", "Team Sports", "Swimming", "Cycling"],
    featured: ["Gym Equipment", "Soccer Gear", "Yoga & Meditation"],
    bannerImage: "https://picsum.photos/id/146/1200/300"
  },
  "Beauty & Health": {
    subcategories: ["Skincare", "Makeup", "Hair Care", "Fragrances", "Personal Care"],
    featured: ["Natural Products", "Korean Beauty", "Mens Grooming"],
    bannerImage: "https://picsum.photos/id/64/1200/300"
  }
};

const products = [
  // Today's Deals
  {
    id: "td1",
    name: "Goldseeker Metal Detector",
    price: 663850,
    description: "High sensitivity metal detector kit with advanced detection capabilities",
    image: "https://picsum.photos/id/201/600/400",
    category: "Electronics",
    subcategory: "Outdoor Equipment",
    rating: 4.5,
    stock: 10,
    featured: true,
    discount: 24
  },
  {
    id: "td2",
    name: "Samsung Galaxy Note6 Mobile Phone",
    price: 246075,
    description: "Original Samsung Galaxy smartphone with premium features",
    image: "https://picsum.photos/id/160/600/400",
    category: "Electronics",
    subcategory: "Phones & Tablets",
    rating: 4.8,
    stock: 15,
    discount: 29
  },
  {
    id: "td3",
    name: "iPhone 15 Pro Max",
    price: 98983,
    description: "Latest iPhone model with advanced camera system",
    image: "https://picsum.photos/id/1/600/400",
    category: "Electronics",
    subcategory: "Phones & Tablets",
    rating: 4.9,
    stock: 8,
    discount: 3
  },
  {
    id: "td4",
    name: "Waterproof Mattress Protector",
    price: 17850,
    description: "Premium waterproof mattress pad protector",
    image: "https://picsum.photos/id/119/600/400",
    category: "Home & Living",
    subcategory: "Bedding",
    rating: 4.6,
    stock: 50,
    discount: 12
  },
  {
    id: "td5",
    name: "Android Tablet PC",
    price: 122400,
    description: "10-inch Android tablet with 16GB storage",
    image: "https://picsum.photos/id/2/600/400",
    category: "Electronics",
    subcategory: "Phones & Tablets",
    rating: 4.4,
    stock: 20,
    discount: 11
  },
  {
    id: "td6",
    name: "Oppo A8 Smartphone",
    price: 90700,
    description: "USED Original Oppo A8 with great features",
    image: "https://picsum.photos/id/3/600/400",
    category: "Electronics",
    subcategory: "Phones & Tablets",
    rating: 4.2,
    stock: 5,
    discount: 16
  },
  {
    id: "td7",
    name: "Children's Fashion Set",
    price: 21505,
    description: "Boys clothing set fashion gentleman suit",
    image: "https://picsum.photos/id/1012/600/400",
    category: "Fashion",
    subcategory: "Kids & Baby",
    rating: 4.7,
    stock: 30,
    discount: 14
  },
  {
    id: "td8",
    name: "Huawei Mate 10 5G",
    price: 72596,
    description: "International Firmware Huawei smartphone",
    image: "https://picsum.photos/id/4/600/400",
    category: "Electronics",
    subcategory: "Phones & Tablets",
    rating: 4.5,
    stock: 12,
    discount: 21
  },
  {
    id: "td9",
    name: "Solar Street Light",
    price: 15258,
    description: "Outdoor 2500W Solar powered street light",
    image: "https://picsum.photos/id/180/600/400",
    category: "Electronics",
    subcategory: "Outdoor Equipment",
    rating: 4.6,
    stock: 25,
    discount: 6
  },
  {
    id: "td10",
    name: "Phone Case for iPhone",
    price: 8390,
    description: "Suitable for Apple iPhone protective case",
    image: "https://picsum.photos/id/5/600/400",
    category: "Electronics",
    subcategory: "Accessories",
    rating: 4.3,
    stock: 100,
    discount: 2
  },
  {
    id: "td11",
    name: "Summer T-Shirt Set",
    price: 9061,
    description: "Short Sleeve T-Shirt New Summer Collection",
    image: "https://picsum.photos/id/1011/600/400",
    category: "Fashion",
    subcategory: "Modern Fashion",
    rating: 4.4,
    stock: 45,
    discount: 35
  },
  {
    id: "td12",
    name: "JBL Bluetooth Speaker",
    price: 20502,
    description: "JBL C330TWS True Wireless Bluetooth Speaker",
    image: "https://picsum.photos/id/6/600/400",
    category: "Electronics",
    subcategory: "Audio",
    rating: 4.7,
    stock: 18,
    discount: 15
  },
  {
    id: "td13",
    name: "Kitchen Utensils Set",
    price: 78460,
    description: "15pcs Kitchen Non-stick Cookware Utensils Set",
    image: "https://picsum.photos/id/183/600/400",
    category: "Home & Living",
    subcategory: "Kitchen",
    rating: 4.8,
    stock: 15,
    discount: 9
  },
  {
    id: "td14",
    name: "Men's Driving Shoes",
    price: 55803,
    description: "SooHoo Men's Driving Shoes 2023 Spring Collection",
    image: "https://picsum.photos/id/21/600/400",
    category: "Fashion",
    subcategory: "Shoes",
    rating: 4.5,
    stock: 25,
    discount: 12
  },
  {
    id: "td15",
    name: "Luxury Jewelry Set",
    price: 6902,
    description: "56 Pcs Jewelry Set including Necklaces and Earrings",
    image: "https://picsum.photos/id/152/600/400",
    category: "Fashion",
    subcategory: "Accessories",
    rating: 4.6,
    stock: 20,
    discount: 5
  },
  
  // Electronics - Phones & Tablets
  {
    id: "e1",
    name: "iPhone 14 Pro",
    price: 1299999,
    description: "Latest iPhone with A16 chip and Pro camera system",
    image: "https://picsum.photos/id/160/600/400",
    category: "Electronics",
    subcategory: "Phones & Tablets",
    rating: 4.8,
    stock: 10,
    featured: true
  },
  {
    id: "e2",
    name: "Samsung Galaxy Tab S8",
    price: 899999,
    description: "Premium Android tablet with S Pen included",
    image: "https://picsum.photos/id/1/600/400",
    category: "Electronics",
    subcategory: "Phones & Tablets",
    rating: 4.7,
    stock: 15
  },
  {
    id: "e3",
    name: "MacBook Pro 16",
    price: 2499999,
    description: "Powerful laptop with M2 Pro chip for professional work",
    image: "https://picsum.photos/id/119/600/400",
    category: "Electronics",
    subcategory: "Computers",
    rating: 4.9,
    stock: 8,
    featured: true
  },
  {
    id: "e4",
    name: "Sony WH-1000XM4",
    price: 399999,
    description: "Premium noise-cancelling headphones with exceptional sound",
    image: "https://picsum.photos/id/325/600/400",
    category: "Electronics",
    subcategory: "Audio",
    rating: 4.8,
    stock: 20
  },
  {
    id: "e5",
    name: "LG OLED 65-inch TV",
    price: 1899999,
    description: "4K OLED TV with perfect blacks and vibrant colors",
    image: "https://picsum.photos/id/401/600/400",
    category: "Electronics",
    subcategory: "TV & Home Theater",
    rating: 4.7,
    stock: 5,
    featured: true
  },
  // Fashion - Traditional Wear
  {
    id: "f1",
    name: "Premium Umushanana",
    price: 89999,
    description: "Elegant traditional Rwandan dress with modern touches",
    image: "https://picsum.photos/id/1011/600/400",
    category: "Fashion",
    subcategory: "Traditional Wear",
    rating: 4.9,
    stock: 15,
    featured: true
  },
  {
    id: "f2",
    name: "Modern Imikenyero Set",
    price: 69999,
    description: "Contemporary Rwandan menswear for special occasions",
    image: "https://picsum.photos/id/1005/600/400",
    category: "Fashion",
    subcategory: "Traditional Wear",
    rating: 4.8,
    stock: 12
  },
  {
    id: "f3",
    name: "African Print Dress",
    price: 45999,
    description: "Colorful African print dress with modern design",
    image: "https://picsum.photos/id/1006/600/400",
    category: "Fashion",
    subcategory: "Modern Fashion",
    rating: 4.7,
    stock: 20
  },
  {
    id: "f4",
    name: "Traditional Accessories Set",
    price: 29999,
    description: "Complete set of traditional Rwandan jewelry",
    image: "https://picsum.photos/id/1009/600/400",
    category: "Fashion",
    subcategory: "Accessories",
    rating: 4.6,
    stock: 25
  },
  // Home & Living
  {
    id: "h1",
    name: "Handcrafted Dining Set",
    price: 899999,
    description: "6-seater dining set made from local wood",
    image: "https://picsum.photos/id/116/600/400",
    category: "Home & Living",
    subcategory: "Furniture",
    rating: 4.8,
    stock: 5,
    featured: true
  },
  {
    id: "h2",
    name: "Traditional Coffee Table",
    price: 299999,
    description: "Artisanal coffee table with traditional patterns",
    image: "https://picsum.photos/id/119/600/400",
    category: "Home & Living",
    subcategory: "Furniture",
    rating: 4.7,
    stock: 8
  },
  {
    id: "h3",
    name: "Modern Kitchen Set",
    price: 499999,
    description: "Complete kitchen essentials with local touch",
    image: "https://picsum.photos/id/183/600/400",
    category: "Home & Living",
    subcategory: "Kitchen",
    rating: 4.6,
    stock: 10
  },
  {
    id: "h4",
    name: "Rwandan Wall Art Set",
    price: 159999,
    description: "Traditional patterns in modern wall art",
    image: "https://picsum.photos/id/155/600/400",
    category: "Home & Living",
    subcategory: "Decor",
    rating: 4.9,
    stock: 15
  },
  // Sports & Fitness
  {
    id: "s1",
    name: "Pro Soccer Kit",
    price: 79999,
    description: "Complete soccer gear with shoes and accessories",
    image: "https://picsum.photos/id/201/600/400",
    category: "Sports",
    subcategory: "Team Sports",
    rating: 4.7,
    stock: 20,
    featured: true
  },
  {
    id: "s2",
    name: "Home Gym Package",
    price: 599999,
    description: "Complete home gym setup with weights",
    image: "https://picsum.photos/id/175/600/400",
    category: "Sports",
    subcategory: "Fitness",
    rating: 4.8,
    stock: 8
  },
  {
    id: "s3",
    name: "Mountain Bike",
    price: 399999,
    description: "All-terrain bike for Rwanda's landscapes",
    image: "https://picsum.photos/id/146/600/400",
    category: "Sports",
    subcategory: "Cycling",
    rating: 4.6,
    stock: 10
  },
  // Beauty & Health
  {
    id: "b1",
    name: "Natural Skincare Set",
    price: 89999,
    description: "Complete skincare routine with local ingredients",
    image: "https://picsum.photos/id/64/600/400",
    category: "Beauty & Health",
    subcategory: "Skincare",
    rating: 4.9,
    stock: 25,
    featured: true
  },
  {
    id: "b2",
    name: "Organic Hair Care Bundle",
    price: 69999,
    description: "Natural hair care products made in Rwanda",
    image: "https://picsum.photos/id/65/600/400",
    category: "Beauty & Health",
    subcategory: "Hair Care",
    rating: 4.7,
    stock: 30
  },
  {
    id: "b3",
    name: "Luxury Fragrance Collection",
    price: 199999,
    description: "Set of premium fragrances with local essences",
    image: "https://picsum.photos/id/66/600/400",
    category: "Beauty & Health",
    subcategory: "Fragrances",
    rating: 4.8,
    stock: 15
  }
  ,
  // Additional items from screenshot
  {
    id: "td16",
    name: "Detector Kit Accessory Pack",
    price: 663850,
    description: "Replacement coils, headphones and tools for metal detector kits.",
    image: "https://picsum.photos/id/202/600/400",
    category: "Electronics",
    subcategory: "Outdoor Equipment",
    rating: 4.4,
    stock: 6,
    discount: 24
  },
  {
    id: "td17",
    name: "Shilajit Resin 50g",
    price: 17850,
    description: "Natural shilajit resin supplement - premium Himalayan extract.",
    image: "https://picsum.photos/id/203/600/400",
    category: "Beauty & Health",
    subcategory: "Personal Care",
    rating: 4.2,
    stock: 40,
    discount: 29
  },
  {
    id: "td18",
    name: "Original Samsung Galaxy Note8",
    price: 246075,
    description: "Refurbished Samsung Note-class phone with stylus support.",
    image: "https://picsum.photos/id/204/600/400",
    category: "Electronics",
    subcategory: "Phones & Tablets",
    rating: 4.3,
    stock: 7,
    discount: 3
  },
  {
    id: "td19",
    name: "iPhone Boxed Accessory Bundle",
    price: 98983,
    description: "Accessory bundle for iPhone including charger and tempered glass.",
    image: "https://picsum.photos/id/205/600/400",
    category: "Electronics",
    subcategory: "Accessories",
    rating: 4.1,
    stock: 22,
    discount: 12
  },
  {
    id: "td20",
    name: "Thicken Mattress Pad Protector",
    price: 20868,
    description: "Soft thick mattress protector - waterproof and breathable.",
    image: "https://picsum.photos/id/206/600/400",
    category: "Home & Living",
    subcategory: "Bedding",
    rating: 4.5,
    stock: 35,
    discount: 8
  },
  {
    id: "td21",
    name: "1080P PTZ WiFi Camera",
    price: 21505,
    description: "Pan-tilt-zoom outdoor security camera with night vision.",
    image: "https://picsum.photos/id/207/600/400",
    category: "Electronics",
    subcategory: "Security",
    rating: 4.4,
    stock: 18,
    discount: 11
  },
  {
    id: "td22",
    name: "Boy's Formal Suit",
    price: 21718,
    description: "Children's formal suit set for special occasions.",
    image: "https://picsum.photos/id/208/600/400",
    category: "Fashion",
    subcategory: "Kids & Baby",
    rating: 4.6,
    stock: 28,
    discount: 11
  },
  {
    id: "td23",
    name: "Mate50 Pro Refurbished",
    price: 76211,
    description: "Refurbished Mate50 Pro with high capacity storage.",
    image: "https://picsum.photos/id/209/600/400",
    category: "Electronics",
    subcategory: "Phones & Tablets",
    rating: 4.2,
    stock: 9,
    discount: 14
  },
  {
    id: "td24",
    name: "International Huawei Phone",
    price: 72596,
    description: "Imported Huawei smartphone - good condition.",
    image: "https://picsum.photos/id/210/600/400",
    category: "Electronics",
    subcategory: "Phones & Tablets",
    rating: 4.0,
    stock: 11,
    discount: 21
  },
  {
    id: "td25",
    name: "Street Solar Light 4-Pack",
    price: 15258,
    description: "Pack of 4 solar street lights for outdoor installation.",
    image: "https://picsum.photos/id/211/600/400",
    category: "Home & Living",
    subcategory: "Garden",
    rating: 4.3,
    stock: 30,
    discount: 6
  },
  {
    id: "td26",
    name: "iPhone Protective Case Duo",
    price: 8390,
    description: "Anti-drop protective case set for popular iPhone models.",
    image: "https://picsum.photos/id/212/600/400",
    category: "Electronics",
    subcategory: "Accessories",
    rating: 4.1,
    stock: 120,
    discount: 2
  },
  {
    id: "td27",
    name: "Herbal Prostate Tea Pack",
    price: 9393,
    description: "Natural prostate health herbal tea bags - organic blend.",
    image: "https://picsum.photos/id/213/600/400",
    category: "Beauty & Health",
    subcategory: "Personal Care",
    rating: 4.2,
    stock: 40,
    discount: 18
  },
  {
    id: "td28",
    name: "Short Sleeve T-Shirt (3 Pack)",
    price: 9061,
    description: "Casual short sleeve t-shirt set - summer essentials.",
    image: "https://picsum.photos/id/214/600/400",
    category: "Fashion",
    subcategory: "Modern Fashion",
    rating: 4.3,
    stock: 60,
    discount: 35
  },
  {
    id: "td29",
    name: "True Wireless Earbuds",
    price: 20502,
    description: "Compact true wireless earbuds with charging case.",
    image: "https://picsum.photos/id/215/600/400",
    category: "Electronics",
    subcategory: "Audio",
    rating: 4.6,
    stock: 22,
    discount: 15
  },
  {
    id: "td30",
    name: "13pc Cookware Set",
    price: 76160,
    description: "Complete 13-piece non-stick cookware set for the kitchen.",
    image: "https://picsum.photos/id/216/600/400",
    category: "Home & Living",
    subcategory: "Kitchen",
    rating: 4.7,
    stock: 10,
    discount: 9
  },
  {
    id: "td31",
    name: "Men's Leather Watch",
    price: 28063,
    description: "Premium men's leather analog watch with water resistance.",
    image: "https://picsum.photos/id/217/600/400",
    category: "Fashion",
    subcategory: "Accessories",
    rating: 4.5,
    stock: 18,
    discount: 20
  },
  {
    id: "td32",
    name: "Utility Jacket",
    price: 36763,
    description: "Warm utility jacket with multiple pockets and zip closure.",
    image: "https://picsum.photos/id/218/600/400",
    category: "Fashion",
    subcategory: "Modern Fashion",
    rating: 4.4,
    stock: 14,
    discount: 4
  },
  {
    id: "td33",
    name: "Portable Sewing Machine",
    price: 35955,
    description: "Compact portable sewing machine suitable for home use.",
    image: "https://picsum.photos/id/219/600/400",
    category: "Home & Living",
    subcategory: "Home Office",
    rating: 4.3,
    stock: 20,
    discount: 6
  }
];

export default products;
