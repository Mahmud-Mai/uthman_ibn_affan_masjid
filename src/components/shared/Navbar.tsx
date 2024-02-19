import PrimaryBtn from "../ui/PrimaryBtn";

const Navbar = () => {
  return (
    <section className="fixed w-full bg-white ">
      <div className="mx-auto w-4/5  flex justify-between items-center px-2 py-3 bg-white border">
        <p className="logo">Uthman bin Affan Mosque</p>
        <p className="flex space-x-6 items-center">
          <ul className="flex space-x-6 font-light text-md uppercase">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Events</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <PrimaryBtn />
        </p>
      </div>
    </section>
  );
};

export default Navbar;
