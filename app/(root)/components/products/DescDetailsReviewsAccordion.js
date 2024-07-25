"use client";

import { productPageLinks } from "@/data/fake";
import Link from "next/link";
import AccordionElement from "@/components/products/AccordionElement";
import MainDetails from "./MainDetails";
import Overall from "./Overall";
import Specs from "./Specs";
import MainRating from "./MainRating";
import Faq from "./Faq";
import SingleReviews from "./SingleReviews";
const AccOne = ({ details }) => {
  return (
    <>
      <MainDetails mainDetails={details.mainDetails} />
      <Overall overall={details.overall} />
    </>
  );
};
const AccThree = ({ reviews }) => {
  return (
    <>
      <MainRating mainRating={reviews.mainRating} />
      <SingleReviews singleReviews={reviews.singleReviews} />
      <Faq faqQustions={reviews.faq} />
    </>
  );
};

const DescDetailsReviewsAccordion = ({ product }) => {
  return (
    <ul className=" flex flex-col gap-2.5 lg:hidden">
      <li>
        <AccordionElement
          link={productPageLinks[0]}
          content={<AccOne details={product.details} />}
        />
      </li>
      <li>
        <AccordionElement
          link={productPageLinks[1]}
          content={<Specs specs={product.details.specs} />}
        />
      </li>
      <li>
        <AccordionElement
          link={productPageLinks[2]}
          content={<AccThree reviews={product.reviewsBlock} />}
        />
      </li>
    </ul>
  );
};
export default DescDetailsReviewsAccordion;
