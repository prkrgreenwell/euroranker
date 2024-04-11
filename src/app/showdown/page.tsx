"use client";

import { useEffect, useState } from "react";

export default async function Page() {
  const [acts, setActs] = useState([]);

  useEffect(() => {
    async function fetchActs() {
      try {
        const response = await fetch("@/api/acts?year=2024/routes.ts");
        if (response.ok) {
          const data = await response.json();
          setActs(data.data);
          console.log(data.data);
        } else {
          console.error("Failed to fetch acts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching acts:", error);
      }
    }

    fetchActs();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-full">
      <div className="flex flex-col justify-center items-center w-full md:w-3/4">
        <h1 className="text-4xl font-bold mt-5">Choose Your Favorite</h1>
        <div className="w-3/4 h-16 bg-lavender rounded-lg shadow-lg flex justify-center items-center m-7">
          <p className="text-white  text-lg">Progress Bar</p>
        </div>
      </div>
      <div className="flex justify-between w-full md:w-3/4 h-dvh m-4 gap-2">
        <div className="w-1/2 h-1/2 bg-lava rounded-lg shadow-lg flex justify-center items-center mx-4">
          <p className="text-white  text-lg">Box 1</p>
        </div>
        <div className="w-1/2 h-1/2 bg-fuchsia rounded-lg shadow-lg flex justify-center items-center mx-4">
          <p className="text-white text-lg">Box 2</p>
        </div>
      </div>
    </div>
  );
}
