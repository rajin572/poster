import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="mt-28">
      <footer className="border-t-2 border-[#0085B8]">
        <div className="w-[95%] md:w-[90%] mx-auto pt-20 ">
          <div
            className="flex justify-between items-center flex-col md:flex-row "
            id="footer"
          >
            <div className="max-w-lg">
              <div className="flex items-center">
                <img src={logo} className="w-12 h-6" alt="t" />
                <h1 className="text-[#01ACE4] text-3xl font-semibold">
                  Poster
                </h1>
              </div>

              <p className="w-11/12 leading-loose text-slate-500 text-start mt-4">
                “Every catastrophe begins with a little problem that doesn’t get
                fixed.” So says Pauline Green, president of the United States,
                in Follett’s nerve-racking drama of international tension. A
                shrinking oasis in the Sahara Desert; a stolen US Army drone;
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3 text-start">
              <p className="text-xl font-semibold pb-7 pt-10 md:pt-2">
                Contact Us
              </p>
              <ul className="space-y-2">
                <li className="leading-relaxed w-10/12">
                  Bir Uttam AK Khandakor Road, Mohakhali Dhaka-1212, Bangladesh
                </li>
                <li>Phone: (123) 123-456</li>
                <li>
                  E-Mail:
                  <a href="" className="text-[#0085B8] font-medium">
                    {" "}
                    office@poster.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="w-10/12 mx-auto mt-20" />
          <div className="flex justify-center py-8 text-lg text-slate-400">
            © Copyright 2023 by Poster
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
