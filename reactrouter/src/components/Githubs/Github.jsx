import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/adi4512")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div
      className="mt-10 flex flex-col
    text-3xl text-gray-500 justify-center items-center text-center p-8 bg-gray-100"
    >
      <h1 className="mb-5">Github : {data.name}</h1>
      <h3>{data.bio}</h3>
      <img
        className="
      w-48 h-48 rounded-full mt-5
      "
        src={data.avatar_url}
        alt="bio"
      />
    </div>
  );
}

export default Github;

export const gitHubLoader = async () => {
  const response = await fetch("https://api.github.com/users/adi4512");
  return response.json();
};
