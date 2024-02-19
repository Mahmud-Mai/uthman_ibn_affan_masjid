const Navbar = () => {
  return (
    <section className="fixed w-full bg-white ">
      <div className="mx-auto w-4/5  flex justify-between items-center px-2 py-3 bg-white border">
        <p className="logo">Uthman bin Affan Mosque</p>
        <p className="flex space-x-6 items-center">
          <ul className="hidden md:flex space-x-6 font-light text-md uppercase list-none">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Events</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <button className="bg-[#baa769] text-white p-4 text-lg rounded-xl shadow-2xl">
            Donate
          </button>
        </p>
      </div>
    </section>
  );
};

export default Navbar;
