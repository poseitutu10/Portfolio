import profile from "./../../assets/mainpro.png";

const Profile = () => {
  return (
    <>
      <img
        src={profile}
        alt="my-profile"
        className="w-[200px] h-[200px] bg-[#252525] rounded-full border border-gray-500 lg:hidden m-auto"
      />
    </>
  );
};

export default Profile;
