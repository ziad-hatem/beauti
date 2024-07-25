/* eslint-disable */
"use client"
import { useEffect, useState, useRef } from "react";
import useSWR from "swr";

const option = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
}
const getFetcher = option => async (_path) => {
  const r = await fetch(_path, option)
  if (!r.ok) {
    const error = new Error()
    error.info = await r.json()
    error.status = r.status
    throw error
  }
  return r.json()
}

const useBrowser = (path, conf = {}) => {
  path &&= path.toString()
  const { data, isLoading, error, ...other } = useSWR(path, getFetcher(option), conf);
  return [data, isLoading, error, other]
}
const _useBrowser = (_path, conf = {}) => {
  _path &&= _path.toString()

  const bussy = useRef(false);
  const timeSpan = useRef(undefined);
  const lag = useRef(undefined);
  const timer = useRef(undefined);

  const [path, setPath] = useState(_path)
  const [data, setData] = useState(undefined)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [enable, setEnable] = useState(0)
  const _option = {
    ...option,
    ...conf
  }

  const send = (args) => {
    timeSpan.current = args?.timeSpan
    lag.current = args?.lag
    setEnable(prev => ++prev)
  }

  const _send = () => {
    setIsLoading(true)
    fetch(path, _option).then(async r => {
      const res = await r.json()
      setIsLoading(false)
      r.ok ? setData(res) : setError(res)
    })
  }

  useEffect(() => {
    if (enable) {
      if (timeSpan.current) {
        if (!bussy.current) {
          bussy.current = true;
          setTimeout(() => (bussy.current = false), timeSpan.current);
          _send()
        }
      }
      else if (lag.current) {
        clearTimeout(timer.current)
        timer.current = setTimeout(_send, lag.current)
      }
      else
        _send()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [enable])

  return { send, data, isLoading, error, setPath }
}
export const useGetBrowser = (path, conf = {}) => {
  let { headers, obj, ...other } = conf
  headers ??= {}
  const output = _useBrowser(path, {
    headers: {
      ...option.headers,
      ...headers
    },
    ...other
  })
  return obj ? output : Object.values(output)
}
export const usePostBrowser = (path, body, conf = {}) => {
  let { csrf, headers, obj, ...other } = conf
  headers ??= {}
  const output = _useBrowser(path, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      ...option.headers,
      "X-CSRF-TOKEN": csrf,
      ...headers
    },
    ...other,
  })
  return obj ? output : Object.values(output)
}
const Browser = {

  // async post(path, data) {
  //   return fetch(process.env.NEXT_PUBLIC_BACKEND_URL + path, {
  //     method: 'POST',
  //     credentials: "same-origin",
  //     body: data instanceof FormData ? data : JSON.stringify(data),
  //     headers: {
  //       origin: 'localhost',
  //       Cookie: (await import('next/headers')).cookies().toString(),
  //       Accept: 'application/json',
  //       'Content-Type': data instanceof FormData ? undefined : 'application/json'
  //     },
  //   }).then(r => r.json())
  // },
}
export default useBrowser