import { card } from "../assets";
import Button from "./Button";

const CardDeal = () =>{

  const handleGetStarted = () => {
    const section = document.getElementById("downloadnow");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

 return (
  <section className="flex flex-col md:flex-row items-center py-12 sm:py-20 bg-white" id="cardDeal">
    <div className="flex-1 text-center md:text-left px-6 sm:px-12">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        Send money faster <br className="hidden sm:block" /> in just a few simple steps.
      </h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0 mt-5">
        Whether it’s across the street or across the globe, transfer funds quickly, securely, and without the hassle. No hidden fees, just smooth payments.
      </p>
      <Button onClick={handleGetStarted} className="mt-10 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md transition-colors duration-300" />
    </div>

    <div className="flex-1 flex justify-center md:justify-end px-6 sm:px-12">
      <img src={card.src} alt="card" className="object-contain w-full max-w-md md:max-w-lg" />
    </div>
  </section>
)};

export default CardDeal;
