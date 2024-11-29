import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";
import HeroBgAnimation from "./HeroBgAnnimation"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-950 pb-4 lg:mb-36`">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16"
            >
              Atul Malviya
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-3xl tracking-tight text-transparent "
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a 
            variants={container(1)}
            initial="hidden"
            animate="visible"
              href="https://drive.google.com/file/d/1ZX-Yxj8y7pwfZkVQRgNyOZUNy6GPbSS1/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1"
            >
              View Resume
              <LuExternalLink />
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
          <HeroBgAnimation />
            {/* <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Profile pic"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
