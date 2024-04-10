import { ActCard } from "@/components/ActCard";
import prisma from "@/db";
import Link from "next/link";

// async function getActs() {
//   const acts = await prisma.act.findMany({
//     where: {
//       yearId: 2023,
//     },
//   });

//   return acts;
// }

export default async function Page() {
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
