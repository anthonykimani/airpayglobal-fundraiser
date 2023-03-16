import { useState } from "react";
import HeroBg from "../assets/svg/hero-background.svg";
import playLogo from "../assets/svg/play.svg";
import Modal from "./Modal";

const HeroSection = () => {
    const [ showModal, setShowModal ] = useState(false);

    const handleShowModal = ()=>{

    }

  return (
    <section className="flex flex-col md:flex-row justify-center items-center mb-24 bg-white text-[#14183E] bg-gradient-to-r from-[#DBE7F4] to-[#FFFFFF] ">
      <article className="p-3 md:p-5 w-[100%] md:w-[50%] md">
        <h1 className="text-3xl xsm:text-4xl  md:text-6xl font-extrabold ">
          Help <span className="text-[#007BFF]">Support</span> Disaster Stricken{" "}
          <span className="text-[#007BFF]">Communities </span>
        </h1>
        <h2 className=" text-base xsm:text-xl mt-10 text-opacity-80 font-bold">
          Join our mission to provide vital aid and assistance to those impacted
          by disasters!
        </h2>
        <div className="flex justify-between items-center mt-10 w-[260px]">
          <button className=" bg-[#007BFF] text-white py-2 px-4 rounded font-extrabold"
          onClick={()=>setShowModal(true)}
          >
            Donate Now
          </button>
          <img src={playLogo} alt="" />
          <h4 className=" font-extrabold">How it works</h4>
        </div>
      </article>
      <img src={HeroBg} alt="" className="w-[95%] md:w-[40%] m-5 " />
      { showModal ? <Modal showModal={showModal} setShowModal={setShowModal} /> : null }
    </section>
  );
};

export default HeroSection;
