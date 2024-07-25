import React from 'react'
import RecommendedBanner from "./RecommendedBanner"
import RecommendedFilter from "./RecommendedFilter"
import RecommendedProducts from './RecommendedProducts'
import {dailyOffers} from "@/data/fake"
export default function RecommendationSection({section}) {
  return (
    <section className='RecommendationSection'>
      <RecommendedBanner section={section} />
      <RecommendedFilter />
      <RecommendedProducts products={dailyOffers} />
    </section>
  )
}
