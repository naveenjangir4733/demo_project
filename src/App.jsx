import "./App.css";
import trophyImage from "../src/assets/1.png";
import criImage from "../src/assets/logo.png";
import awardImage from "../src/assets/2.png";
import machinary from "../src/assets/3.png";

function App() {
  return (
    <>
      <div className="p-2 bg-gradient-to-b from-white to-yellow-100">
        <div className="flex justify-center">
          <img
            src={criImage}
            alt="My Image"
            className="w-full max-w-72 h-auto"
          />
        </div>
        <div className="flex flex-col mt-6 sm:flex-row">
          <div className="sm:w-1/2 ">
            <img
              src={trophyImage}
              alt="My Image"
              className="w-full h-auto mb-4 sm:mb-0 sm:w-10/12"
            />
          </div>
          <div className="sm:w-3/4">
            <p className="text-sm font-bold">
              <span className="uppercase">
                c.r.i pumps wins the national energy conservation award 2018 for
                the 4th time.
              </span>
            </p>
            <ul className="list-disc pl-9 mt-3 font-semibold leading-5">
              <li>
                C.R.I's energy efficient products all well recognized by various
                Government Institutions, trustworthy products for various
                projects across the globe to save energy.
              </li>
              <li>
                C.R.I is the highest contributor in the country for the projects
                of EESL (Energy Efficiency Services Limited) to replace the old
                inefficient pumps with 5 star rated energy efficient smart pumps
                with IoT enabled control panel.
              </li>
            </ul>
            <img
              src={awardImage}
              alt="My Image"
              className="w-full h-auto mt-4"
            />
            <p>
              Government of India awarded the
              <strong>"National Energy conservation award 2018".</strong> Mr.
              Selvaraj Joint Managing Director of C.R.I Group received the award
              from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri Raj Kumar
              Singh, Honorable Minister of
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase">
            Installed over 10 lakhs star rated pumpsets across the country
            resulting in cumulative savings of more than 9,000 million units of
            power for the nation.
          </p>
          <div className="w-full flex flex-col justify-center items-center">
            <img src={machinary} alt="My Image" className="w-4/5" />
            <h2 className="font-semibold ">
              Valves - Pumps - Pipes - Iot Drives and Controllers - Wires &
              Cables - Solar System - Motors
            </h2>
          </div>
          <div className="border border-red-500 my-3"></div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm font-bold uppercase">
            C.R.I fluid system products cater to diverse segments
          </p>
          <div className="flex flex-col items-center my-4">
            <div className="flex flex-wrap items-center">
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  Chemicals & Process
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  power
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  water & waste water
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  oil & gas{" "}
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  Pharma
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  sugars & Distillers
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  marine & defence
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  metal & mining
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  food & beverage
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  petrochemical & refinaries
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold  uppercase text-sm font-mono">
                  solar
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  building
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  hvac
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  fire fighting
                </span>
                <div className="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mx-2 my-1 font-semibold font-mono uppercase text-sm">
                  agricultural & residential
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row bg-red-600 h-auto sm:h-16 justify-around mt-2 py-4 text-white px-2">
          <div className="capitalize sm:mb-0 mb-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <div className="pt-1">
              Toll free <span className="font-bold">1800 8949 443</span>
            </div>
          </div>
          <div className="sm:ml-4 flex my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              className="fill-white w-7 h-7"
            >
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
            <div className="pt-1">www.facebook.com/cripumps</div>
          </div>
          <div className="sm:ml-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <div className="pt-1">www.crigroups.com</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
