const GridTailwind = () => {
  return (
    <div className="flex min-h-screen w-full items-center bg-slate-800 px-5">
      <div
        className=" relative sm:grid sm:grid-cols-12 grid-rows-10 h-full w-full gap-5
                    xl:m-44 lg:m-11 md:m-16"
      >
        <div className="col-span-4 row-span-8 flex justify-center items-center bg-blue-400 rounded-3xl py-10 my-2">
          Artwork 1
        </div>
        <div className="col-span-8 row-span-8 flex justify-center items-center bg-blue-400 rounded-3xl py-10 my-2">
          Artwork 2
        </div>
        <div className="col-span-4 row-span-4 flex justify-center items-center bg-blue-400 rounded-3xl py-10 my-2">
          Artwork 3
        </div>
        <div className="col-span-4 row-span-4 flex justify-center items-center bg-blue-400 rounded-3xl py-10 my-2">
          Artwork 4
        </div>
        <div className="col-span-4 row-span-10 flex justify-center items-center bg-blue-400 rounded-3xl py-10 my-2">
          Artwork 5
        </div>
        <div className="col-span-8 row-span-6 flex justify-center items-center bg-blue-400 rounded-3xl py-10 my-2">
          Artwork 6
        </div>
        <div className="col-span-6 row-span-5 flex justify-center items-center bg-blue-400 rounded-3xl py-10 my-2">
          Artwork 7
        </div>
        <div className="col-span-6  row-span-5 flex justify-center items-center bg-blue-400 rounded-3xl py-10 my-2">
          Artwork 8
        </div>
      </div>
    </div>
  );
};
export default GridTailwind;
