import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { SET_PROFILE_DATA } from '../store/actions'

const useProfile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const profile = useSelector((state) => state.profile)

  const getProfileData = (e) => {
    setIsLoading(true)
    e.preventDefault()
    axios
      .get('http://localhost:8000/profile')
      .then(response => {
        setIsLoading(false)
        setError(null)
        dispatch({
          type: SET_PROFILE_DATA,
          data: response.data.profile,
          payload: response.data.profile,
        })
      })
      .catch(() => {
        setIsLoading(false)
        setError('Ошибка при загрузке данных')
      })

  }

  return { isLoading, getProfileData, profile, error }
}

export default useProfile