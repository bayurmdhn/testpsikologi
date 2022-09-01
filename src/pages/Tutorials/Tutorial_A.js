import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios";

export default function Tutorial() {
  const [dataTutorial, setDataTutorial] = useState([]);

  useEffect(() =>{
    axios.get("https://dev-quizbde6t.microgen.id/api/tutorials?,tutorial&limit=20")
    .then(res => res.data)
    .then(data => setDataTutorial(data))
    .catch(er => console.log(er))
  },[])

  return (
        <div>
          <div className="w-[1050px] h-[600px] bg-white flex justify-center items-center rounded-xl">
          <div className=" w-11/12 flex flex-col justify-center items-center">
          <h1 className="text-center font-bold text-xl">Tutorial Soal A</h1>

            <div className='flex flex-col overflow-y-auto h-[400px] gap-7'>
                {dataTutorial?.map((item,i) => {
                    return(
                        <div key={i}>
                            <div className='flex gap-2'>    
                                <span>{i + 1}.</span>
                                <h2 key={item.id}>{item.tutorial}</h2>
                            </div>
                            </div>
                    )
                })}
            </div>

            <Link to='/Question_A'>
              <button className=' bg-black text-white rounded-sm px-5 mt-10 flex gap-5 py-2'> <span>Selanjutnya</span>
                  <svg width="40" height="24" viewBox="0 0 66 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M65.0607 13.0607C65.6464 12.4749 65.6464 11.5251 65.0607 10.9393L55.5147 1.3934C54.9289 0.807611 53.9792 0.807611 53.3934 1.3934C52.8076 1.97919 52.8076 2.92893 53.3934 3.51472L61.8787 12L53.3934 20.4853C52.8076 21.0711 52.8076 22.0208 53.3934 22.6066C53.9792 23.1924 54.9289 23.1924 55.5147 22.6066L65.0607 13.0607ZM0 13.5H64V10.5H0V13.5Z" fill="white"/>
                  </svg>
              </button>
            </Link>
          </div>
          </div>   
      </div>  
    );
  }