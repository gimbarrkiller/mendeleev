import React, { useState } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";

const DeclinationDays = () => {
  const { t } = useTranslation();
  const [days, setDays] = useState(0)
  const [timeZone, setTimeZone] = useState(3)

  const onTimeZone = (e:any) => {
    setTimeZone(e.target.value)
  }
  const time = moment().utcOffset(timeZone * 60).format('DD.MM.YYYY HH:mm:ss')
  return (
    <>
      <input type="number" onChange={(e) => setDays(parseInt(e.target.value, 10))} />
      <p>{t('counter.days', {count: days})}</p>
      <p>{t('timeZone.chooseTimeZone')}</p>
      <select onChange={onTimeZone}>
        <option value="1">+1</option>
        <option value="2">+2</option>
        <option selected value="3">+3</option>
      </select>
      <p>{t('timeZone.nowThisRegion')}: {time}</p>
    </>
  )
}

export default DeclinationDays