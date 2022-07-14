import { useEffect, useState } from 'react'

export const useInfiniteScroll = (callback, loadingData, allowScroll) => {
  const [isFetching, setIsFetching] = useState(false)

  const handleScroll = () => {
    if (
      window.innerHeight + window.document.documentElement.scrollTop + 1 >=
        window.document.documentElement.scrollHeight &&
      !loadingData
    ) {
      setIsFetching(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isFetching && allowScroll) {
      callback()
    }
  }, [isFetching, allowScroll])

  return [setIsFetching]
}
