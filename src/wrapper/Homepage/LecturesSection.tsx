import ReactPlayer from "react-player/youtube";
import HeadingTwo from "../../components/ui/HeadingTwo";

const LecturesSection = () => {
  // const videoLinks = [
  //   {src:"https://www.youtube.com/watch?v=lDVjA80StuU&pp=ygUMYmFuZXggbW9zcXVl";},
  //   {src:"https://www.youtube.com/watch?v=lDVjA80StuU&pp=ygUMYmFuZXggbW9zcXVl";}
  //   {src:"https://www.youtube.com/watch?v=lDVjA80StuU&pp=ygUMYmFuZXggbW9zcXVl";}
  // ]
  const src =
    "https://www.youtube.com/watch?v=lDVjA80StuU&pp=ygUMYmFuZXggbW9zcXVl";
  return (
    <section className="bg-[#f3f3f3]">
      <div className="w-4/5 mx-auto py-20">
        <HeadingTwo heading={"Latest Lectures"} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-16">
          {/* Video Tag start */}
          <div className=" bg-white h-[450px] border-2 border-gray-600 shadow-xl rounded-xl bg-cover bg-center flex flex-col justify-end  hover:scale-110 cursor-pointer">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={src}
                width="100%"
              />
            </div>
            <div className="px-4">
              <h3 className="text-xl lg:text-2xl">Khutbatul Jumu'ah</h3>
            </div>
          </div>
          <div className=" bg-white h-[450px] border-2 border-gray-600 shadow-xl rounded-xl bg-cover bg-center flex flex-col justify-end  hover:scale-110 cursor-pointer">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={
                  "https://www.youtube.com/watch?v=BFuroIREsXI&pp=ygUcVVRIVU1BTiBCSU4gQUZGQU4gYmFuZXggV1VTRQ%3D%3D"
                }
                width="100%"
              />
            </div>
            <div className="px-4">
              <h3 className="text-xl lg:text-2xl">Ramadan Tafsir</h3>
            </div>
          </div>
          <div className=" bg-white h-[450px] border-2 border-gray-600 shadow-xl rounded-xl bg-cover bg-center flex flex-col justify-end  hover:scale-110 cursor-pointer">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={"https://www.youtube.com/watch?v=Jg1jGBEKApU"}
                width="100%"
              />
            </div>
            <div className="px-4">
              <h3 className="text-xl lg:text-2xl">Weekly Ta'leem</h3>
            </div>
          </div>
          {/* Video Tag ebd */}
        </div>
        <div className="flex items-center justify-center w-[30rem] mx-auto my-16 py-8">
          <button className="bg-[#baa769] w-full text-white p-4 text-lg rounded-xl shadow-2xl border-none">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LecturesSection;
