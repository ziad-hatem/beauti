"use client"
import { useRef } from "react"
const useFormData = () => {
  const ref = useRef(null)
  const formData = (obj = false) => ref.current && (obj ? Object.fromEntries((new FormData(ref.current)).entries()) : new FormData(ref.current));
  return {
    formData,
    handlers: {
      ref,
    },
  };
}
export default useFormData