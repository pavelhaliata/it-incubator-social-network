import axios from "axios";

export const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
	  "API-KEY": "29259",
	},
  });


  instance.get("users")
  .then((response) => {
    console.log(response.data.items);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  });

