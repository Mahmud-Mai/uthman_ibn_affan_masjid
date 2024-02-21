import PrimaryBtn from "../../components/ui/PrimaryBtn";
import Rearview from "../../assets/rearview.jpeg";

const DonationSection = () => {
  return (
    <section className="py-20 bg-[#f3f3f3] bg-[url('/src/assets/floral_background')]">
      <div className="mx-auto w-4/5 grid lg:grid-cols-2">
        <div className="flex items-center">
          <div className="px-5">
            <h2 className="text-5xl">Support Our Cause</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              repellat eaque consequatur vitae similique doloribus quam
              veritatis minus ipsum quos. Illo placeat dignissimos perspiciatis
              iure magnam laudantium consequatur in iste!
            </p>
            <div className="mt-10">
              <PrimaryBtn />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <img
            src={Rearview}
            alt="swoosh"
            width={"100%"}
          />
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
