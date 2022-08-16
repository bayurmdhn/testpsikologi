import React from 'react';
import { Link } from 'react-router-dom'

export default function Question() {
  return (
        <div>
          <div className="w-[800px] h-80 bg-white flex justify-center items-center rounded-xl">
          <div className="w-96 flex flex-col justify-center items-center">
          <p className="text-center">Soal Ketik Disini</p>

            <Link to='/Another Question'>
              </Link>
          </div>
          </div>
    </div>      
    )
  };