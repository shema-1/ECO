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
  },
  "Agriculture": {
    subcategories: ["Farm Equipment", "Seeds & Plants", "Fertilizers", "Livestock", "Tools"],
    featured: ["Tractors", "Organic Seeds", "Farming Tools"],
    bannerImage: "https://picsum.photos/id/1074/1200/300"
  },
  "Houses": {
    subcategories: ["For Sale", "For Rent", "Apartments", "Villas", "Commercial"],
    featured: ["Modern Houses", "Luxury Villas", "Affordable Homes"],
    bannerImage: "https://picsum.photos/id/1018/1200/300"
  },
  "Lands": {
    subcategories: ["Residential", "Commercial", "Agricultural", "Industrial", "Investment"],
    featured: ["Prime Locations", "Development Land", "Farmland"],
    bannerImage: "https://picsum.photos/id/1035/1200/300"
  },
  "Cars": {
    subcategories: ["Sedans", "SUVs", "Trucks", "Motorcycles", "Commercial Vehicles"],
    featured: ["Toyota Models", "Honda Vehicles", "Luxury Cars"],
    bannerImage: "https://picsum.photos/id/111/1200/300"
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
  },
  // Agriculture Products
  {
    id: "ag1",
    name: "Compact Tractor 25HP",
    price: 8500000,
    description: "Reliable compact tractor perfect for small to medium farms. Includes plow attachment.",
    image: "https://picsum.photos/id/1074/600/400",
    category: "Agriculture",
    subcategory: "Farm Equipment",
    rating: 4.7,
    stock: 5,
    featured: true
  },
  {
    id: "ag2",
    name: "Organic Coffee Seeds (1kg)",
    price: 12500,
    description: "Premium organic coffee seeds from local Rwandan farms. High yield variety.",
    image: "https://picsum.photos/id/1075/600/400",
    category: "Agriculture",
    subcategory: "Seeds & Plants",
    rating: 4.5,
    stock: 50,
    discount: 10
  },
  {
    id: "ag3",
    name: "Organic Fertilizer 50kg",
    price: 45000,
    description: "Natural organic fertilizer for healthy crop growth. Environmentally friendly.",
    image: "https://picsum.photos/id/1076/600/400",
    category: "Agriculture",
    subcategory: "Fertilizers",
    rating: 4.6,
    stock: 30
  },
  {
    id: "ag4",
    name: "Farming Tool Set",
    price: 35000,
    description: "Complete set of essential farming tools including hoe, rake, and shovel.",
    image: "https://picsum.photos/id/1077/600/400",
    category: "Agriculture",
    subcategory: "Tools",
    rating: 4.4,
    stock: 25,
    discount: 15
  },
  // Houses
  {
    id: "house1",
    name: "Modern 3-Bedroom House in Kigali",
    price: 250000000,
    description: "Beautiful modern house with 3 bedrooms, 2 bathrooms, fully furnished. Prime location in Kigali.",
    image: "https://picsum.photos/id/1018/600/400",
    category: "Houses",
    subcategory: "For Sale",
    rating: 4.8,
    stock: 1,
    featured: true
  },
  {
    id: "house2",
    name: "Luxury Villa - 5 Bedrooms",
    price: 850000000,
    description: "Stunning luxury villa with 5 bedrooms, swimming pool, and large garden. Perfect for families.",
    image: "https://picsum.photos/id/1019/600/400",
    category: "Houses",
    subcategory: "Villas",
    rating: 5.0,
    stock: 1,
    featured: true
  },
  {
    id: "house3",
    name: "2-Bedroom Apartment for Rent",
    price: 350000,
    description: "Cozy 2-bedroom apartment in city center. Available for monthly rent. Includes parking.",
    image: "https://picsum.photos/id/1020/600/400",
    category: "Houses",
    subcategory: "For Rent",
    rating: 4.5,
    stock: 3
  },
  {
    id: "house4",
    name: "Affordable Starter Home",
    price: 120000000,
    description: "Perfect starter home with 2 bedrooms, 1 bathroom. Great investment opportunity.",
    image: "https://picsum.photos/id/1021/600/400",
    category: "Houses",
    subcategory: "For Sale",
    rating: 4.6,
    stock: 2,
    discount: 5
  },
  // Lands
  {
    id: "land1",
    name: "Prime Residential Land - 500sqm",
    price: 45000000,
    description: "Prime residential land in developing area. Perfect for building your dream home.",
    image: "https://picsum.photos/id/1035/600/400",
    category: "Lands",
    subcategory: "Residential",
    rating: 4.7,
    stock: 1,
    featured: true
  },
  {
    id: "land2",
    name: "Commercial Land - 2000sqm",
    price: 180000000,
    description: "Large commercial plot ideal for business development. Located in business district.",
    image: "https://picsum.photos/id/1036/600/400",
    category: "Lands",
    subcategory: "Commercial",
    rating: 4.8,
    stock: 1,
    featured: true
  },
  {
    id: "land3",
    name: "Agricultural Farmland - 5 Hectares",
    price: 95000000,
    description: "Fertile agricultural land perfect for farming. Includes water access.",
    image: "https://picsum.photos/id/1037/600/400",
    category: "Lands",
    subcategory: "Agricultural",
    rating: 4.6,
    stock: 1
  },
  {
    id: "land4",
    name: "Investment Land Package",
    price: 65000000,
    description: "Great investment opportunity. Multiple plots available in growing area.",
    image: "https://picsum.photos/id/1038/600/400",
    category: "Lands",
    subcategory: "Investment",
    rating: 4.5,
    stock: 5,
    discount: 8
  },
  // Cars
  {
    id: "car1",
    name: "Toyota RAV4 2023",
    price: 35000000,
    description: "Reliable Toyota RAV4 SUV. Low mileage, excellent condition. Perfect for family use.",
    image: "https://picsum.photos/id/111/600/400",
    category: "Cars",
    subcategory: "SUVs",
    rating: 4.8,
    stock: 2,
    featured: true
  },
  {
    id: "car2",
    name: "Honda Civic 2022",
    price: 18500000,
    description: "Fuel-efficient Honda Civic sedan. Well maintained, single owner. Great value.",
    image: "https://picsum.photos/id/112/600/400",
    category: "Cars",
    subcategory: "Sedans",
    rating: 4.7,
    stock: 3,
    discount: 12
  },
  {
    id: "car3",
    name: "Toyota Hilux Double Cab",
    price: 42000000,
    description: "Powerful Toyota Hilux pickup truck. Perfect for both work and personal use.",
    image: "https://picsum.photos/id/113/600/400",
    category: "Cars",
    subcategory: "Trucks",
    rating: 4.9,
    stock: 1,
    featured: true
  },
  {
    id: "car4",
    name: "Yamaha Motorcycle 150cc",
    price: 2800000,
    description: "Reliable Yamaha motorcycle. Great fuel economy, perfect for city commuting.",
    image: "https://picsum.photos/id/114/600/400",
    category: "Cars",
    subcategory: "Motorcycles",
    rating: 4.6,
    stock: 8,
    discount: 10
  },
  {
    id: "car5",
    name: "Mercedes-Benz C-Class",
    price: 55000000,
    description: "Luxury Mercedes-Benz sedan. Premium features, excellent condition.",
    image: "https://picsum.photos/id/115/600/400",
    category: "Cars",
    subcategory: "Sedans",
    rating: 5.0,
    stock: 1,
    featured: true
  }
];

export default products;
