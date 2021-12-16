import { useTranslation } from 'react-i18next'
import useTimeZone from '../../hooks/useTimeZone'
import moment from 'moment'
import { get } from 'lodash'
import React from 'react'

const TimeZone = () => {
  const { t } = useTranslation();

  const { getTimeZoneData, timeZone, isLoading, error } = useTimeZone()
  const date = get(timeZone, `dateCreated`)
  const createdDate = moment(date).format('DD-MM-YYYY')
  const createdTime = moment(date).format('HH:mm:ss')

  return (
    <div className="App">
      <form>
        <button onClick={getTimeZoneData}>{t(`utils.getDataTimeZone`)}</button>
      </form>
      <pre>
        {isLoading && 'Загрузка данных'}
        {!isLoading && JSON.stringify(timeZone) !== '{}' && JSON.stringify(timeZone)}
        {error && !isLoading && error}
      </pre>
      {t('timeZone.date')}: {createdDate}
      <br/>
      {t('timeZone.time')}: {createdTime}
    </div>
  );
}

export default TimeZone;
