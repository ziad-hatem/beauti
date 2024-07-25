"use client";
import React from "react";
import { useEffect } from "react";
import VerifiedBeauty from "./filter/VerifiedBeauty";
import RecommendedFilterSelect from "./RecommendedFilterSelect";
export default function RecommendedBanner({ section }) {
  useEffect(() => {
    document
      .querySelector("#recommendedProductsContainer")
      .addEventListener("change", (e) => {
        if (
          document.querySelector("#icon-filter").classList.contains("rotate")
        ) {
          // document.querySelectorAll(".products-container .product-card").forEach((e)=>{
          //       e.classList.add("hidden")
          // })
          document
            .querySelector("#recommendedProductsContainer")
            .classList.remove("Igap-2.5");
          document
            .querySelector("#recommendedProductsContainer")
            .classList.remove("vCards");
          document
            .querySelector("#recommendedProductsContainer")
            .classList.add("hCards");
        } else {
          document
            .querySelector("#recommendedProductsContainer")
            .classList.add("Igap-2.5");
          document
            .querySelector("#recommendedProductsContainer")
            .classList.add("vCards");
          document
            .querySelector("#recommendedProductsContainer")
            .classList.remove("hCards");
        }
      });
    document.querySelector("#icon-filter").addEventListener("click", (e) => {
      if (document.querySelector("#icon-filter").classList.contains("rotate")) {
        // document.querySelectorAll(".products-container .product-card").forEach((e)=>{
        //       e.classList.add("hidden")
        // })
        document
          .querySelector("#recommendedProductsContainer")
          .classList.remove("Igap-2.5");
        document
          .querySelector("#recommendedProductsContainer")
          .classList.remove("vCards");
        document
          .querySelector("#recommendedProductsContainer")
          .classList.add("hCards");
        document.querySelector("#icon-filter").classList.remove("rotate");
      } else {
        console.log("else");
        document
          .querySelector("#recommendedProductsContainer")
          .classList.add("Igap-2.5");
        document
          .querySelector("#recommendedProductsContainer")
          .classList.add("vCards");
        document
          .querySelector("#recommendedProductsContainer")
          .classList.remove("hCards");
        document.querySelector("#icon-filter").classList.add("rotate");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="RecommendedBanner-container gray flex !items-center max-lg:!h-fit">
      <div className="right flex">
        <h2 className="RecommendedBanner-title !text-[20px] !font-[700] max-lg:!text-[11px]">
          &quot;كل منتجات {section.title}&quot;
        </h2>
        <p className="products-num !text-[18px] max-lg:!text-[9px]">
          نتائج البحث {section.products.num}
        </p>
      </div>
      <div className="left flex">
        <VerifiedBeauty />
        <div className="select !flex max-xl:!hidden">
          <p className="max-lg:!text-sm">ترتيب حسب</p>
          <RecommendedFilterSelect
            ID={"arrange"}
            content={[
              { title: "من الأحدث إلى الأقدم" },
              { title: "من الأقدم إلى الأحدث" },
              { title: "من الأعلى سعرا إلى الأقل" },
              { title: "من الأقل سعرا إلى الأعلى" },
            ]}
          />
        </div>
        <div className="select !flex max-xl:!hidden">
          <p>العرض</p>
          <RecommendedFilterSelect
            ID={"productsNum"}
            content={[
              { title: "6 فى الصفحة" },
              { title: "12 فى الصفحة" },
              { title: "18 فى الصفحة" },
              { title: "24 فى الصفحة" },
              { title: "30 فى الصفحة" },
            ]}
          />
        </div>
        <div className="icon" id="icon-filter">
          <svg
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.16667 9.58398H3.25C3.82292 9.58398 4.29167 9.11523 4.29167 8.54232V6.45898C4.29167 5.88607 3.82292 5.41732 3.25 5.41732H1.16667C0.59375 5.41732 0.125 5.88607 0.125 6.45898V8.54232C0.125 9.11523 0.59375 9.58398 1.16667 9.58398ZM1.16667 14.7923H3.25C3.82292 14.7923 4.29167 14.3236 4.29167 13.7507V11.6673C4.29167 11.0944 3.82292 10.6257 3.25 10.6257H1.16667C0.59375 10.6257 0.125 11.0944 0.125 11.6673V13.7507C0.125 14.3236 0.59375 14.7923 1.16667 14.7923ZM1.16667 4.37565H3.25C3.82292 4.37565 4.29167 3.9069 4.29167 3.33398V1.25065C4.29167 0.677734 3.82292 0.208984 3.25 0.208984H1.16667C0.59375 0.208984 0.125 0.677734 0.125 1.25065V3.33398C0.125 3.9069 0.59375 4.37565 1.16667 4.37565ZM6.375 9.58398H17.8333C18.4062 9.58398 18.875 9.11523 18.875 8.54232V6.45898C18.875 5.88607 18.4062 5.41732 17.8333 5.41732H6.375C5.80208 5.41732 5.33333 5.88607 5.33333 6.45898V8.54232C5.33333 9.11523 5.80208 9.58398 6.375 9.58398ZM6.375 14.7923H17.8333C18.4062 14.7923 18.875 14.3236 18.875 13.7507V11.6673C18.875 11.0944 18.4062 10.6257 17.8333 10.6257H6.375C5.80208 10.6257 5.33333 11.0944 5.33333 11.6673V13.7507C5.33333 14.3236 5.80208 14.7923 6.375 14.7923ZM5.33333 1.25065V3.33398C5.33333 3.9069 5.80208 4.37565 6.375 4.37565H17.8333C18.4062 4.37565 18.875 3.9069 18.875 3.33398V1.25065C18.875 0.677734 18.4062 0.208984 17.8333 0.208984H6.375C5.80208 0.208984 5.33333 0.677734 5.33333 1.25065Z"
              fill="#545454"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
