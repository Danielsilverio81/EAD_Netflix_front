import { Metadata } from "next";
import FeaturedSection from "@/components/featuredSection";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "EAD-flix Home",
};

const HomeAuth = () => {
  return (
    <>
      <main>
        <FeaturedSection/>
      </main>
    </>
  );
};

export default HomeAuth;
