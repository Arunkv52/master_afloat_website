import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/services.jpg";
import Footer from "../components/Footer";
import Serve from "../assets/weld.jpg";
import PipingImg from "../assets/voyage/piping.jpg";
import StructuralImg from "../assets/voyage/structural.jpg";
import ElectricalImg from "../assets/voyage/piping.jpg";
import MechanicalImg from "../assets/voyage/mechanical_works.jpg";
import HydralicsImg from "../assets/voyage/Hydralics.jpeg";
import CarpentaryImg from "../assets/voyage/carpentary-works.jpg";

import PipeImg from "../assets/services/anti_heeling/1.jpg";
import PipeImg1 from "../assets/services/anti_heeling/2.jpg";
import PipeImg2 from "../assets/services/anti_heeling/3.png";


import structuralImg1 from "../assets/services/off_shore/3.jpg";
import structuralImg2 from "../assets/services/off_shore/4.jpg";
import structuralImg3 from "../assets/services/off_shore/5.jpeg";



import ElectricalImg1 from "../assets/services/hanging/2.png";
import ElectricalImg2 from "../assets/services/hanging/3.png";

import MechanicalImg1 from "../assets/services/Sea-fastening/1.png";
import MechanicalImg2 from "../assets/services/Sea-fastening/2.png";
import MechanicalImg3 from "../assets/services/Sea-fastening/3.png";


import Hydralics1 from "../assets/services/hydralics/1.png";
import Hydralics2 from "../assets/services/hydralics/2.png";
import Hydralics3 from "../assets/services/hydralics/3.png";


import Carpentary1 from "../assets/services/vessel_name/2.png";
import Carpentary2 from "../assets/services/vessel_name/3.png";
import Carpentary3 from "../assets/services/vessel_name/5.png";




const Services = () => {
  const { scrollY } = useScroll();

  // Scale the image as user scrolls (adjust values as needed)
  const scale = useTransform(scrollY, [0, 300], [0.6, 1]);
  const opacity = useTransform(scrollY, [0, 300], [0.8, 1]);
  return (
    <>
      <Navbar />

      <div>
        <motion.img
          src={ServiceImg}
          alt="Services"
          className="w-full h-dvh object-cover"
          style={{
            scale,
            opacity,
          }}
        />
        <div className="absolute top-1/2 left-5">
          <h3 className="md:text-6xl text-3xl">
            Expert <br /> Fabrication & Repair Works <br /> for the Marine
            Sector
          </h3>
        </div>
      </div>

      <div className="bg-white md:px-30 px-5 md:py-20 py-10 text-black md:flex justify-around items-start gap-20">
        <div className="md:w-[33%] w-full">
          <div>
            <h2 className="md:text-4xl text-2xl">
              One-Stop Fabrication & Repair Solutions for the Marine Industry
            </h2>
            <div className="md:pt-20 pt-5">
              <img src={Serve} alt="" className="w-full h-auto" />
              <p className="pt-3 text-base">
                Our other services are: – Scaffold works, Riding crew supply,
                Tank cleaning, hydro jetting, Vessel Name, IMO change, Shipside
                fender renewal, Anchor renewal works etc.,
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[66%] w-full md:py-0 py-10">
          <div>
            <p className="md:text-2xl text-2xl">
              {" "}
              Master Afloat Repair Works is a firm dedicated to provide one-stop
              solution services (Fabrication and Repair works) to suit for the
              Marine industry (onshore/offshore and Voyage jobs).
            </p>
          </div>
          <div className="md:grid grid-cols-2 gap-5 py-10">
            <div className="md:py-0 py-5">
              <h5 className="text-[#006994] text-2xl">Piping Works</h5>
              <p className="text-[18px] pt-3">
                Engine room, Main deck, cargo line, Ballast line, Firefighting.
                Overboard pipes modifications and renewal Bellow fabrication and
                installation.{" "}
              </p>
              <img
                src={PipingImg}
                alt=""
                className="w-full h-[260px] object-cover"
              />
              <div className="small-img grid grid-cols-3 gap-3 mt-3">
                <img src={PipeImg} alt="" />
                <img src={PipeImg1} alt="" />
                <img src={PipeImg2} alt="" />
              </div>
            </div>
            <div className="md:py-0 py-5">
              <h5 className="text-[#006994] text-2xl">Structural Works</h5>
              <p className="text-[18px] pt-3">
                We are specialized in Cell guide, shell plate, Steel structure,
                Offshore platform, Aluminium Ladder repair fabrication and
                installation with load test.
              </p>{" "}
              <img
                src={StructuralImg}
                alt=""
                className="w-full h-[260px] object-cover"
              />
              <div className="small-img grid grid-cols-3 gap-3 mt-3">
                <img src={structuralImg1} alt="" />
                <img src={structuralImg2} alt="" />
                <img src={structuralImg3} alt="" />
              </div>
            </div>
            <div className="md:py-0 py-5">
              <h5 className="text-[#006994] text-2xl">Electrical Works</h5>
              <p className="text-[18px] pt-3">
                We provide Alternator Generator servicing, motor Rewinding,
                troubleshoot control panel, Cable laying and termination works.
              </p>
              <img
                src={ElectricalImg}
                alt=""
                className="w-full h-[260px] object-cover"
              />
               <div className="small-img grid grid-cols-3 gap-3 mt-3">
                <img src={ElectricalImg1} alt="" />
                <img src={ElectricalImg2} alt="" />
              </div>
            </div>
            <div className="md:py-0 py-5">
              <h5 className="text-[#006994] text-2xl">Mechanical Works</h5>
              <p className="text-[18px] pt-3">
                Main Engine Servicing, Tail shaft bearing alignment, Anchor
                windlass, Deck mooring winches and Cargo Pump & Butterfly Valve
                servicing and install. in Anchorage / Voyage.
              </p>
              <img
                src={MechanicalImg}
                alt=""
                className="w-full h-[260px] object-cover"
              />
               <div className="small-img grid grid-cols-3 gap-3 mt-3">
                <img src={MechanicalImg3} alt="" />
                <img src={MechanicalImg1} alt="" />
                <img src={MechanicalImg2} alt="" />
              </div>
            </div>
            <div className="md:py-0 py-5">
              <h5 className="text-[#006994] text-2xl">Hydraulic Works</h5>
              <p className="text-[18px] pt-3">
                Service and troubleshooting for Cranes, hydraulic cylinder
                overhauling, Repair /testing of hydraulic pump and Tank Gauging
                automation .
              </p>
              <img
                src={HydralicsImg}
                alt=""
                className="w-full h-[260px] object-cover"
              />
               <div className="small-img grid grid-cols-3 gap-3 mt-3">
                <img src={Hydralics3} alt="" />
                <img src={Hydralics1} alt="" />
                <img src={Hydralics2} alt="" />
              </div>
            </div>
            <div className="md:py-0 py-5">
              <h5 className="text-[#006994] text-2xl">
                Accommodation Flooring & Carpentry Works
              </h5>
              <p className="text-[18px] pt-3">
                We provides all types of accommodation repairs and supply wooden
                furniture items with installation, Water tight Doors, Port
                holes, marine floor tiles renewal and Bridge toughen glass
                fabrication and installation.{" "}
              </p>
              <img
                src={CarpentaryImg}
                alt=""
                className="w-full h-[260px] object-cover"
              />
               <div className="small-img grid grid-cols-3 gap-3 mt-3">
                <img src={Carpentary3} alt="" />
                <img src={Carpentary1} alt="" />
                <img src={Carpentary2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
