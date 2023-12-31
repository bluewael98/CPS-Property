import Hero from "@/components/Hero";
import LeftRightWork from "@/components/LeftRightWork";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";
export default async function HomePage() {
  return (
    <div className="min-[530px]:pt-[60px] min-[700px]:pt-[40px]">
      <section id="Hero">
        <Hero />
      </section>

      <section id="Services">
        <LeftRightWork />
      </section>

      <section className="min-[380px]:pt-0 pt-[50px]">
        <ContactUs />
      </section>

      <section id="Map">
        <div className="w-screen bg-brown h-[100px] flex flex-col justify-center items-center">
          <p>Copyright © 2023 CPS & Co. Property Services.</p>
          <Image src="/CPSLOGO.png" alt="CPS" width={50} height={50} />
        </div>
      </section>
    </div>
  );
}
