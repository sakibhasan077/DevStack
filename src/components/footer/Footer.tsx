import Logo from "../../assets/images/logo-text.png";
const Footer = () => {
  return (
    <footer className="container mx-auto mt-14 md:mt-22">
      <div className="pt-8 md:pt-16 pb-3 md:pb-14 w-full ">
        <div className="grid grid-cols-5 gap-10 w-full justify-items-center">
          {/* FirstCol  */}
          <div className="col-span-5  md:col-span-2 w-full grid justify-items-center md:justify-items-start text-center md:text-start">
            <div>
              <img className="mb-3" src={Logo} alt="Footer Logo" />
            </div>
            <p className="text-[14px] text-[#64748B] mb-3 px-25 md:px-0 md:pr-20">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <ul className="flex gap-4 font-semibold text-sm text-[#475569] pt-3">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
            </ul>
          </div>
          {/* SecondCol  */}
          <div className="hidden md:col-span-1 md:block">
            <h3 className="text-[#0F172A] text-[14px] mb-4 font-bold uppercase">
              Product
            </h3>
            <ul>
              <li className="text-sm text-[#64748B] mb-2.5">
                <a href="#">Home</a>
              </li>
              <li className="text-sm text-[#64748B] mb-2.5">
                <a href="#">Technology</a>
              </li>
              <li className="text-sm text-[#64748B] mb-2.5">
                <a href="#">Product</a>
              </li>
            </ul>
          </div>
          {/* ThirdCol  */}
          <div className="hidden md:col-span-1  md:block">
            <h3 className="text-[#0F172A] text-[14px] mb-4 font-bold uppercase">
              Company
            </h3>
            <ul>
              <li className="text-sm text-[#64748B] mb-2.5">
                <a href="#">About</a>
              </li>
              <li className="text-sm text-[#64748B] mb-2.5">
                <a href="#">Contact</a>
              </li>
              <li className="text-sm text-[#64748B] mb-2.5">
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          {/* ForthCol  */}
          <div className="hidden md:col-span-1  md:block">
            <h3 className="text-[#0F172A] text-[14px] mb-4 font-bold uppercase">
              Legal
            </h3>
            <ul>
              <li className="text-sm text-[#64748B] mb-2.5">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="text-sm text-[#64748B] mb-2.5">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* CopyRight */}
      <hr className="text-gray-200 mx-6 md:mx-auto" />
      <div className="mt-4 md:mt-8 text-[#94A3B8] text-sm mb-12 flex justify-between mx-6 md:mx-0">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <p className="flex gap-6">
          <span>
            <a href="#">Privacy</a>
          </span>
          <span>
            <a href="#">Terms</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
