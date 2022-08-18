import React from "react";
import { Link } from "react-router-dom";

export default function DataSiswa() {
    return( 
    <div className="w-[450px] h-80 bg-white flex justify-center items-center rounded-xl">
        <div className="w-96 flex flex-col justify-center items-center">
            <img className='mb-5' src='/LogoCarakan.png' alt='logo' width={80} height={80}/>
            <h1 className="text-center font-bold text-xl">Daftar Siswa</h1>
            <div className='bg-slate-500 w-full'>
                <form className='' action='#' method='POST'>
                    <label className='text-sm'>Bintang</label>
                </form>
            </div>
                <Link to='/Login'>
            <button className=' bg-black text-white rounded-sm px-5 mt-10 flex gap-5 py-2'> <span>Selanjutnya</span>
                  <svg width="40" height="24" viewBox="0 0 66 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M65.0607 13.0607C65.6464 12.4749 65.6464 11.5251 65.0607 10.9393L55.5147 1.3934C54.9289 0.807611 53.9792 0.807611 53.3934 1.3934C52.8076 1.97919 52.8076 2.92893 53.3934 3.51472L61.8787 12L53.3934 20.4853C52.8076 21.0711 52.8076 22.0208 53.3934 22.6066C53.9792 23.1924 54.9289 23.1924 55.5147 22.6066L65.0607 13.0607ZM0 13.5H64V10.5H0V13.5Z" fill="white"/>
                  </svg>
                  </button></Link>
        </div>
    </div>
 )
};