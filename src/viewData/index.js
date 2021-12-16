import useProfile from '../hooks/useProfile'
import { useTranslation } from 'react-i18next'

const GetViewAllData = () => {
  const { t } = useTranslation()
  const {getProfileData, profile} = useProfile()

  return (
    <div className="App">
      <form>
        <button onClick={getProfileData}>{t(`utils.getDataProfile`)}</button>
      </form>
      <pre>
        {JSON.stringify(profile)}
      </pre>
    </div>
  )
}

export default GetViewAllData
