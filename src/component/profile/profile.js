import React from 'react'

import DeclinationDays from '../DeclinationDays/DeclinationDays'
import useProfile from '../../hooks/useProfile'
import { useTranslation } from 'react-i18next'

const Profile = () => {
  const { t } = useTranslation();
  const { isLoading, getProfileData, profile, error } = useProfile()

  return (
    <div className="App">
      <form>
        <button onClick={getProfileData}>{t(`utils.getDataProfile`)}</button>
      </form>
      <pre>
        {isLoading && 'Загрузка данных'}
        {!isLoading && JSON.stringify(profile) !== '{}' && JSON.stringify(profile)}
        {error && !isLoading && error}
      </pre>
      <DeclinationDays />
    </div>
  );
}

export default Profile;
