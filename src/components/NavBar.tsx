import Image from "next/image";
import EurovisionLogo from "../assets/Eurovision_generic_white.png";

export function NavBar() {
  return (
    <div className="flex justify-between items-center p-2 w-full h-full px-2 bg-gradient-to-r from-lava to-lavender">
      <a href="/">
        <Image
          className="mx-10 my-2"
          src={EurovisionLogo}
          width={200}
          height={200}
          alt="The Eurovision Logo"
        />
      </a>
      <ul className="flex justify-between items-center">
        <li className="mr-1">Home</li>
        <li className="mr-1">About</li>
        <li className="mr-1">Contact</li>
      </ul>
    </div>
  );
}
