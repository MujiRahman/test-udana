import { useState } from "react";
import { bgIimage, logo } from "./assets";

function App() {
  const [tampil, setTampil] = useState(false);
  const tampilkan = () => {
    if (tampil === true) {
      setTampil(false);
    } else {
      setTampil(true);
    }
  };
  return (
    <>
      <div>
        <img
          src={bgIimage}
          alt="bgImage"
          className=" h-screen w-screen z-10 rounded-bl-3xl md:rounded-bl-[150px]"
        />
        <div className="w-full bg-yellow-500 md:h-44 -mt-40 rounded-bl-full"></div>
        <div class=" absolute top-2 right-0 left-0 flex justify-around p-2.5 lg:flex ">
          <div className=" flex gap-6 text-sm text-white font-semibold lg:-ml-32 ">
            <img src={logo} alt="logo udana" class=" w-36 h-9" />
            <p className="hidden md:block p-2">WaraLaba</p>
            <p className="hidden md:block p-2">FAQ</p>
            <p className="hidden md:block p-2">Tentang</p>
          </div>
          <div className="hidden md:flex text-sm text-white font-semibold gap-6 lg:-mr-40">
            <p className="p-2 text-center">Masuk</p>
            <p className="p-2 text-center bg-yellow-400 rounded-xl">
              Mulai Daftar
            </p>
          </div>
          <div class="space-y-1 mt-2 md:hidden" onClick={tampilkan}>
            <span class="block w-6 h-0.5 bg-white"></span>
            <span class="block w-6 h-0.5 bg-white"></span>
            <span class="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>
        <div
          className={
            tampil
              ? "w-11/12  absolute top-16 left-3.5 right-3 flex flex-col gap-2 md:hidden "
              : "hidden md:hidden"
          }
        >
          <div className="h-28 text-sm text-white font-semibold bg-gray-500 ">
            <hr className=" bg-yellow-500 -mt-2" />
            <p className="p-4">Masuk</p>
            <p className="p-3 text-center rounded-xl bg-yellow-400 ">
              Mulai Daftar
            </p>
          </div>
          <div className="bg-gray-500 text-sm text-white font-semibold">
            <p className="p-4">WaraLaba</p>
            <p className="p-4">FAQ</p>
            <p className="p-4">Tentang</p>
          </div>
        </div>
        <div className="z-20 p-6 text-white -mt-96 lg:w-1/2 ml-28">
          <h1 className=" text-3xl font-bold -mt-4 mb-6 md:-mt-24">
            Jadilah Investor UMKM & Waralaba
          </h1>
          <p className="leading-7 md:text-2xl my-4">
            Temukan bisnis UMKM & Waralaba yang anda sukai dan mulai menjadi
            investor untuk kemajuan perekonomian bangsa tanpa perlu pusing
            dengan operasional sehari-hari
          </p>
          <button className="p-3 my-6 bg-yellow-500 rounded-xl md:text-2xl mt-4 ">
            Investasi Sekarang -->
          </button>
        </div>
      </div>
      <div className="flex"></div>
    </>
  );
}

export default App;
