import { cache } from "react";
import Api from '@/libs/Api';
import getSession from '@/libs/getSession';
import useBrowser, { usePostBrowser, useGetBrowser } from '@/libs/useBrowser';
import cookie from '@/libs/cookie';
import useFormData from '@/libs/useFormData';
// import Layout from './Layout';
// import Menu from './Menu';
const setting = cache(async () => await Api.get("settings", { cache: true }))
const getLocale = () => getSession().then(session => session.local)
const getSetting = async (...names) => {
  let settings = {}
  const data = await setting()
  names.forEach(name => {
    let setting = data[name]
    let value = null
    if (setting) {
      try {
        value = JSON.parse(setting)
      } catch (e) {
        value = setting
      }
      settings[name] = value
    } else
      settings[name] = {}
  })
  return names.length == 1 ? settings[names[0]] : settings
}
const getTranslate = cache(async () => await Api.get(`translate/${await getLocale()}`, {
  cache: true,
}));
const getMultyCurrency = cache(() => Api.get("isMultyCurrency", { cache: true }))
const getHomeCategories = cache(() => Api.get("orderedCategoriesForHome", { cache: true }))
const getCategories = cache(() => Api.get("orderedCategories", { cache: true }))
const getBrands = cache(() => Api.get("BrandsWithProductCount", { cache: true }))

const makeTranslate = data => word => data[word] ?? word
const useDirection = direction => (rtl, ltr) => (direction == "rtl" ? rtl : ltr);

const asset = path => process.env.NEXT_PUBLIC_ASSET_URL + path
const publicPath = path => process.env.NEXT_PUBLIC_PUBLIC_URL + path

const route = (strings, ...params) =>
  strings.reduce((previous, current, i) => {
    const param = params.at(i);
    return (
      previous +
      current +
      (typeof param == "object"
        ? `?${new URLSearchParams(
          Object.fromEntries(
            Object.entries(param).filter(([, value]) => value)
          )
        )}`
        : `/${param ?? ""}`)
    );
  }, "");
export {
  Api,
  getSession,
  getLocale,
  getSetting,
  getTranslate,
  getHomeCategories,
  getCategories,
  getBrands,
  getMultyCurrency,

  useBrowser,
  usePostBrowser,
  useGetBrowser,
  makeTranslate,
  useDirection,
  useFormData,

  publicPath,
  asset,
  cookie,
  route,
};