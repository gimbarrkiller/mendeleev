import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import { SET_PROFILE_DATA, SET_LOGIN_DATA } from '../store/actions'

function* fetchUser() {

  try {
    const login = yield axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
    yield put({type: SET_LOGIN_DATA, payload: login.data})
  } catch (e) {
    yield console.log('Нет данных')
  }
}

function* mySaga() {
  yield takeEvery(SET_PROFILE_DATA, fetchUser)
}

export default mySaga

const animalGetter = (animal) => new Promise((resolve, reject) => {
  setTimeout(() => {
    switch (animal) {
      case'/dog': resolve(['dog1', 'dog2', 'dog3']);
        break;
      case'/cat': resolve(['cat1', 'cat2', 'cat3']);
        break;
      default: reject( new Error("животные не найдены"))
    }
  }, 3000)
})

// const allAnimal = animalGetter('/dog').then(resp => console.log(resp)).catch(err => console.error(err))

const showAnimals = async (type) => {
  try {
    const animals = await animalGetter(type)
    console.log(animals.reverse())
  } catch(err) {
    console.error('не могу показать животных')
  }
}


showAnimals('111')

