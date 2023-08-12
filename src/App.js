import { useState } from "react";
import "./App.css";
import { img1, img2, img3, img4, img5, img6 } from "./assets/index";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col mt-10 md:flex-row md:h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-12 md:w-1/3 md:ml-80 lg:ml-40">
        <h1 className="text-3xl font-semibold mb-4 text-[#7E7E7E]">
          52 week levels
        </h1>
        <div className="min-w-[377px] min-h-[493px] bg-[#FFFFFF] rounded-2xl shadow-2xl flex flex-col items-center justify-center">
          <button
            className={`bg-[#0285FE] rounded-full p-0 w-[101px] h-[45px] transition-transform duration-300 flex flex-row ${
              isOn ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={toggleButton}
          >
            <span
              className={` w-[39px] h-[39px] rounded-full ml-1 mt-[3px] bg-[#FFFFFF] shadow ${
                isOn ? "translate-x-12" : ""
              }`}
            ></span>
            <span className="text-white text-center font-semibold ml-1 mt-2">
              High
            </span>
          </button>
          <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-row mb-6 gap-4">
            <img src={img1} alt="img1" />
            <div className="text-[#000000]">
              <h1 className="text-[25px] font-semibold mb-1">Nifty 50</h1>
              <h2 className="text-[16px] font-medium mb-1">
                18200.84 <span className="text-[10px]">INR</span>
              </h2>
            </div>
            <h3 className="text-[#04C22E] mt-5 mr-4 text-[16px]">+0.23%</h3>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-row mb-6 gap-4">
            <img src={img2} alt="img2" />
            <div className="text-[#000000]">
              <h1 className="text-[25px] font-semibold mb-1">SENSEX</h1>
              <h2 className="text-[16px] font-medium mb-1">
                16900.43 <span className="text-[10px]">INR</span>
              </h2>
            </div>
            <h3 className="text-[#FF0707] mt-5 mr-4 text-[16px]">-0.34%</h3>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-row mb-6 gap-4">
            <img src={img3} alt="img3" />
            <div className="text-[#000000]">
              <h1 className="text-[25px] font-semibold mb-1">SENSEX</h1>
              <h2 className="text-[16px] font-medium mb-1">
                18510.43 <span className="text-[10px]">INR</span>
              </h2>
            </div>
            <h3 className="text-[#04C22E] mt-5 mr-4 text-[16px]">+0.84%</h3>
          </div>
          <button className="text-[#0184FF] text-[20px] hover:underline mb-0">
            See all
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-12 md:w-1/3">
        <h1 className="text-3xl font-semibold mb-4 text-[#7E7E7E]">Index</h1>
        <div className="min-w-[377px] min-h-[493px] bg-[#FFFFFF] rounded-2xl shadow-2xl flex flex-col items-center justify-center">
          <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-row mb-6 gap-4">
            <img src={img4} alt="img4" />
            <div className="text-[#000000]">
              <h1 className="text-[16px] font-semibold mb-1">
                Reliance Industries Ltd
              </h1>
              <div className="flex flex-row">
                {" "}
                <h2 className="text-[16px] font-medium mb-1">
                  2482.00 <span className="text-[10px]">INR</span>
                  <span className="ml-2 text-[#BCBCBC]">|</span>
                </h2>
                <h3 className="ml-2 text-[16px]">
                  0.71% <span className="text-[#FF0707]">▼</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-row mb-6 gap-4">
            <img src={img5} alt="img5" />
            <div className="text-[#000000]">
              <h1 className="text-[18px] font-semibold mb-1">
                Tata Motors Ltd
              </h1>
              <div className="flex flex-row">
                {" "}
                <h2 className="text-[16px] font-medium mb-1">
                  2482.00 <span className="text-[10px]">INR</span>
                  <span className="ml-2 text-[#BCBCBC]">|</span>
                </h2>
                <h3 className="ml-2 text-[16px]">
                  0.71% <span className="text-[#FF0707]">▼</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-row mb-6 gap-4">
            <img src={img6} alt="img6" />
            <div className="text-[#000000]">
              <h1 className="text-[18px] font-semibold mb-1">MRF Ltd</h1>
              <div className="flex flex-row">
                {" "}
                <h2 className="text-[16px] font-medium mb-1">
                  2482.00 <span className="text-[10px]">INR</span>
                  <span className="ml-2 text-[#BCBCBC]">|</span>
                </h2>
                <h3 className="ml-2 text-[16px]">
                  0.71% <span className="text-[#FF0707]">▼</span>
                </h3>
              </div>
            </div>
          </div>
          <button className="text-[#0184FF] text-[20px] hover:underline mb-0">
            See all
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-12 md:w-1/3 md:mr-80 lg:mr-40">
        <h1 className="text-3xl font-semibold mb-4 text-[#7E7E7E]">
          Trending Today
        </h1>
        <div className="min-w-[377px] min-h-[493px] bg-[#FFFFFF] rounded-2xl shadow-2xl flex flex-col items-center justify-center">
          <button
            className={`bg-[#0285FE] rounded-full p-0 w-[118px] h-[45px] transition-transform duration-300 flex flex-row ${
              isOn ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={toggleButton}
          >
            <span
              className={` w-[39px] h-[39px] rounded-full ml-1 mt-[3px] bg-[#FFFFFF] shadow ${
                isOn ? "translate-x-16" : ""
              }`}
            ></span>
            <span className="text-white text-center font-semibold ml-3 flex flex-col items-center">
              Top
              <span className="mt-[-8px]">Losers</span>
            </span>
          </button>
          <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-row mb-6 gap-4">
            <img src={img4} alt="img4" />
            <div className="text-[#000000]">
              <h1 className="text-[16px] font-semibold mb-1">
                Reliance Industries Ltd
              </h1>
              <div className="flex flex-row">
                {" "}
                <h2 className="text-[16px] font-medium mb-1">
                  2482.00 <span className="text-[10px]">INR</span>
                  <span className="ml-2 text-[#BCBCBC]">|</span>
                </h2>
                <h3 className="ml-2 text-[16px]">
                  0.71% <span className="text-[#FF0707]">▼</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-row mb-6 gap-4">
            <img src={img5} alt="img5" />
            <div className="text-[#000000]">
              <h1 className="text-[18px] font-semibold mb-1">
                Tata Motors Ltd
              </h1>
              <div className="flex flex-row">
                {" "}
                <h2 className="text-[16px] font-medium mb-1">
                  2482.00 <span className="text-[10px]">INR</span>
                  <span className="ml-2 text-[#BCBCBC]">|</span>
                </h2>
                <h3 className="ml-2 text-[16px]">
                  0.71% <span className="text-[#FF0707]">▼</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl flex flex-row mb-6 gap-4">
            <img src={img6} alt="img6" />
            <div className="text-[#000000]">
              <h1 className="text-[18px] font-semibold mb-1">MRF Ltd</h1>
              <div className="flex flex-row">
                {" "}
                <h2 className="text-[16px] font-medium mb-1">
                  2482.00 <span className="text-[10px]">INR</span>
                  <span className="ml-2 text-[#BCBCBC]">|</span>
                </h2>
                <h3 className="ml-2 text-[16px]">
                  0.71% <span className="text-[#FF0707]">▼</span>
                </h3>
              </div>
            </div>
          </div>
          <button className="text-[#0184FF] text-[20px] hover:underline mb-0">
            See all
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
