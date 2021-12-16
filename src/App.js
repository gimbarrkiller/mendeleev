import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from './i118n'
import { Provider } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'

import store from './store'

import Header from './component/header/header'
import Form from './component/form/form'
import TimeZone from './component/timeZone/timeZone'
import Profile from './component/profile/profile'
import ChatPage from './component/ChatPage/ChatPage'
import FlexGrid from './component/flexGrid/flexGrid'

import styles from './app.module.scss'

function App() {
  const { t } = useTranslation()
  const changeLanguage = (language) => {
    localStorage.setItem('lang', language)
    i18n.changeLanguage(language).then()
  }
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.App}>
          <button onClick={() => changeLanguage("en")}>{t(`lang.en`)}</button>
          <button onClick={() => changeLanguage("ru")}>{t(`lang.ru`)}</button>
          <hr />
          <Header />
          <section className={styles.headSection}>
            <Route path='/profile' component={Profile}/>
            <Route path='/timeZone' component={TimeZone}/>
            <Route path='/form' component={Form}/>
            <Route path='/flexBox' component={FlexGrid}/>
            <Route path='/chat' component={ChatPage}/>
          </section>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
