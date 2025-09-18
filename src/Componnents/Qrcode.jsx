import React from 'react'
import app from '../assets/icon/app-mobile-travels-lg-34ce5db4.webp'
import Qr from '../assets/icon/qrcode-56155e39.png'
const Qrcode = () => {
  return (
    <>
<div className="flex justify-center mt-20 px-10 mb-10">
  <div className="flex flex-col lg:flex-row items-center justify-between border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-6xl bg-white">
    
    {/* ستون چپ - تصویر اپ */}
    <div className="flex justify-center lg:justify-start mb-6 lg:mb-0 lg:w-1/3">
      <img src={app} alt="اپلیکیشن علی‌بابا" className="max-h-80 object-contain" />
    </div>

    {/* ستون وسط - متن */}
    <div className="flex flex-col items-center lg:items-end text-center lg:text-right lg:w-1/3 px-4">
      <h2 className="font-bold text-2xl mb-2" dir='rtl'>اپلیکیشن علی‌بابا</h2>
      <p className="text-gray-700 mb-4">سریع‌تر و مطمئن‌تر به سفر بروید</p>
      <a href="#" className="text-blue-600 font-medium hover:underline mb-2">
        مشاهده لینک‌های دانلود
      </a>
      <p className="text-gray-500 text-sm" dir='rtl'>
        قابلیت نصب روی <span className="font-semibold">Android</span> و <span className="font-semibold">iOS</span>
      </p>
    </div>

    {/* ستون راست - QR Code */}
    <div className="flex flex-col items-center lg:items-end lg:w-1/3 mt-6 lg:mt-0">
      <img src={Qr} alt="QR Code" className="w-32 h-auto" />
      <p className="text-gray-600 text-sm mt-2 mr-2" dir='rtl'>برای دانلود اسکن کنید!</p>
    </div>

  </div>
</div>


    
    
    
    
    
    </>
  )
}

export default Qrcode