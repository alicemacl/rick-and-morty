import axios from 'axios'
import { useEffect, useState } from 'react'

const useApi = <T = unknown>(apiFunction: Function) => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const request = async (...args: unknown[]) => {
    try {
      setLoading(true)
      setError(false)
      const response = await apiFunction(...args)
      setData(response)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  return { data, error, loading, request }
}

export default useApi
