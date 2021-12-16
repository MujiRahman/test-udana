import { useState } from "react";
import {
  bgIimage,
  bisnis1,
  bisnis2,
  bisnis3,
  bisnis4,
  bisnis5,
  bisnis6,
  card1,
  card2,
  card3,
  logo,
} from "./assets";

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
          className=" h-[650px] w-screen z-10 rounded-bl-3xl md:rounded-bl-[150px] md:h-[650px]"
        />
        <div className="w-full h-8 rounded-bl-full -mt-6 bg-yellow-500 md:h-44 md:-mt-40 md:rounded-bl-full"></div>
        <div class=" absolute top-2 right-0 left-0 flex justify-between mx-6 p-2.5 lg:flex ">
          <div className=" flex gap-6 text-sm text-white font-semibold ">
            <img src={logo} alt="logo udana" class=" w-36 h-9" />
            <p className="hidden md:block p-2">WaraLaba</p>
            <p className="hidden md:block p-2">FAQ</p>
            <p className="hidden md:block p-2">Tentang</p>
          </div>
          <div className="hidden md:flex text-sm text-white font-semibold gap-6">
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
              ? "w-11/12  absolute z-30 top-16 left-3.5 right-3 flex flex-col gap-2 md:hidden "
              : "hidden md:hidden"
          }
        >
          <div className="h-28 text-sm text-white font-semibold bg-gray-500 ">
            <hr className=" bg-yellow-500 -mt-1" />
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
        <div className="z-20 text-white absolute top-60 w-11/12 mx-5 lg:w-2/5 lg:left-24 lg:pr-16 ">
          <h1 className=" text-3xl font-bold -mt-4 mb-4 text-yellow-400 lg:text-5xl leading-8 ">
            Jadilah Investor UMKM & Waralaba
          </h1>
          <p className="leading-7 text-sm md:text-xl my-2 lg: font-normal lg:tracking-normal ">
            Temukan bisnis UMKM & Waralaba yang anda sukai dan mulai menjadi
            investor untuk kemajuan perekonomian bangsa tanpa perlu pusing
            dengan operasional sehari-hari
          </p>
          <button className="p-3 mt-8 bg-yellow-400 rounded-xl md:text-2xl md:mt-4 ">
            Investasi Sekarang --&gt;
          </button>
        </div>
      </div>
      <div className="mt-40 p-4">
        <div className="md:ml-4 lg:flex lg:justify-start lg:ml-12 lg:mb-6">
          <h1 className="text-5xl font-semibold mb-6 md:pr-60 md: leading-thingh lg:pr-0 lg:w-2/5 ">
            Menjadi Investor UMKM itu gampang
          </h1>
          <p className=" text-slate-400 text-lg tracking-widest  lg:w-2/5">
            Berinvestasi pada UMKM bisa dilakukan oleh siapa saja dan dimana
            saja.
          </p>
        </div>
        <div className="lg:flex justify-around">
          <div className="ml-4 lg:w-1/4">
            <img src={card1} alt="card1" className=" w-full h-auto" />
            <h1 className="text-2xl font-semibold my-2">Pilih UMKM</h1>
            <p className=" text-slate-400 text-lg tracking-widest">
              Temukan usaha yang anda minati pada galeri.
            </p>
          </div>
          <div className="ml-4 lg:w-1/4">
            <img src={card2} alt="card2" className=" w-full h-auto" />
            <h1 className="text-2xl font-semibold my-2">Analisis Bisnis</h1>
            <p className=" text-slate-400 text-lg tracking-widest">
              Lakukan analisa profil bisnis dan pengusaha.
            </p>
          </div>
          <div className="ml-4 lg:w-1/4">
            <img src={card3} alt="card3" className=" w-full h-auto" />
            <h1 className="text-2xl font-semibold my-2">Mulai Berinvestasi</h1>
            <p className=" text-slate-400 text-lg tracking-widest">
              Menjadi investor startup dengan modal minimal 100.000 Rupiah.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="m-auto text-center mt-44 mb-12">
          <p className="text-5xl font-semibold mb-7">Siap Memulai Berbisnis?</p>
          <p className="text-slate-400 text-lg">
            Tentukan bisnis waralaba pilihan Anda sekarang
          </p>
        </div>
        <div className="flex gap-6 flex-wrap p-8 md:w-11/12 md:border-t-2 lg:p-8 m-auto lg:gap-14 lg:justify-center">
          <div className="w-full text-center space-y-8 rounded-lg border-2 shadow-1xl lg:w-80 ">
            <p className=" font-semibold mt-2">F&B</p>
            <img src={bisnis1} alt="card" className="w-full h-48" />
            <p className="font-semibold text-yellow-400 text-lg">
              Rindu Candu Milk Bar
            </p>
            <div className="p-2 font-semibold bg-gray-100">LIHAT DETAIL</div>
          </div>
          <div className="w-full text-center space-y-8 rounded-lg border-2 shadow-1xl lg:w-80 ">
            <p className=" font-semibold mt-2">F&B</p>
            <img src={bisnis2} alt="card" className="w-full h-48" />
            <p className="font-semibold text-yellow-400 text-lg">Mr. Big</p>
            <div className="p-2 font-semibold bg-gray-100">LIHAT DETAIL</div>
          </div>
          <div className="w-full text-center space-y-8 rounded-lg border-2 shadow-1xl lg:w-80 ">
            <p className=" font-semibold mt-2">F&B</p>
            <img src={bisnis3} alt="card" className="w-full h-48" />
            <p className="font-semibold text-yellow-400 text-lg">Nasi Balap</p>
            <div className="p-2 font-semibold bg-gray-100">LIHAT DETAIL</div>
          </div>
          <div className="w-full text-center space-y-8 rounded-lg border-2 shadow-1xl lg:w-80 ">
            <p className=" font-semibold mt-2">F&B</p>
            <img src={bisnis4} alt="card" className="w-full h-48" />
            <p className="font-semibold text-yellow-400 text-lg">
              Nyoklat Teen
            </p>
            <div className="p-2 font-semibold bg-gray-100">LIHAT DETAIL</div>
          </div>
          <div className="w-full text-center space-y-8 rounded-lg border-2 shadow-1xl lg:w-80 ">
            <p className=" font-semibold mt-2">F&B</p>
            <img src={bisnis5} alt="card" className="w-full h-48" />
            <p className="font-semibold text-yellow-400 text-lg">Haba Haus</p>
            <div className="p-2 font-semibold bg-gray-100">LIHAT DETAIL</div>
          </div>
          <div className="w-full text-center space-y-8 rounded-lg border-2 shadow-1xl lg:w-80 ">
            <p className=" font-semibold mt-2">F&B</p>
            <img src={bisnis6} alt="card" className="w-full h-48" />
            <p className="font-semibold text-yellow-400 text-lg">Hello Sugar</p>
            <div className="p-2 font-semibold bg-gray-100">LIHAT DETAIL</div>
          </div>
        </div>
        <p className=" underline underline-offset-4 decoration-2 my-6 text-yellow-400 font-semibold text-center">
          Lihat Semua
        </p>
      </div>
    </>
  );
}

export default App;
