import Swoosh from "../../assets/deco-symbol-swoosh.png";

const Hero = () => {
  return (
    <section className="bg-[url('/src/assets/masjid_main.jpeg')] bg-fixed bg-no-repeat bg-bottom h-[85vh] flex items-center justify-center text-white">
      <div className="text-center justify-center bg-black/30 p-2 lg:p-4">
        <h1 className="text-2xl text-[3em] lg:text-[3em] capitalize leading-[4rem] tracking-wider">
          Welcome to <br />
          Uthman bin Affan Mosque
        </h1>
        <h2 className="mt-8 text-[1.5rem] font-light max-w-xl text-center mx-auto">
          "And establish prayer and give zakah, and whatever good you put
          forward for yourselves – you will find it with Allah. Indeed, Allah of
          what you do, is Seeing.""
          <br />
          Al-Baqarah 2:110
        </h2>
        <div className="flex items-center justify-center mt-10">
          <img
            src={Swoosh}
            alt="swoosh"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
