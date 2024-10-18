import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div
      className="mt-10 flex flex-col
  text-3xl text-gray-500 justify-center items-center text-center p-8 bg-gray-100"
    >
      User ➡️ {id}
    </div>
  );
}

export default User;
