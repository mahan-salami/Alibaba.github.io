import React from "react";
import { FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import posh from '../assets/icon/24.webp'
import ticket from '../assets/icon/Untitled.webp'
import logo from '../assets/icon/Alibaba-logo.svg'
import saf from '../assets/icon/hamsafar.webp'
import  enamad    from '../assets/icon/logo.png'
import   samandehi   from '../assets/icon/state-airline-f45c55b2.svg'
import   aira   from '../assets/icon/passenger-rights-48368f81.svg'
import   qrcode   from '../assets/icon/ecunion-35c3c933.jpg'

const Footer = () => {
  return (
    <footer className="bg-white  mt-10  ">
      {/* بخش بالا */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-8 px-20">
        <div className="flex flex-col items-center">
          <img src={ticket} alt="ticket" className="w-12 h-12 mb-2" />
          <h3 className="font-bold">رتبه یک سفر</h3>
          <p className="text-gray-500 text-sm">
            معتبرترین عرضه‌کننده محصولات گردشگری در ایران
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={saf} alt="device" className="w-12 h-12 mb-2" />
          <h3 className="font-bold">همسفر هر سفر</h3>
          <p className="text-gray-500 text-sm">
            ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={posh} alt="support" className="flex w-12 h-12 mb-2" />
          <h3 className="font-bold">همسفر همه لحظات سفر</h3>
          <p className="text-gray-500 text-sm">
            پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر
          </p>
        </div>
      </div>

     

      {/* بخش میانی */}
      <div className="container w-3/4 mx-auto px-16 md:px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-right border-t  border-gray-300" dir="ltr">
        {/* لوگو و پشتیبانی */}
        <div className="flex flex-col gap-3">
          <div className="flex  items-center gap-2">
            <img src={ logo } alt="Alibaba" className="w-28" />
          </div>
          <p className="text-gray-600 text-sm text-left">تلفن پشتیبانی: ۰۲۱-۴۳۹۰۰۰۰۰</p>
          <div className="flex gap-2 mt-3 flex-row">
            <img src={enamad} alt="enamad" className="h-14" />
            <img src={samandehi} alt="samandehi" className="h-14" />
            <img src={aira} alt="aira" className="h-14" />
            <img src={qrcode} alt="qrcode" className="h-14" />
          </div>
        </div>

        {/* علی‌بابا */}
        <div>
          <h3 className="font-bold mb-3">علی بابا</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">درباره ما</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">تماس با ما</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">چرا علی‌بابا</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">علی‌بابا پلاس</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">بیمه مسافرتی</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">مجله علی‌بابا</li>
          </ul>
        </div>

        {/* خدمات مشتریان */}
        <div>
          <h3 className="font-bold mb-3">خدمات مشتریان</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">مرکز پشتیبانی آنلاین</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">راهنمای خرید</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">راهنمای استرداد</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">قوانین و مقررات</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">پرسش و پاسخ</li>
          </ul>
        </div>

        {/* اطلاعات تکمیلی */}
        <div>
          <h3 className="font-bold mb-3">اطلاعات تکمیلی</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">فروش سازمانی</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">پنل آژانسی علی‌بابا</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer" >فرصت‌های شغلی</li>
            <li className="transition delay-200 hover:text-blue-500 cursor-pointer">سنجش رضایتمندی</li>
          </ul>
        </div>
      </div>



      {/* بخش پایینی */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-65 py-5 text-gray-500 text-sm border-t   border-gray-300">
        {/* شبکه‌های اجتماعی */}
        <div className="flex gap-4 text-2xl mb-4 md:mb-0">
          <FaLinkedin />
          <FaInstagram />
          <FaTelegram />
          <FaYoutube />
          <BsTwitterX />
        </div>
        <div className="flex justify-center md:justify-end w-full">
  <p className="text-center md:text-right" dir="rtl">
    کلیه حقوق این سرویس (وبسایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا می‌باشد.
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
