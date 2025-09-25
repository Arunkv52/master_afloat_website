import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Underwater from '../assets/underwater.jpg'
import FullShot from '../assets/full-shot.jpg'

const Example = () => {
  return (
    <div className="">
      
      <HorizontalScrollCarousel />
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative md:h-[450px] h-[600px] md:w-[450px] w-[600px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 md:text-4xl text-2xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: Underwater,
    title: "Piping Works",
    id: 1,
  },
  {
    url: FullShot,
    title: "Structural Works",
    id: 2,
  },
  {
    url: Underwater,
    title: "Mechanical Works",
    id: 3,
  },
  {
    url: FullShot,
    title: "Electrical Works",
    id: 4,
  },
  {
    url: Underwater,
    title: "Hydraulic Works",
    id: 5,
  },
  {
    url: FullShot,
    title: "Accommodation Works(Carpentry and Flooring Works)",
    id: 6,
  },
  
];