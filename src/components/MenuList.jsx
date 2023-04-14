import Adam from '../assets/img/Adam.png'
import Intro from '../assets/img/intro.jpeg'
import Lifeguard from '../assets/img/lifeguard.png'
import GroupPrivate from '../assets/img/groupPrivate.jpg'
import { SlBadge } from 'react-icons/sl'
import YinYang from '../assets/img/yinyangbadge.png'

function MenuList({ menu }) {
  const handleClick = async (id) => {
    console.log(id)
  }

  return (
    <div className='menu-list flex my-4 max-w-full h-full flex-wrap justify-center '>
      {/* <ul className='flex justify-evenly max-w-full flex-wrap'>
        {menu.map((item) => (
          <li className='m-4 w-[360px]' key={item.id} onClick={() => handleClick(item.id)}>
            <div className='cardheader flex items-center justify-between bg-gray-300 rounded-t-xl'>
              <h3 className='capitalize text-md text-center my-2 font-normal pl-2 spacegrotesk text-gray-800'>
                {item.name}
              </h3>
              <span className='flex justify-center items-center pr-2'>
                <strong className='text-sm text-black'>${item.fee}</strong>
                <p className='text-xs text-black'>{item.feeType}</p>
              </span>
            </div>
            <hr />
            <div className=''>
              <div
                className=''
                style={{
                  background: `url(${item.img}) center no-repeat`,
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className='content bg-[var(--grayish)] bg-opacity-80 flex pt-2 flex-col space-y-2 border-2 border-gray-500 p-2 spacegrotesk'>
                <p className='text-xs justify-between flex w-full'>
                  <span className=''>Swimmer levels:</span>
                  <span className='font-bold capitalize text-green-500'>{item.level}</span>
                </p>
                <p className='text-xs justify-between flex w-full'>
                  <span className=''>When: </span>
                  <span className='font-bold capitalize text-green-500'>{item.schedule}</span>
                </p>
                <p className='text-xs justify-between flex w-full'>
                  <span className=''>Time:</span>
                  <span className='text-green-500 font-bold'>{item.time}</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul> */}
      {/* CARD */}
      <div className='w-full flex justify-center items-center my-2'>
        <div className='flex w-[370px] flex-col m-2 '>
          <div className='flex h-10 w-full items-center justify-center gap-8 rounded-t-xl bg-gray-300 text-center'>
            <p className=' font-semibold spacegrotesk tracking-wide text-[var(--black)]'>
              Private Lessons
            </p>
            <p className='text-xs tracking-wide text-amber-600'>with Adam Gonzales</p>
            <span className=' font-bold tracking-wider text-cyan-600'>$100</span>
          </div>
          <div className='flex rounded-b-xl border-2 border-r-2 border-gray-700  '>
            <div className='flex items-center justify-center rounded-bl-lg border-2 border-gray-600 bg-cyan-700'>
              <img src={Adam} alt='adam photo' className='h-44 w-44' />
            </div>

            <div className='justify-between bg-[var(--grayish)] w-full bg-opacity-80 flex pt-2 flex-col space-y-2 border-2 border-gray-500 p-2 spacegrotesk'>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>Cost:</span>
                <span className='font-bold tracking-wider text-green-500'>$100</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>Who:</span>
                <span className='font-bold capitalize text-green-500'>All ages & skill level</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>When: </span>
                <span className='font-bold capitalize text-green-500'>On Appointment</span>
              </p>

              <p className='text-xs justify-between flex w-full'>
                <span className=''>Optional:</span>
                <span className='text-green-500 font-bold'>Video session + analysis</span>
              </p>
              <button className='bg-emerald-500 rounded w-full'>Book Session</button>
            </div>
          </div>
        </div>
      </div>
      {/* CARD */}
      <div className='flex w-[370px] flex-col my-6'>
        <div className='flex h-10 w-full items-center justify-center gap-8 rounded-t-xl bg-gray-300 text-center'>
          <div className='flex items-center gap-2'>
            <p className=' font-semibold spacegrotesk tracking-wide text-[var(--black)]'>
              Flow State Swim Membership
            </p>
            <span className=''>
              <SlBadge className='w-6 h-6 text-cyan-500 font-bold' />
            </span>
          </div>

          <span className=' font-bold tracking-wider text-cyan-600'>$80/Month</span>
        </div>
        <div className='flex rounded-b-xl border-2 border-r-2 border-gray-700  '>
          <div className='flex items-center justify-center rounded-bl-lg border-2 border-gray-600 bg-[var(--black)]'>
            <img src={YinYang} alt='adam photo' className='w-52 h-32' />
          </div>

          <div className='justify-between bg-[var(--grayish)] w-full bg-opacity-80 flex pt-2 flex-col space-y-2 border-2 border-gray-500 p-2 spacegrotesk'>
            <p className='text-xs justify-between flex w-full'>
              <span className=''>Cost:</span>
              <span className='font-bold tracking-wider text-green-500'>$80/Month or $15/Day</span>
            </p>
            <p className='text-xs justify-between flex w-full'>
              <span className=''>Who:</span>
              <span className='font-bold capitalize text-green-500'>Novice++</span>
            </p>
            <p className='text-xs justify-between flex w-full'>
              <span className=''>Duration: </span>
              <span className='font-bold capitalize text-green-500'>1 hour</span>
            </p>
            <p className='text-xs justify-between flex w-full'>
              <span className=''>When: </span>
              <span className='font-bold capitalize text-green-500'>M/W/F</span>
            </p>
            <p className='text-xs justify-between flex w-full'>
              <span className=''>Time:</span>
              <span className='text-green-500 font-bold'>11:30am</span>
            </p>

            <button className='bg-emerald-500 rounded w-full'>Book Session</button>
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className='w-full flex flex-wrap justify-center items-center mt-4'>
        <div className='flex w-[370px] flex-col m-2'>
          <div className='flex h-10 w-full items-center justify-center gap-8 rounded-t-xl bg-gray-300 text-center'>
            <p className=' font-semibold spacegrotesk tracking-wide text-[var(--black)]'>
              Introductory Class
            </p>

            <span className=' font-bold tracking-wider text-cyan-600'>$75</span>
          </div>
          <div className='flex rounded-b-xl border-2 border-r-2 border-gray-700  '>
            <div className='flex items-center justify-center rounded-bl-lg border-2 border-gray-600 bg-cyan-700'>
              <img src={Intro} alt='adam photo' className='w-44 h-36' />
            </div>

            <div className='justify-between bg-[var(--grayish)] w-full bg-opacity-80 flex pt-2 flex-col space-y-3 border-2 border-gray-500 p-2 spacegrotesk'>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>Cost:</span>
                <span className='font-bold tracking-wider text-green-500'>$75</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>Who:</span>
                <span className='font-bold capitalize text-green-500'>All ages & skill level</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>Duration: </span>
                <span className='font-bold capitalize text-green-500'>1 hour</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>When: </span>
                <span className='font-bold capitalize text-green-500'>On Appointment</span>
              </p>

              <button className='bg-emerald-500 rounded w-full'>Book Session</button>
            </div>
          </div>
        </div>
        {/* CARD */}
        {/* CARD */}
        <div className='flex w-[370px] flex-col my-6'>
          <div className='flex h-10 w-full items-center justify-center gap-8 rounded-t-xl bg-gray-300 text-center'>
            <p className=' font-semibold spacegrotesk tracking-wide text-[var(--black)]'>
              Lifeguard Certification
            </p>

            <span className=' font-bold tracking-wider text-cyan-600'>$210</span>
          </div>
          <div className='flex rounded-b-xl border-2 border-r-2 border-gray-700  '>
            <div className='flex items-center justify-center rounded-bl-lg border-2 border-gray-600 bg-cyan-700'>
              <img src={Lifeguard} alt='adam photo' className='w-52 h-32' />
            </div>

            <div className='justify-between bg-[var(--grayish)] w-full bg-opacity-80 flex pt-2 flex-col space-y-2 border-2 border-gray-500 p-2 spacegrotesk'>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>Cost:</span>
                <span className='font-bold tracking-wider text-green-500'>$210</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>Who:</span>
                <span className='font-bold capitalize text-green-500'>Intermediate++</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>Duration: </span>
                <span className='font-bold capitalize text-green-500'>16 Hrs Total</span>
              </p>
              <p className='text-xs justify-between flex w-full'>
                <span className=''>When: </span>
                <span className='font-bold capitalize text-green-500'>Mar-18, Apr-22, May-6</span>
              </p>

              <p className='text-xs justify-between flex w-full'>
                <span className=''>Info:</span>
                <span className='text-green-500 font-bold'>Full Weekend of Training</span>
              </p>
              <button className='bg-emerald-500 rounded w-full'>Book Session</button>
            </div>
          </div>
        </div>
      </div>
      {/* CARD */}
      <div className='flex w-[370px] flex-col m-2 '>
        <div className='flex h-10 w-full items-center justify-center gap-8 rounded-t-xl bg-gray-300 text-center'>
          <p className=' font-semibold spacegrotesk tracking-wide text-[var(--black)]'>
            Group Private Lesson
          </p>
          <p className='text-xs tracking-wide text-amber-600'>with Adam Gonzales</p>
        </div>
        <div className='flex rounded-b-xl border-2 border-r-2 border-gray-700  '>
          <div className='flex items-center justify-center rounded-bl-lg border-2 border-gray-600 bg-cyan-700'>
            <img src={GroupPrivate} alt='group photo' className='h-36 w-52' />
          </div>

          <div className='justify-between bg-[var(--grayish)] w-full bg-opacity-80 flex pt-2 flex-col space-y-2 border-2 border-gray-500 p-2 spacegrotesk'>
            <p className='text-xs justify-between flex w-full'>
              <span className=''>2-3 People:</span>
              <span className='font-bold tracking-wider text-green-500'>$50/Swimmer</span>
            </p>
            <p className='text-xs justify-between flex w-full'>
              <span className=''>4 or more:</span>
              <span className='font-bold tracking-wider text-green-500'>$40/Swimmer</span>
            </p>
            <p className='text-xs justify-between flex w-full'>
              <span className=''>Who:</span>
              <span className='font-bold capitalize text-green-500'>All ages & skill level</span>
            </p>

            <p className='text-xs justify-between flex w-full'>
              <span className=''>When: </span>
              <span className='font-bold capitalize text-green-500'>On Appointment</span>
            </p>

            <p className='text-xs justify-between flex w-full'>
              <span className=''>Optional:</span>
              <span className='text-green-500 font-bold'>Video session + analysis</span>
            </p>
            <button className='bg-emerald-500 rounded w-full'>Book Session</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuList
