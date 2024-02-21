import HeadingTwo from "../../components/ui/HeadingTwo";

const ServicesSection = () => {
  return (
    <section className="w-3/5 mx-auto">
      <HeadingTwo heading={"Our Programs"} />{" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
        <div className=" h-[450px] border-2 border-gray-600 shadow-xl rounded-xl bg-[url('/src/assets/bookshelf.jpeg')] bg-cover bg-center flex flex-col justify-end text-white  hover:scale-110 cursor-pointer">
          <div className="bg-black/45 px-4">
            <h3 className="text-xl lg:text-2xl">Weekly Ta'aleem'</h3>
            {/* <h4 className="h-5 mt-2 text-lg lg:text-xl">subtitle</h4> */}
          </div>
        </div>
        <div className=" h-[450px] border-2 border-gray-600 shadow-xl rounded-xl bg-[url('/src/assets/classroom.jpeg')] bg-cover bg-center flex flex-col justify-end text-white  hover:scale-110 cursor-pointer">
          <div className="bg-black/45 px-4">
            <h3 className="text-xl lg:text-2xl">Madrasah</h3>
            {/* <h4 className="h-5 mt-2 text-lg lg:text-xl">subtitle</h4> */}
          </div>
        </div>
        {/*  --------------- Second Row ---------------  */}
        <div className=" h-[450px] border-2 border-gray-600 shadow-xl rounded-xl bg-[url('/src/assets/nikah.jpg')] bg-cover bg-center flex flex-col justify-end text-white  hover:scale-110 cursor-pointer">
          <div className="bg-black/45 px-4">
            <h3 className="text-xl lg:text-2xl">Nikah</h3>
            {/* <h4 className="h-5 mt-2 text-lg lg:text-xl">subtitle</h4> */}
          </div>
        </div>
        <div className=" h-[450px] border-2 border-gray-600 shadow-xl rounded-xl bg-[url('/src/assets/masjid_main.jpeg')] bg-cover bg-center flex flex-col justify-end text-white  hover:scale-110 cursor-pointer">
          <div className="bg-black/45 px-4">
            <h3 className="text-xl lg:text-2xl">I'tikaf</h3>
            {/* <h4 className="h-5 mt-2 text-lg lg:text-xl">subtitle</h4> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
