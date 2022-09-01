import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import axios from "axios";

export default function Question() {
  const Ref = useRef(null);
  
  // The state for our timer
  const [timer, setTimer] = useState('00:00:00');


  const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      return {
          total, hours, minutes, seconds
      };
  }


  const startTimer = (e) => {
      let { total, hours, minutes, seconds } 
                  = getTimeRemaining(e);
      if (total >= 0) {

          // update the timer
          // check if less than 10 then we need to 
          // add '0' at the beginning of the variable
          setTimer(
              (hours > 0 ? hours : '0' + hours) + ':' +
              (minutes > 3 ? minutes : '0' + minutes) + ':'
              + (seconds > 0 ? seconds : '0' + seconds)
          )
      }
  }


  const clearTimer = (e) => {

      // If you adjust it you should also need to
      // adjust the Endtime formula we are about
      // to code next    
      setTimer('00:00:10');

      // If you try to remove this line the 
      // updating of timer Variable will be
      // after 1000ms or 1sec
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
          startTimer(e);
      }, 1000)
      Ref.current = id;
  }

  const getDeadTime = () => {
      let deadline = new Date();

      // This is where you need to adjust if 
      // you entend to add more time
      deadline.setSeconds(deadline.getSeconds() + 10);
      return deadline;
  }

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
      clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
      clearTimer(getDeadTime());
  }

  const [dataQuestion, setDataQuestion] = useState([]);

  useEffect(() =>{
    axios.get("https://dev-quizbde6t.microgen.id/api/questions?select=questionChoices,question&limit=20")
    .then(res => res.data)
    .then(data => setDataQuestion(data))
    .catch(er => console.log(er))
  },[])


  return (
        <div>
          <div className="w-[1050px] h-[600px] bg-white flex justify-center items-center rounded-xl">
          <div className=" w-11/12 flex flex-col justify-center items-center">
          <h1 className="text-center font-bold text-xl">Soal B</h1>

            <div className='flex flex-col overflow-y-auto h-[400px] gap-7'>
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

            <Link to='/Question_C'>
              <button className=' bg-black text-white rounded-sm px-5 mt-10 flex gap-5 py-2'> <span>Selanjutnya</span>
                  <svg width="40" height="24" viewBox="0 0 66 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M65.0607 13.0607C65.6464 12.4749 65.6464 11.5251 65.0607 10.9393L55.5147 1.3934C54.9289 0.807611 53.9792 0.807611 53.3934 1.3934C52.8076 1.97919 52.8076 2.92893 53.3934 3.51472L61.8787 12L53.3934 20.4853C52.8076 21.0711 52.8076 22.0208 53.3934 22.6066C53.9792 23.1924 54.9289 23.1924 55.5147 22.6066L65.0607 13.0607ZM0 13.5H64V10.5H0V13.5Z" fill="white"/>
                  </svg>
              </button>
            </Link>
          </div>
          </div>
        </div>      
    )
  };