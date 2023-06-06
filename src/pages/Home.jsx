import React from "react";
import Particle from "../components/Particle";
import foreground from "../assets/MainForeground.png";
import profileImage from "../assets/ProfilePic.png";
import ProfileName from "../components/ProfileName";
import Profession from "../components/Profession";

const Home = () => {
  return (
    <section className="h-full">
      <Particle />
      <div
        className="absolute top-0 left-0 flex items-end justify-start gap-20"
        style={{
          backgroundImage: `url(${foreground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "700px",
          width: "100%",
        }}
      >
        <img className="self-end mb-14 ml-10 bottom-0 h-2/3" src={profileImage} />
        <div className="flex flex-col gap-5 pb-16">
          <ProfileName />
          <Profession />
        </div>
      </div>
      <div className="h-10 bg-cyan-800"></div>
    </section>
  );
};

export default Home;
