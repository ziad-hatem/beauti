"use client";

import { dailyOffers, products } from "@/data/fake";
import { useState } from "react";
import { createContext } from "react";

const mainContext = createContext();

const ContextProvider = ({ children }) => {
  const [showCartBlock, setShowCartBlock] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [changeLocationOpened, setChangeLocationOpened] = useState(false);
  const [mobileSideMenuOpen, setMobileSideMenuOpen] = useState(false);
  const [product, setProduct] = useState(products[0]);

  const [breadcrumb, setBreadcrumb] = useState([
    {
      name: "الرئيسية",
      url: "/",
    },
    {
      name: "الأزياء",
      url: "/fashion",
    },
    {
      name: "موضة رجالية",
      url: "/fashion/manFashion",
    },
  ]);
  return (
    <mainContext.Provider
      value={{
        showCartBlock,
        setShowCartBlock,
        overlayActive,
        setOverlayActive,
        changeLocationOpened,
        setChangeLocationOpened,
        mobileSideMenuOpen,
        setMobileSideMenuOpen,
        product,
        setProduct,
        breadcrumb,
        setBreadcrumb,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};
export { ContextProvider, mainContext };
