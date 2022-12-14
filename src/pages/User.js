import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from "axios";

export default function User() {
    const [dataUser, setDataUser] = useState([]);
  
    useEffect(() =>{
      axios.get("https://dev-quizbde6t.microgen.id/api/Users?,User&limit=200&where[categories]=USERS")
      .then(res => res.data)
      .then(data => setDataUser(data))
      .catch(er => console.log(er))
    },[])

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
                        
                    </th>
                    <td class="py-4 px-6">
                        
                    </td>
                    <td class="py-4 px-6">
                        
                    </td>
                    <td class="py-4 px-6">
                        
                    </td>
                    <td class="py-4 px-6">
                        
                    </td>
                    <td class="py-4 px-6">
                        <Link to='/DataSiswa'>
                        <a href="#" class="font-bold text-blue-600 dark:text-blue-600 hover:underline">Periksa</a>
                        </Link>
                    </td>
                </tr>
                <tr class="bg-gray-50 border-b dark:bg-white dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap dark:text-black">
                        
                    </th>
                    <td class="py-4 px-6">
                         
                    </td>
                    <td class="py-4 px-6">
                        
                    </td>
                    <td class="py-4 px-6">
                        
                    </td>
                    <td class="py-4 px-6">
                        
                    </td>
                    <td class="py-4 px-6">
                    <Link to='/DataSiswa'>
                        <a href="#" class="font-bold text-blue-600 dark:text-blue-600 hover:underline">Periksa</a>
                    </Link>
                    </td>
                </tr>
            </tbody>
        </table>          
          <div className='flex flex-col overflow-y-auto h-[400px] gap-7'>
                {dataUser?.map((item) => {
                    return(
                            <div className='flex gap-2'>    
                                <h2 key={item.id}>{item.users}</h2>
                            </div>
                    )
                })}
            </div>
    </div>   
    );
}