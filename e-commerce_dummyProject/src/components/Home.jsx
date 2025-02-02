import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Products from "./Products.jsx";
import HeroCarousel from "./HeroCarousel.jsx";
import Categoriesbelowbanner from "./Categoriesbelowbanner.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <Categoriesbelowbanner />
      <Products />
      <Footer />
    </>
  );
}
