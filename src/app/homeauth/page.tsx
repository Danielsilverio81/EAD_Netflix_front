import { Metadata } from "next";
import FeaturedSection from "@/components/featuredSection";
import NewestCategory from "@/components/newestCategory";
import FavoriteCategory from "@/components/favoriteCategory";

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
        <FeaturedSection />
        <NewestCategory />
        <FavoriteCategory />
      </main>
    </>
  );
};

export default HomeAuth;
