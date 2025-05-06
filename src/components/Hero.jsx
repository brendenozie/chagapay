import { motion } from "framer-motion";
import { ShieldCheck, Lock, KeyRound } from "lucide-react";
import phone from "../assets/phone.png";
import { apple, google } from "../assets";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="bg-white/30 backdrop-blur-md p-6 rounded-3xl shadow-2xl hover:shadow-3xl border border-gray-200 flex flex-col items-center text-center cursor-pointer transition-transform hover:bg-white/50 hover:backdrop-blur-xl"
  >
    <motion.div
      whileHover={{ rotate: 10 }}
      className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-xl shadow-md mb-4"
    >
      <Icon className="text-white w-8 h-8" />
    </motion.div>
    <h4 className="text-2xl font-bold text-gray-800 mb-2 tracking-wide drop-shadow-md">
      {title}
    </h4>
    <p className="text-base text-gray-700 leading-relaxed max-w-xs">
      {description}
    </p>
  </motion.div>
);

const Hero = () => {

  const handleGetStarted = () => {
    const section = document.getElementById("downloadnow");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <div id="home" className="min-h-screen  relative ">
    <motion.div className="py-28 relative z-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-6 text-gray-900 space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-indigo-700 to-purple-700 text-transparent bg-clip-text drop-shadow-2xl"
          >
            Elevate Your Finances
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-md">
            Manage, secure, and optimize your financial journey with unmatched ease and efficiency.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(128, 90, 213, 0.7)" }}
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-full shadow-xl hover:shadow-3xl text-lg font-semibold transition-transform hover:opacity-90"
          >
            Get Started
          </motion.button>

{/*           <div className="flex space-x-4 mt-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform"
            >
              <img src={google.src} alt="Google Play" className="w-32 md:w-36 hover:opacity-90" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform"
            >
              <img src={apple.src} alt="Apple Store" className="w-32 md:w-36 hover:opacity-90" />
            </motion.a>
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-6 relative flex justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={phone.src}
            alt="App Mockup"
            className="shadow-2xl rounded-3xl w-full max-w-sm md:max-w-md border-4 border-white/50"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-[-20px] right-[-20px] bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-xl text-sm animate-pulse"
          >
            New Features!
          </motion.div>
        </motion.div>
      </div>
    </motion.div>

    <div className="absolute inset-0 bg-gradient-to-r from-purple-300/30 to-indigo-400/30 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>

    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 px-6 py-6 md:px-0 relative z-10">
      <FeatureCard
        icon={ShieldCheck}
        title="Unparalleled Security"
        description="Advanced encryption keeps your data and transactions secure."
      />
      <FeatureCard
        icon={Lock}
        title="Privacy Reinvented"
        description="We champion your privacy with the highest data protection standards."
      />
      <FeatureCard
        icon={KeyRound}
        title="Seamless Experience"
        description="Effortlessly control your finances anytime, anywhere."
      />
    </div>
  </div>
)};

export default Hero;
