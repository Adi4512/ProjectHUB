import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";
import bgImage from "./asset/bg.webp";
import Footer from "./components/Footer";
function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [converted, setConverted] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(converted);
    setConverted(amount);
  };
  const convert = () => {
    setConverted(amount * currencyInfo[to]);
  };

  return (
    <div
      className=" w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full">
        <div
          className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg  p-5 backdrop-blur-sm bg-white/30
        
        
        
        
        "
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                onAmountChange={(amount) => setAmount(amount)}
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-500 rounded-md bg-gray-400 text-white/90 px-2 py-0.5 from-neutral-300 hover:text-white
                hover:bg-gray-500 hover:scale-105 duration-200 transition-transform ease-in-out"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={converted}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                amountDisabled
                selectCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="hover:scale-105 duration-200 transition-transform ease-in-out hover:text-black hover:bg-slate-50 w-full bg-gray-900 text-white py-3 rounded-lg hover:border-2 hover:border-gray-400 transform-gpu will-change-transform"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      <div className="w-full ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
