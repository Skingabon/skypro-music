const url = "https://skypro-music-api.skyeng.tech";

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

