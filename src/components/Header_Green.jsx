import { useState, useEffect } from 'react';
import location_icon from '../asset/location_Icon.png'

export default function Header_Green(){

    return (
        <div className=' main_header z-[3] bg-white' >
            <div className="menu_header p-4" >
            <a href="/grab-food-react"> <img id="logo_header" src="https://food.grab.com/static/images/logo-grabfood2.svg"/></a>

            <div className="max-sm:hidden flex items-center ml-[100px] mr-auto border-[1px] w-max-[360px] h-max[20px] border-[#aeaeae] p-[6px] rounded-s-md rounded-e-md">
                <span className="pl-4 pr-2 text-[15px] text-[#6C6767]">Deliver to</span>
                <span className="pl-2"></span>
                
            </div>
            <div className="btn_left">
            <a className="bg-white p-[8px] rounded-md border-[#f5f5f5] border-[1px]">
                <img className="w-5" src="https://food.grab.com/static/images/icons/icon-cart-default-black.svg"></img>
            </a>

            <div className='border_header'>
                <div className="btn_header">
                    <a href="" id="btn_text" >
                        Đăng nhập/Đăng ký
                    </a>
                </div>
                </div>
            
                <div className="btn_header">
                    <a href="" id="btn_text">
                        VI
                    </a>
                </div>
            </div>
            
          
        </div>
        </div>
        
    );
}