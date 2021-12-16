import axios from "axios";
import {SET_PROFILE_DATA, SET_TIME_ZONE_DATA} from "../store/actions";
import {useDispatch, useSelector } from "react-redux";
import {useState} from "react";

const TimeZone = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const dispatch = useDispatch()

  const timeZone = useSelector((state) => state.timeZone)

  const getTimeZoneData = (e) => {
    e.preventDefault()
    setIsLoading(true)
    axios
      .get('http://localhost:8000/timeZone')
      .then(response => {
        setIsLoading(false)
        setError(null)
        dispatch({
          type: SET_TIME_ZONE_DATA,
          data: response.data.timeZone,
        })
      })
      .catch(() => {
        setIsLoading(false)
        setError('Ошибка при загрузке данных')
      })
  }

  return { getTimeZoneData, timeZone, isLoading, error }
}

export default TimeZone