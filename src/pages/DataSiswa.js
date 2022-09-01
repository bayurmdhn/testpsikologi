import React from 'react';

function Home() {
  return (
    <div className="w-[450px] h-[450px] bg-white flex justify-center items-center rounded-xl">
        <div className="w-96 flex flex-col justify-center items-center">
            <img className='mb-5' src='/LogoCarakan.png' alt='logo' width={80} height={80}/>
            <h1 className="text-center font-bold text-xl">Data Siswa Disini</h1>
        </div>
    </div>
  )
}


export default Home;