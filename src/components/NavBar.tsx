export function NavBar() {
  return (
    <div className="flex justify-between items-center p-2 w-full h-full px-2 bg-black">
      <h1 className="font-bold text-xl">Euroranker</h1>
      <ul className="flex justify-between items-center">
        <li className="mr-1">Home</li>
        <li className="mr-1">About</li>
        <li className="mr-1">Contact</li>
      </ul>
    </div>
  );
}
