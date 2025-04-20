import FooterComponent from "@/components/Common/footer/FooterComponent";
import UserForm from "@/components/pagesComponents/profileComponent/user";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Profile`,
};

const Profile = async () => {
  return (
    <>
      <main>
        <UserForm />
        <FooterComponent />
      </main>
    </>
  );
};

export default Profile;
