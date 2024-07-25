import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

export default function Sport({ sportArray }) {
  return (
    <section className="ImgsOffersSlider  mb-3">
      <SectionTitle name={"تنسيقات رياضية"} />
      <div className="sport-container grid">
        {sportArray.map((sportObject, i) => {
          return (
            <div key={i} className="sport-card">
              <Image
                src={sportObject.img}
                alt={sportObject.title}
                unoptimized
              />
              <Link
                href={sportObject.href}
                className="!text-[14px] !font-[500] !tracking-[0.25px] md:!text-[calc(10px_+_0.6vw)] md:!tracking-[0.5px] lg:!text-[22px]"
              >
                {sportObject.title}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
