import React from "react";

export default function DataSiswa(){
  return(
  <div className="w-[450px] h-[450px] bg-white flex justify-center items-center rounded-xl">
    <div className="w-96 flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-xl">Daftar Peserta Test</h1>
      <div className='table-responsive'>
        <table className='Table'>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Asal Sekolah</th>
              <th>Nomor Telepon</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bintang Aulia Mahaputra</td>
              <td>SMK N 2 Magelang</td>
              <td>+62-882-2152-1252</td>
              <td>bintangaul27@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}