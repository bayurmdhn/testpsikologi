import React from 'react'

export default function LastPage() {
  return (
    <div className="w-[450px] h-80 bg-white flex justify-center items-center rounded-xl">
        <div className="w-96 flex flex-col justify-center items-center">
        <img className='mb-5' src='/LogoCarakan.png' alt='logo' width={80} height={80}/>
            <h1 className="text-center font-bold text-xl">Jawaban Anda Telah Direkam</h1>
            <p className="text-center">Terimakasih sudah mengikuti test ini sampai jumpa di lain waktu</p>
        </div>
    </div>
  )
}
