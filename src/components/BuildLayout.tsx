const BuildLayout = () => {
  return (
    <div className="bg-gray-50 py-2">
      <h1 className="text-neutral-800 pl-5">Tailwind & Grid</h1>
      {/* Even */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 m-4 gap-4 ">
        <div className="min-h-[100px] rounded-lg shadow-md bg-orange-500 p-5">
          Frame 1 - Even
        </div>
        <div className="min-h-[100px] rounded-lg shadow-md bg-teal-500 p-5">
          Frame 2 - Even
        </div>
        <div className="min-h-[100px] rounded-lg shadow-md bg-red-500 p-5">
          Frame 3 - Even
        </div>
        <div className="min-h-[100px] rounded-lg shadow-md bg-purple-500 p-5">
          Frame 4 - Even
        </div>
      </div>
      {/* Uneven */}
      <div className="grid grid-cols-2 sm:grid-cols-12 m-4 gap-4">
        <div className="sm:col-span-2  min-h-[100px] rounded-lg shadow-md bg-orange-500 p-1">
          <p>
            Frame 1 - Uneven <br />
            Desktop 2/12 <br />
            mobile 1/2
          </p>
        </div>
        <div className="sm:col-span-10 min-h-[100px] rounded-lg shadow-md bg-teal-500 p-1">
          <p>
            Frame 2 - Uneven <br />
            Desktop 10/12 <br />
            mobile 1/2
          </p>
        </div>
      </div>
      {/* Tailwind Design */}
      <div className="grid sm:grid-cols-12 m-4 gap-4">
        <div
          className="hidden sm:block sm:col-span-2 min-h-[100px]
        rounded-lg shadow-md bg-orange-500 p-1"
        >
          Frame 1 - hidden on small, Block on above
        </div>
        <div className="sm:col-span-8 min-h-[100px] rounded-lg shadow-md bg-teal-500 p-1">
          Frame 2 - Tailwind
        </div>
        <div
          className="hidden sm:col-span-2 min-h-[100px] sm:block
        rounded-lg shadow-md bg-purple-500 p-1"
        >
          Frame 2 - hidden on small, Block on above
        </div>
      </div>
    </div>
  );
};

export default BuildLayout;
