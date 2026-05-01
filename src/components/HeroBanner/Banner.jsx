import Image from "next/image";import BannerImg from "../../assets/Photo/book-banner-img.jpg"; 
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (

    <section className="relative w-full h-[700px] overflow-hidden py-20"> 
      <Image
        src={BannerImg}
        alt="Hero Banner"
        fill 
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 z-0 bg-linear-to-r from-[#C67026]/60 via-[#C67026]/40 to-[#C67026]/60"></div>

      <div className="absolute inset-0 z-10 flex items-center justify-center flex-col">

        <h1 className="text-8xl font-bold text-white text-center uppercase">
          find your next read
        </h1>

          <Link href="/allbooks" className="mt-10">
          <button className="font-bold text-2xl btn uppercase p-5  ">
            Browse now
          </button>
          </Link>

         <div className="absolute inset-x-0 bottom-0 z-20">
          <Marquee speed={80} className="absolute z-30 bottom-0 bg-[#d26403] w-full text-white p-3 font-medium text-2xl">
          
          <p>New Arrivals: [The Last Forest] | Special Discount on Memberships - Sign up today for exclusive offers and early access to our new collections!</p>
         </Marquee>
         </div>
      </div>
    </section>
  );
};

export default Banner;