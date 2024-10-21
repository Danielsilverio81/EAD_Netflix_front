import { Metadata } from "next";
import FeaturedSection from "@/components/featuredSection";
import NewestCategory from "@/components/newestCategory";

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
        <NewestCategory />
      </main>
    </>
  );
};

export default HomeAuth;
