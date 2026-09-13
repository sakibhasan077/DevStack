import Logo from "../../assets/images/logo-text.png";
const Footer = () => {
  return (
    <footer className="container mx-auto mt-22">
      <div className="pt-16 pb-14">
        <div className="grid grid-cols-5 gap-10">
          {/* FirstCol  */}
          <div className="col-span-2">
            <img className="mb-3" src={Logo} alt="Footer Logo" />
            <p className="text-[14px] text-[#64748B] mb-3 pr-20">
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
          <div className="col-span-1">
            <h3 className="text-[#0F172A] text-[14px] mb-4 font-bold uppercase">Product</h3>
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
          <div className="col-span-1">
            <h3 className="text-[#0F172A] text-[14px] mb-4 font-bold uppercase">Company</h3>
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
          <div className="col-span-1">
            <h3 className="text-[#0F172A] text-[14px] mb-4 font-bold uppercase">Legal</h3>
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
        <div className="mt-8 text-[#94A3B8] text-sm mb-12">
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
