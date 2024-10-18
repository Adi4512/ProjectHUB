import { useState } from "react";
import InputBox from "./components/InputBox";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="font-semibold text-3xl text-red-500">
        Currency Convertor
      </h1>
      <InputBox />
    </>
  );
}

export default App;
