import { Metadata } from "next";
import FeaturedSection from "@/components/featuredSection";
import NewestCategory from "@/components/newestCategory";
import FavoriteCategory from "@/components/favoriteCategory";
import FeaturedCategory from "@/components/featuredCategory";
import ListCategories from "@/components/listCategories";
import FooterComponent from "@/components/Common/footer/FooterComponent";

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
        <FeaturedCategory />
        <ListCategories />
        <FooterComponent/>
      </main>
    </>
  );
};

export default HomeAuth;
