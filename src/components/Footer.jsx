import Menu from "./Menu";
const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap w-full pt-16 max-md:flex-col max-md:items-center ">
        <div className="flex flex-col w-1/3 gap-6 border-2 items-center justify-center max-md:w-full max-md:p-8  max-md:border-none ">
          <ul>
            <li className="flex items-center gap-1  pb-5">New York NY 100211</li>
            <li className="flex items-center gap-1  pb-5">📞 +01-32466-788</li>
            <li className="flex items-center gap-1  pb-5">📩 mytinerary@gamil.com</li>
          </ul>
        </div>

        <div className="flex flex-col w-1/3 gap-6 border-2 items-center justify-center max-md:w-full max-md:p-8 ">
          <a className="flex items-center gap-1 underline" href="https://www.facebook.com/" target="_blank"><img className="w-4 h-4" src="/facebook.png" alt="facebook logo" /> Facebook</a>
          <a className="flex items-center gap-1 underline" href="https://www.instagram.com/" target="_blank"><img className="w-4 h-4" src="/instagram.png" alt="instagram logo" />Instagram</a>
          <a className="flex items-center gap-1 underline" href="https://twitter.com/" target="_blank"><img className="w-4 h-4" src="/gorjeo.png" alt="x logo" />Twitter</a>
        </div>

        <div className="flex flex-col w-1/3 border-2 items-center max-md:w-full max-md:border-none">
          <Menu props="flex-col" />
        </div>
      </footer>
    </>
  );
};

export default Footer;