import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Biodata() {
  const [dataUser, setData] = useState([]);

  useEffect(() =>{
    axios.post("https://dev-quizbde6t.microgen.id/api/users?select",{
    firstName: '',
    school:'',
    nisn:'',
    email:''
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })},[])

  return (
    <div className="w-[450px] h-[400px] bg-white flex justify-center items-center rounded-xl">
          <div className="w-96 flex flex-col justify-center items-center">
            <h1 className="text-center font-bold text-xl">Silahkan isi Biodata Anda</h1>
            <div className='bg-white text-black w-full'>
              <form className='' action='#' method='POST'>
                <label className='text-sm'>Nama Lengkap</label>
                <input 
                    id="nama-lengkap"
                   name="nama-lengkap"
                    type="nama-lengkap"
                 autoComplete="nama-lengkap"
                    required
                    className="appearance-none rounded-none relative block
                    w-full px-2 py-1 border border-black rounded-t-md rounded-b-md
                   placeholder-gray-700 text-gray-900
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 mt-1 sm:text-sm"
                    placeholder="Ketik Nama Disini..." />
                  <label className='text-sm'>Sekolah Asal</label>
                  <input 
                    id="sekolah-asal"
                    name="sekolah-asal"
                    type="sekolah-asal"
                    autoComplete="sekolah-asal"
                    required
                    className="appearance-none rounded-none relative block
                    w-full px-2 py-1 border border-black rounded-t-md rounded-b-md
                    placeholder-gray-700 text-gray-900
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 mt-1 sm:text-sm"
                    placeholder="Ketik Sekolah Disini..." />
                  <label className='text-sm'>NISN</label>
                  <input 
                    id="nisn"
                    name="nisn"
                    type="nisn"
                    autoComplete="nisn"
                    required
                    className="appearance-none rounded-none relative block
                    w-full px-2 py-1 border border-black rounded-t-md rounded-b-md
                    placeholder-gray-700 text-gray-900
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 mt-1 sm:text-sm"
                    placeholder="Ketik NISN Disini..." />
                    <label className='text-sm'>Alamat Email</label>
                  <input 
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block
                    w-full px-2 py-1 border border-black rounded-t-md rounded-b-md
                    placeholder-gray-700 text-gray-900
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 mt-1 sm:text-sm"
                    placeholder="Ketik Email Disini..." />
              </form>
            </div>
            
            <Link to='/Tutorial_1'>
            <button className=' bg-black text-white rounded-sm px-5 mt-10 flex gap-5 py-2'> <span>Mulai</span>
                  <svg width="40" height="24" viewBox="0 0 66 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M65.0607 13.0607C65.6464 12.4749 65.6464 11.5251 65.0607 10.9393L55.5147 1.3934C54.9289 0.807611 53.9792 0.807611 53.3934 1.3934C52.8076 1.97919 52.8076 2.92893 53.3934 3.51472L61.8787 12L53.3934 20.4853C52.8076 21.0711 52.8076 22.0208 53.3934 22.6066C53.9792 23.1924 54.9289 23.1924 55.5147 22.6066L65.0607 13.0607ZM0 13.5H64V10.5H0V13.5Z" fill="white"/>
                  </svg>
                  </button></Link>
          </div>
        </div>
  )
};