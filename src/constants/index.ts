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
