import RecentArrivals from "@/components/Home/RecentArrivals/RecentArrivals";
import GenreSpotLight from "@/components/Home/Category/GenreSpotLight";
import FeaturedBooks from "@/components/Home/FeaturedBooks/FeaturedBooks";
import Banner from "@/components/Home/HeroBanner/Banner";
import Reviews from "@/components/Home/Reviews/Reviews";




export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedBooks />
      <section className="bg-blue-100">
        <GenreSpotLight />
      </section>
      <RecentArrivals />
      <Reviews />
      
    </div>
  );
}
