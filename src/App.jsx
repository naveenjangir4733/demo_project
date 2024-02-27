import "./App.css";
import trophyImage from "../src/assets/1.png";
import criImage from "../src/assets/logo.png";
import awardImage from "../src/assets/2.png";
import machinary from "../src/assets/3.png";

function App() {
  return (
    <>
      {/* <div className="p-2 bg-gradient-to-b from-white to-yellow-100">
        <div className="flex justify-center">
          <img
            src={criImage}
            alt="My Image"
            className="w-36 sm:w-48 md:w-56 lg:w-64 xl:w-72"
          />
        </div>
        <div className="flex  mt-6">
          <div>
            <img src={trophyImage} alt="My Image" className="w-full h-5/6" />
          </div>
          <div>
            <p className="text-sm font-bold">
              <span className="uppercase">
                c.r.i pumps wins the national energy conservation award
              </span>
              2018 for the 4th time.
            </p>

            <div>
              <ul class="list-disc pl-9 mt-3 font-semibold  leading-5">
                <li>
                  C.R.I's energy efficient products all well recognized by
                  various Goverments Institiutions , trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I is highest contributor in the country for the projects
                  of EESL &#40; Energy Efficiency Services Limited &#41; to
                  replace the old inefficient pumps with 5 star rated energy
                  efficient smart pumps with Iot enabled control panel.
                </li>
              </ul>
              <img src={awardImage} alt="My Image" className="w-full h-auto" />
            </div>

            <div>
              Goverment of India awarded the
              <strong>"National Energy conservation award 2018".</strong>
              Mr. selvaraj joint Manging Director of C.R.I Group recevied the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri Raj
              Kumar Singh, Honorable Minister of
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase">
            installed over 10 lakhs star rated pumpsets across the country
            resulting in cumulative savings of more than 9,000 million units of
            power for the nation.
          </p>
          <div className="w-full flex flex-col justify-center items-center">
            <img src={machinary} alt="My Image" className="w-4/5" />
            <h2 className="font-semibold">
              Valves - Pumps - Pipes - Iot Drives and Controllers - Wires &
              Cables - Solar System - Motors
            </h2>
          </div>

          <div className="border border-red-500 my-3"></div>
        </div>
        <div className=" flex flex-col items-center">
          <p className="text-sm font-bold uppercase">
            C.R.I fluid system products cater to diverse segments
          </p>
          <div className="flex flex-col items-center my-4">
            <div class="flex items-center">
              <span class="mx-2 font-semibold uppercase text-sm">
                chemicals & process
              </span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">power</span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">
                water & waste water
              </span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">
                oil & gas
              </span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">Pharma</span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">
                sugar & Distillers
              </span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">
                paper & pulp
              </span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">
                marine & defence
              </span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">
                metal & mining
              </span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">
                food & beverage
              </span>
              <div class="border-l border-solid border-red-600 h-4"></div>
            </div>
            <div class="flex items-center">
              <span class="mx-2 font-semibold uppercase text-sm">
                petrochemical & refinaries
              </span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">solar</span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">building</span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">hvac</span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">
                fire fighting
              </span>
              <div class="border-l border-solid border-red-600 h-4"></div>
              <span class="mx-2 font-semibold uppercase text-sm">
                agriculture & residential
              </span>
            </div>
          </div>
        </div>

        <div className="flex bg-red-600 h-16 justify-around mt-2 py-4 text-white">
          <div className="capitalize">
            toll free <span className="font-bold">1800 8949 443</span>
          </div>
          <div>www.facebook.com/cripumps</div>
          <div>www.crigroups.com</div>
        </div>
      </div> */}
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
            <h2 className="font-semibold">
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
            <div class="flex flex-wrap items-center">
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Chemicals & Process
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Power
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Water & Waste Water
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Oil & Gas
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Pharma
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Sugar & Distillers
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Paper & Pulp
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Marine & Defence
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Metal & Mining
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Food & Beverage
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Petrochemical & Refineries
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Solar
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Building
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  HVAC
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Fire Fighting
                </span>
                <div class="border-l border-solid border-red-600 h-4"></div>
              </div>
              <div class="flex flex-wrap items-center">
                <span class="mx-2 my-1 font-semibold uppercase text-sm">
                  Agriculture & Residential
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row bg-red-600 h-auto sm:h-16 justify-around mt-2 py-4 text-white px-2">
          <div className="capitalize sm:mb-0 mb-2">
            Toll free <span className="font-bold">1800 8949 443</span>
          </div>
          <div className="sm:ml-4">www.facebook.com/cripumps</div>
          <div className="sm:ml-4">www.crigroups.com</div>
        </div>
      </div>
    </>
  );
}

export default App;
