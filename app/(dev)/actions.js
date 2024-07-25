'use server'
import { revalidateTag } from 'next/cache'

const clearCache = async tag => revalidateTag(tag)

export {
  clearCache
}