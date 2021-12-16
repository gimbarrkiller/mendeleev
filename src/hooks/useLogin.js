import axios from "axios";
import {useState} from "react";

const useLogin = () => {
  const [email, setEmail] = useState()
  const getLoginData = (emails) => {
    var formData = new FormData();
    formData.append('email', emails.name);
    formData.append('age', emails.age);

    axios
      .get('http://localhost:8000/login')
      .then(response => {
        setEmail(response.data)
      })

    const request = new XMLHttpRequest();
    const reqReadyStateChange = () => {
      if (request.readyState === 4 && request.status === 200)
        console.log('запрос отправлен')
    }

    request.open("POST", "http://localhost:8000/login-post");
    request.onreadystatechange = reqReadyStateChange;
    request.send(formData);
  }

  return { email, getLoginData }
}

export default useLogin