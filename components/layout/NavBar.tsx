
'use client'; 
import {memo, ReactNode, useState} from "react";
import Link from "next/link";
import Search from 'components/search'
import { openLoginQRModal } from '@/store/modules/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import {IAppRootState} from "@/store";




export interface IProps {
  children?: ReactNode; // ReactNode，支持文本、数组等所有合法子元素
}

const NavBar = memo(function NavBar(props: IProps) {

    // 从redux读取数据
    const {navbar,counter} = useSelector((rootState:IAppRootState)=>{
        return {
            navbar:rootState.home.navbar,
            counter:rootState.home.counter
        }
    })


// const isLogin = useSelector(state => state.user.isLogin);
const isLogin = false
  // 控制登录弹窗显示
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const dispatch = useDispatch();

const handleCartClick = (e: React.MouseEvent) => {
  // 未登录
  if (!isLogin) {
    e.preventDefault(); // 阻止Link默认跳转行为
    dispatch(openLoginQRModal());
  }
  // 已登录：不做拦截，正常走Link跳转
};


  return (
    <header className="flex justify-center box-border h-navbar-h border-b border-black/10 ">
      <div className="wrapper h-full flex justify-between items-center">
          {/* 左侧 .content-right */}
           <div className="flex items-center">
                <Link href="/" className="inline-block w-logo-w h-logo-h bg-sprite sprite-logo no-underline overflow-hidden">
                </Link>
                <h1 className="indent-[-1000px] m-0 h-0">网易云商城</h1>
             </div>
        {/* 右侧 .content-right */}
            <div className="flex-normal">
          <Search searchData={navbar}></Search>
          <div className="flex items-center ml-[41px] mr-[10px] relative">
            <Link
              href="/cart"
               onClick={handleCartClick}
              className="inline-block w-cart-w h-cart-h cursor-pointer no-underline bg-sprite bg-[-110px_-158px]"
            ></Link>
            {/* 购物车数量角标 .count */}
            <span className="absolute top-[-5px] left-[26px] w-[18px] h-[18px] leading-[18px] text-center text-white bg-sprite bg-[-156px_-158px]">
              {counter}
            </span>
          </div>
          {/* 登录入口 .right-login */}
          <div
            className="w-[80px] h-fit mt-[10px] cursor-pointer text-center text-fs12 text-white bg-[url('/images/arrow-d.png')] bg-no-repeat bg-[110%]  hover:bg-[url('/images/arrow-u.png')] bg-no-repeat ">
            登录
          </div>
        </div>
      </div>
    </header>
  );
});

NavBar.displayName = "NavBar";

export default NavBar;