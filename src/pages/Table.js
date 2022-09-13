import React from "react";
import { Link } from "react-router-dom";

export default function Table(){
  return(
    <div class="overflow-x-auto shadow-md w-[1000px]">
        <h1 className="text-center text-white font-bold mb-3 text-xl">Daftar Peserta Test</h1>
        <table class="w-full text-sm text-left text-white dark:text-black">
            <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-black dark:text-white">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        NISN
                    </th>
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
                        Detail
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-white dark:border-white">
                    <th scope="row" class="py-4 px-6 font-medium text-slate-700 whitespace-nowrap dark:text-black">
                        0054777573
                    </th>
                    <td class="py-4 px-6">
                        Bintang Aulia Mahaputra
                    </td>
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
                        <Link to='/Report'>
                        <a href="#" class="font-bold text-blue-600 dark:text-blue-600 hover:underline">Periksa</a>
                        </Link>
                    </td>
                </tr>
                <tr class="bg-gray-50 border-b dark:bg-white dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap dark:text-black">
                        0054238276
                    </th>
                    <td class="py-4 px-6">
                        Kevin Musliman 
                    </td>
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
                    <Link to='/Report'>
                        <a href="#" class="font-bold text-blue-600 dark:text-blue-600 hover:underline">Periksa</a>
                    </Link>
                    </td>
                </tr>
                <tr class="bg-gray-50 border-b dark:bg-white dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap dark:text-black">
                        0028276729
                    </th>
                    <td class="py-4 px-6">
                        Havid Setyanata
                    </td>
                    <td class="py-4 px-6">
                        SMKN 2 Magelang
                    </td>
                    <td class="py-4 px-6">
                        08555607080
                    </td>
                    <td class="py-4 px-6">
                        Terkadang@gmail.com
                    </td>
                    <td class="py-4 px-6">
                    <Link to='/Report'>
                        <a href="#" class="font-bold text-blue-600 dark:text-blue-600 hover:underline">Periksa</a>
                    </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>   
    );
}