import FeaturedBooks from "@/components/FeaturedBooks/FeaturedBooks";
import Banner from "@/components/HeroBanner/Banner";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedBooks />
      
    </div>
  );
}
