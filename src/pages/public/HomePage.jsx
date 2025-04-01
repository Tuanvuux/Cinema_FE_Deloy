import Navbar from "@/components/layout/Navbar";
import HomeSlider from "@/components/HomeSlider";
import MovieSlider from "@/components/MovieSlider";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="mt-1.5">
        <HomeSlider />
      </div>
      <div className="mt-1.5">
        <MovieSlider />
      </div>
      <div className="mt-1.5">
        <Footer />
      </div>
    </div>
  );
}
