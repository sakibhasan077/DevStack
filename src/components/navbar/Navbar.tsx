import navLogo from "../../assets/images/logo-text.png";
import HamburgerIcon from "../../assets/images/hamburger.png";
const Navbar = () => {
  return (
    <nav className="fixed px-7 top-0 w-full bg-white shadow-sm py-6 z-50 h-20">
      <div className="container mx-auto flex justify-between w-full items-center">
        {/* Hamburger */}
        <div className="lg:hidden cursor-pointer ">
          <img src={HamburgerIcon} alt="" />
        </div>
        {/* Logo */}
        <div>
          <img src={navLogo} alt="Navbar Logo" />
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex gap-7 items-center text-[14px] font-semibold ">
          <li><a className="text-[#DB2777]" href="#">Home</a></li>
          <li><a className="text-[#475569] " href="#">Technologies</a></li>
          <li><a className="text-[#475569] " href="#">Projects</a></li>
          <li><a className="text-[#475569] " href="#">About</a></li>
          <li><a className="text-[#475569] " href="#">Contact</a></li>
        </ul>
        {/* SignIn SignUp */}
        <div>
          <button className="py-1.5 px-3 md:py-2.5  md:px-5 font-semibold cursor-pointer text-[14px]">Sign In</button>
          <button className="py-1.5 px-3 md:py-2.5  md:px-5 bg-[#D91B7E] rounded-3xl text-white font-semibold cursor-pointer  text-[14px]">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
