export const navLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Shop",
    route: "/shop",
  },
  {
    label: "Categories",
    route: "#categories",
  },
  {
    label: "Featured",
    route: "#featured",
  },
  {
    label: "Sales",
    route: "#sales",
  },
  {
    label: "Testimonials",
    route: "#testimonials",
  },
];

export const services = [
  {
    title: "Free Shipping",
    description: "free shipping on all orders",
    image: "/services/fast-delivery.png",
  },
  {
    title: "Money Guarantee",
    description: "30-day money-back guarantee",
    image: "/services/checked.png",
  },
  {
    title: "Online Support 24/7",
    description: "24/7 Technical Support",
    image: "/services/support.png",
  },
  {
    title: "Secure Payment",
    description: "all cards accepted",
    image: "/services/secure-payment.png",
  },
];

export const categories = [
  {
    name: "Makeup",
    image: "/categories/makeup.png",
    colSpan: false,
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  {
    name: "Bottoms",
    image: "/categories/bottoms.png",
    colSpan: false,
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  {
    name: "Dresses",
    image: "/categories/dresses.png",
    colSpan: true,
    initial: { opacity: 0, scale: 0.5, x: 150 },
    whileInView: { opacity: 1, scale: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.5 },
  },
  {
    name: "Accessories",
    image: "/categories/accessories.png",
    colSpan: true,
    initial: { opacity: 0, scale: 0.5, x: -150 },
    whileInView: { opacity: 1, scale: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.5 },
  },
  {
    name: "Shoes",
    image: "/categories/shoes.png",
    colSpan: false,
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  {
    name: "Sales",
    image: "/categories/sales.png",
    colSpan: false,
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
];

export const features = [
  {
    name: "A Vintage Timeless Glamour",
    image: "/dresses/6.jpg",
    price: 615,
    sale: 30,
  },
  {
    name: "Futuristic Fantasy",
    image: "/dresses/3.jpg",
    price: 400,
    sale: 23,
  },
  {
    name: "Glamour High-Waisted Trousers",
    image: "/bottoms/4.jpg",
    price: 41,
    sale: 10,
  },
  {
    name: "Metropolitan Chic",
    image: "/makeup/2.jpg",
    price: 34,
    sale: 6,
  },
  {
    name: "Timeless Treasures Watch",
    image: "/accessories/5.jpg",
    price: 65,
    sale: 14,
  },
  {
    name: "Timeless Tuxedo Leggings",
    image: "/bottoms/6.jpg",
    price: 48,
    sale: 10,
  },
  {
    name: "Cityscape Adventure Backpack",
    image: "/accessories/2.jpg",
    price: 100,
    sale: 18,
  },
  {
    name: "Futuristic Fusion Boots",
    image: "/shoes/7.jpg",
    price: 30,
    sale: 4,
  },
];

export const sales = [
  {
    name: "A Vintage Timeless Glamour",
    image: "/dresses/6.jpg",
    price: 615,
    sale: 30,
  },
  {
    name: "Futuristic Fantasy",
    image: "/dresses/3.jpg",
    price: 400,
    sale: 23,
  },
  {
    name: "Glamour High-Waisted Trousers",
    image: "/bottoms/4.jpg",
    price: 41,
    sale: 10,
  },
  {
    name: "Metropolitan Chic",
    image: "/makeup/2.jpg",
    price: 34,
    sale: 6,
  },
  {
    name: "Timeless Treasures Watch",
    image: "/accessories/5.jpg",
    price: 65,
    sale: 14,
  },
  {
    name: "Timeless Tuxedo Leggings",
    image: "/bottoms/6.jpg",
    price: 48,
    sale: 10,
  },
  {
    name: "Cityscape Adventure Backpack",
    image: "/accessories/2.jpg",
    price: 100,
    sale: 18,
  },
  {
    name: "Futuristic Fusion Boots",
    image: "/shoes/7.jpg",
    price: 30,
    sale: 4,
  },
];
