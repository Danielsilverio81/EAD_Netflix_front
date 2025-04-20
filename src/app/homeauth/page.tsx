import { Metadata } from "next";
import FeaturedSection from "@/components/homeAuthSections/featuredSection";
import NewestCategory from "@/components/homeAuthSections/newestCategory";
import FavoriteCategory from "@/components/homeAuthSections/favoriteCategory";
import FeaturedCategory from "@/components/homeAuthSections/featuredCategory";
import ListCategories from "@/components/homeAuthSections/listCategories";
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
        <FooterComponent />
      </main>
    </>
  );
};

export default HomeAuth;
