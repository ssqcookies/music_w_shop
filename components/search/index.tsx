'use client';
import {FC, memo, ReactNode, useState} from "react";
import type { ISearchSuggest } from "@/service/home";
import { useRouter } from 'next/navigation';


export interface IProps {
  children?: ReactNode; // ReactNode，支持文本、数组等所有合法子元素
    searchData?: ISearchSuggest;
}

const Search:FC<IProps> = memo(function Search(props){
    const { children,searchData } = props;
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState("蓝牙耳机");
  const router = useRouter();

  function handleInputFocus(isFocus: boolean) {
    // console.log("isFocus=>", isFocus);
    setInputFocus(isFocus);
  }

    function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      // console.log(event.target);
      // console.log("按了 回车键");
      const inputTarget = event.target as HTMLInputElement; // input 元素对象
      // console.log(inputTarget.value);
       goToSearchPage(inputTarget.value);
      setInputFocus(false);
    }
  }
  function handleItemClick(name: string) {
    console.log(name);
    setPlaceholder(name);
     goToSearchPage(name);
  }


  function goToSearchPage(id: string | number) {
    router.push(`/details/${id}`);
  }

    return(
        <div className="relative w-search-w">
            <div className='w-full leading-search-h h-search-h bg-sprite bg-[0px_0px]'>
                <input type="text" placeholder='蓝牙耳机' className="w-[80%] mt-[10px] ml-[34px] border-0 h-[18px] text-fs12 focus:border-0 focus:outline-none"
                 onFocus={() => handleInputFocus(true)}
                onBlur={() => handleInputFocus(false)}
                onKeyDown={(e) => handleKeyDown(e as any)}></input>
            </div>
            <div className={`absolute z-999 top-[34px] w-search-w h-auto bg-baseWhite shadow-[0_4px_10px_rgba(85,85,85,0.35)] rounded-md pb-10px flex justify-center items-center flex-col ${inputFocus ? 'block' : 'hidden'}`}>
                <div className="w-full h-[4px] bg-[url(/images/bort.png)] bg-no-repeat bg-cover"></div>
                <h2 className="w-[280px] h-[33px]  font-bold m0 pl-20 leading-[34px] text-fs12 border-b border-b-[rgba(0, 0, 0, 0.1)] text-shadow-[0 1px 0 rgb(255 255 255 / 90%)]">热门搜索</h2>
                <ul>
                    {searchData?.configKey &&
            searchData?.configKey.map((item, index) => {
              return (
                <li
                    className="w-[280px] h-[34px] leading-[34px]  ml-20 leading-34px font-fs14 color-sub cursor-pointer hover:bg-bgGray"
                  key={item[index + 1]}
                  onMouseDown={() => handleItemClick(item[index + 1])}
                >
                  {item[index + 1]}
                </li>

              );
            })}
                                    </ul>
            </div>
        </div>
    )

})

export default Search