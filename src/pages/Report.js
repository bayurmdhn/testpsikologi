import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";

function Home() {
  const [dataQuestion, setDataQuestion] = useState([]);

  useEffect(() =>{
    axios.get("https://dev-quizbde6t.microgen.id/api/questions?select=questionChoices,question&limit=20&where[categories]=SOAL_A")
    .then(res => res.data)
    .then(data => setDataQuestion(data))
    .catch(er => console.log(er))
  },[])

  return (
    <div className="w-[1050px] h-[600px] bg-white flex justify-center items-center" style={{position:'absolute',left:'90px'}}>
        <div className="w-96 flex flex-col justify-center items-center">
          <h1 className='font-bold text-x1'>Soal 1 No.1-20</h1>
        <div className='flex flex-col items-stretch justify-items-stretch overflow-y-auto h-[575px] gap-10'>
                {dataQuestion?.map((item,i) => {
                    return(
                        <div key={i}>
                            <div className='flex gap-2'>    
                                <span>{i + 1}.</span>
                                <h2 key={item.id}>{item.question}</h2>
                            </div>
                            <div className='flex gap-3'>
                                {item.questionChoices.map(ans => {
                                    return(
                                        <div className='flex gap-1'>
                                            <input name={`choice${i}`} type={"radio"}/>
                                            <span>{ans.answers}</span>
                                            </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='w-[250px] h-[600px] bg-stone-900 flex justify-center' 
              style={{position:'absolute',left:'0px'}}>
                <tr>
                  <h1 className='font-bold text-left text-white'>Nama</h1>
                    <p className="text-left text-white">Bintang Aulia M.</p>
                  <h1 className='font-bold text-left text-white'>Sekolah</h1>
                    <p className="text-left text-white">SMKN 2 Magelang</p>
                  <h1 className='font-bold text-left text-white'>NISN</h1>
                    <p className="text-left text-white">0054777573</p>
                  <h1 className='font-bold text-left text-white'>Email</h1>
                    <p className="text-left text-white">bintangaul27@gmail.com</p>
                </tr>
            </div>
        </div>
    </div>
  )
}


export default Home;