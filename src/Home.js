import Popular from "./HomeComponents/Popular";
import NewReleases from "./HomeComponents/NewReleases";
import TopMovies from "./HomeComponents/TopMovies";
import TopSeries from "./HomeComponents/TopSeries";
import logo from "./images/Netflix_Logo.png";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef(null);

  const handleClick = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-black text-teal-50 space-y-6">
      <nav className="flex text-white justify-between items-center py-2 sm:py-4 px-3 sm:px-10 flex-wrap">
        <ul className="flex justify-center items-center sm:space-x-6 sm:text-2xl flex-wrap">
          <img src={logo} alt="Netflix Logo" className="w-28 sm:w-44 brightness-200 contrast-200 saturate-200" />
          <li className="hidden sm:block hover:text-slate-300">Popular</li>
          <li className="hidden sm:block hover:text-slate-300">New Releases</li>
          <li className="hidden sm:block hover:text-slate-300">Top Movies</li>
          <li className="hidden sm:block hover:text-slate-300" onClick={handleClick}>Top Series</li>
          <li className="hidden sm:block hover:text-slate-300">Portfolio</li>
        </ul>
        <ul className="space-x-3 sm:space-x-7">
          <lord-icon
            src="https://cdn.lordicon.com/qhgmphtg.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff"
            stroke="100"
          ></lord-icon>
          <lord-icon
            src="https://cdn.lordicon.com/rjzlnunf.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff"
            stroke="100"
          ></lord-icon>
          <lord-icon
            stroke="100"
            src="https://cdn.lordicon.com/zniqnylq.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff"
          ></lord-icon>
          <lord-icon
            stroke="100"
            src="https://cdn.lordicon.com/dxjqoygy.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff"
          ></lord-icon>
        </ul>
      </nav>
      <Popular/>
        <NewReleases/>
        <TopMovies/>
        <TopSeries ref={targetRef} id="target-element"/>
    </div>
  );
}
