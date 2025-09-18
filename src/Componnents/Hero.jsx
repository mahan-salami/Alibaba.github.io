import React, { useState } from 'react'
import Dakheli from '../assets/parvaz-dakheli.webp'
import dakh from '../assets/icon/dakheli.png'
import Kharej from '../assets/icon/khareji.png'
import ghatar from '../assets/icon/train.png'
import bus from '../assets/icon/bus.png'
import tour from '../assets/icon/1.png'
import hote from '../assets/icon/hotel.png'
import villa from '../assets/icon/villa.png'
import safarcart from '../assets/icon/safarcard.svg'
import Bime from '../assets/icon/insurance-icon.svg'
import visa from '../assets/icon/visa-icon.svg'
import tourg from '../assets/icon/gtour-icon.svg'
import ax1 from '../assets/icon/AL_Digitalmarketing_on_going_Safar_Card_Cardview_Banner_Desktop_03_10_29_84e3e680f4.webp'
import ax2 from '../assets/icon/Individual_Tour_Kish_Summer_Festival_Cardview_Banner_Desktop_04_04_31_ezgif_com_jpg_to_webp_converter_9ff81d6799.webp'

const Hero = () => {
  const [open, setOpen] = useState(false)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  return (
    <>
      {/* بک‌گراند */}
      <div>
        <img src={Dakheli} alt="" className="w-full h-auto" />
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-2xl -mt-40 lg:-mt-160 shadow-2xl w-[95%] md:w-[1200px] h-auto md:h-[280px] flex flex-col p-4 md:p-6">
          
          {/* بخش آیکون‌ها */}
          <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-20 border-b pb-4 mt-2 justify-center" dir="rtl">
            <div className="flex flex-col items-center">
              <img src={dakh} alt="" className="cursor-pointer w-10 h-10 md:w-14 md:h-14 mb-2"/>
              <h1 className="text-xs md:text-sm transition delay-200 hover:text-blue-500 cursor-pointer" Link=''>پرواز داخلی</h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={Kharej} alt="" className="cursor-pointer w-10 h-10 md:w-14 md:h-14 mb-2" />
               <h1 className="text-xs md:text-sm transition delay-200 hover:text-blue-500 cursor-pointer" Link=''>پرواز خارجی</h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={ghatar} alt="" className="cursor-pointer w-10 h-10 md:w-14 md:h-14 mb-2" />
              <h1 className="text-xs md:text-sm transition delay-200 hover:text-blue-500 cursor-pointer" link=''>قطار</h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={bus} alt="" className="cursor-pointer w-10 h-10 md:w-14 md:h-14 mb-2"/>
              <h1 className="text-xs md:text-sm transition delay-200 hover:text-blue-500 cursor-pointer" link=''>اتوبوس</h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={tour} alt="" className="cursor-pointer w-10 h-10 md:w-14 md:h-14 mb-2"/>
              <h1 className="text-xs md:text-sm transition delay-200 hover:text-blue-500 cursor-pointer" link=''>تور</h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={hote} alt="" className="cursor-pointer w-10 h-10 md:w-14 md:h-14 mb-2"/>
              <h1 className="text-xs md:text-sm transition delay-200 hover:text-blue-500 cursor-pointer" link='' >هتل</h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={villa} alt="" className="cursor-pointer w-10 h-10 md:w-14 md:h-14 mb-2" />
              <h1 className="text-xs md:text-sm text-center transition delay-200 hover:text-blue-500 cursor-pointer" link=''>ویلا و اقامتگاه</h1>
            </div>
          </div>

          {/* بخش انتخاب بلیط */}
          <div className="w-full flex justify-center md:justify-start px-2 md:px-10 mt-4" dir='rtl'>
            <select className="border  rounded-2xl p-2 w-28 text-xs md:text-sm focus:outline-none" dir='rtl'>
              <option>رفت و برگشت</option>
              <option>یک طرفه</option>
            </select>
          </div>

{/* فرم ورودی‌ها */}
<div className="mt-5 flex flex-col md:flex-row md:items-center md:gap-2 px-8" dir="rtl">
  <div className="flex flex-col md:flex-row gap-2 w-full relative">

    {/* مبدا */}
    <div className="flex flex-col w-full md:w-52 -ml-2">
      <label htmlFor="origin" className="text-xs text-gray-600 mb-1">مبدا (شهر)</label>
      <input
        type="text"
        id="origin" placeholder='مبدا (شهر)'
        className="border rounded-r-lg p-3 w-full text-sm"
      />
    </div>

    {/* مقصد */}
    <div className="flex flex-col w-full md:w-52 md:ml-5">
      <label htmlFor="destination" className="text-xs text-gray-600 mb-1">مقصد (شهر)</label>
      <input
        type="text"
        id="destination" placeholder='مقصد (شهر)'
        className="border rounded-l-lg p-3 w-full text-sm"
      />
    </div>

    {/* تاریخ رفت */}
    <div className="flex flex-col w-full md:w-40 -ml-2">
      <label htmlFor="departure" className="text-xs text-gray-600 mb-1">تاریخ رفت</label>
      <input
        type="date"
        id="departure"
        className="border rounded-r-lg p-3 w-full text-sm"
      />
    </div>

    {/* تاریخ برگشت */}
    <div className="flex flex-col w-full md:w-40 md:ml-2">
      <label htmlFor="return" className="text-xs text-gray-600 mb-1">تاریخ برگشت</label>
      <input
        type="date"
        id="return"
        className="border rounded-l-lg p-3 w-full text-sm"
      />
    </div>

    {/* فیلد مسافر */}
    <div className="flex flex-col w-full md:w-40">
      <label htmlFor="passenger" className="text-xs text-gray-600 mb-1">مسافر</label>
      <div className="relative">
        <input
          type="text"
          id="passenger"
          readOnly
          value={`${adults + children + infants} مسافر`}
          onClick={() => setOpen(!open)}
          className="border rounded-lg p-3 w-full text-sm cursor-pointer"
          dir="rtl"
        />

        {open && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-50" dir="rtl">
            {/* بزرگسال */}
            <div className="flex justify-between items-center py-2">
              <span>بزرگسال (۱۲+)</span>
              <div className="flex items-center">
                <button onClick={() => setAdults(adults + 1)} className="px-2 py-1 bg-blue-500 text-white rounded">+</button>
                <span className="px-3">{adults}</span>
                <button onClick={() => setAdults(Math.max(1, adults - 1))} className="px-2 py-1 bg-gray-200 rounded">-</button>
              </div>
            </div>

            {/* کودک */}
            <div className="flex justify-between items-center py-2">
              <span>کودک (۲-۱۲)</span>
              <div className="flex items-center">
                <button onClick={() => setChildren(children + 1)} className="px-2 py-1 bg-blue-500 text-white rounded">+</button>
                <span className="px-3">{children}</span>
                <button onClick={() => setChildren(Math.max(0, children - 1))} className="px-2 py-1 bg-gray-200 rounded">-</button>
              </div>
            </div>

            {/* نوزاد */}
            <div className="flex justify-between items-center py-2">
              <span>نوزاد (۰-۲)</span>
              <div className="flex items-center">
                <button onClick={() => setInfants(infants + 1)} className="px-2 py-1 bg-blue-500 text-white rounded">+</button>
                <span className="px-3">{infants}</span>
                <button onClick={() => setInfants(Math.max(0, infants - 1))} className="px-2 py-1 bg-gray-200 rounded">-</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* دکمه جستجو */}
    <button className="w-full md:w-40 h-12 rounded-lg bg-amber-400 text-sm font-bold mt-8 md:mt-4.5">
      جستجو
    </button>

           </div>
         </div>
        </div>
      </div>
      
      {/* سایر خدمات */}
      <div className='flex -mt-10 mr-5 lg:-mt-120 lg:mr-30' dir='rtl'>
        <h1 className='text-2xl'>سایر خدمات علی بابا</h1>
      </div>

      <div className='flex justify-center'>
        <div className='border-1 border-[#d1d1d1] w-90 h-160 lg:w-330 lg:h-24 justify-center mt-5 rounded-lg '>
          <div className='flex flex-wrap justify-center items-center gap-30 ' dir='rtl'>
            <div className='flex justify-center mt-5'>
              <img src={safarcart} alt="" />
              <h1 className='flex mt-2 ml-20'>سفر کارت (سازمانی)</h1>
              <a className='w-0.5 h-10 bg-gray-400'></a>
            </div>

            <div className='flex justify-center mt-5'>
              <img src={Bime} alt="" />
              <h1 className='flex mt-2 ml-30'>بیمه مسافرتی</h1>
              <a className='w-0.5 h-10 bg-gray-400 '></a>
            </div>

            <div className='flex justify-center mt-5'>
              <img src={visa} alt="" />
              <h1 className='flex mt-2 ml-25 '>ویزا سفر</h1>
              <a className='w-0.5 h-10 bg-gray-400 '></a>
            </div>

            <div className='flex justify-center mt-5 -mr-10'>
              <img src={tourg} alt="" />
              <h1 className='flex mt-3'>تور گردشگری</h1>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="flex  justify-center gap-4 sm:gap-7 mt-34">
              <img src={ax1} alt="" className="w-[150px] sm:w-[480px] h-auto shadow-2xl"/>
              <img src={ax2} alt="" className="w-[150px] sm:w-[480px] h-auto shadow-2xl"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
