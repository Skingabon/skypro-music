const url = "https://webdev-music-003b5b991590.herokuapp.com";
// https://webdev-music-003b5b991590.herokuapp.com
// https://skypro-music-api.skyeng.tech
export function signup({ email, password, username }) {
    return fetch(url + "/user/signup/", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            username: username,
        }),
        headers: {
            // API требует обязательного указания заголовка content-type, 
            // так апи понимает что мы посылаем ему json строчку в теле запроса
            "content-type": "application/json",
        },
    })
        .then((response) => response.json());

}


export function signIn({ email, password }) {
    return fetch(url + "/user/login/", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
            // API требует обязательного указания заголовка content-type, 
            // так апи понимает что мы посылаем ему json строчку в теле запроса
            "content-type": "application/json",
        },
    })
        .then((resp) => {
            if (resp.status === 401) {
                throw new Error("Пользователь с таким email или паролем не найден")
            }
            if (resp.status === 400) {
                throw new Error("Некорректно введены данные")
            }
            if (resp.status === 500) {
                throw new Error("Сервер не доступен")
            }
            if (!resp.ok) {
                throw new Error("Что-то пошло не так")
            }
            // console.log(resp);
            return resp.json();
        })
        .then((resp) => {
            return { response: resp, error: "" };
        })
        .catch((error) => {
            return { response: "", error: error.message }
        });
}

export function accessToken({ email, password }) {
    return fetch(url + "/user/token/", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,

        }),
        headers: {
            // API требует обязательного указания заголовка content-type, 
            // так апи понимает что мы посылаем ему json строчку в теле запроса
            "content-type": "application/json",
        },
    }).then((resp) => {
        return resp.json();
    })
}
