"use client"
import React, { useEffect } from "react";
import Image from "next/image";

const Switcher = ({ sections, textColor, bgColor, border, round }) => {
    useEffect(()=>{
        document.querySelectorAll("a.switch").forEach(el => {
            if(el.getAttribute("href") == window.location.pathname){
                el.children[0].classList.remove("opacity-50","grayscale","bg-[#f5f5f5]")
                el.children[0].classList.add(border,bgColor)
                el.children[0].children[0].classList.add(textColor)
                el.children[0].children[0].classList.remove("disabled")
            } 
        });
    },[])
    return (
        <div className="flex flex-row gap-[13px] my-[13px] justify-between">
            {
                sections.map((el,i)=>{
                    return(
                        <a href={el.url} key={i} className="flex-1 switch">
                            <div className={`flex ${round ? round : "rounded-[16px]"} justify-between items-center bg-[#f5f5f5] grayscale opacity-50 border-[1px]`}>
                                <div className={`text-[20px] h-[50px] flex justify-center items-center font-bold align-center mx-[auto] disabled`}>
                                        {el.title}
                                </div>
                                {el.image == "" ? null : <Image src={el.image} alt={el.title} height={200} width={100} className="ml-[9.583%] max-w-[67px]"/> }
                            </div>
                        </a>
                    )
                })
            }
        </div>
    );
  };
  
  export default Switcher;