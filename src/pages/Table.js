import React from "react";

export default function DataSiswa(){
  return(
  <div className="w-[1100px] h-[600px] flex flex-col bg-white items-center rounded-xl">
    <h1 className="text-center font-bold text-xl">Daftar Peserta Test</h1>
    <div class="overflow-x-auto shadow-md sm:rounded-lg w-[900px]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Nama
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Sekolah Asal
                    </th>
                    <th scope="col" class="py-3 px-6">
                        No.Telp
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Alamat Email
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Periksa Jawaban
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Bintang Aulia Mahaputra
                    </th>
                    <td class="py-4 px-6">
                        SMKN 2 Magelang
                    </td>
                    <td class="py-4 px-6">
                        088221521252
                    </td>
                    <td class="py-4 px-6">
                        bintangaul27@gmail.com
                    </td>
                    <td class="py-4 px-6">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Periksa</a>
                    </td>
                </tr>
                <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Kevin Christian Hwilianto
                    </th>
                    <td class="py-4 px-6">
                        SMKN 2 Magelang
                    </td>
                    <td class="py-4 px-6">
                        085628432445
                    </td>
                    <td class="py-4 px-6">
                        Adalah_gwehj@gmail.com
                    </td>
                    <td class="py-4 px-6">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Periksa</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
        </div>
        
    );
}