import { Link, useNavigate } from "react-router-dom";
import * as S from "./authPage.styled.jsx";
import React, { useEffect, useState } from "react";
import { signIn, signup } from "../../Api/auth.js";
import { useTrackContext } from "../../context/track.jsx";

export function AuthPage({ isLoginMode = false }) {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { setLSandState } = useTrackContext();


    const handleLogin = async ({ email, password }) => {
        //  alert(`Выполняется вход: ${email} ${password}`);
        // setError("Неизвестная ошибка входа");

        if (isValid([email, password])) {
            setError(["Заполните все поля"])
            return
        }

        signIn({ email, password }).then((data) => {
            console.log(data);
            if (data.error) {
                setError(data.error)
                return
            }
           
            setLSandState(data.response)
            navigate("/")

        })


    };


    function isValid(arrayField) {
        return arrayField.some(el => el === "")
    }

    const handleRegister = async () => {
        if (isValid([email, password, repeatPassword])) {
            setError(["Заполните все поля"])
            return
        }
        if (password !== repeatPassword) {
            setError(["Пароли не совпадают"])
            return
        }
        setIsLoading(true)

        signup({ email, password, username: email })
            .then((resp) => {
                if (resp?.password || Array.isArray(resp?.email)) {
                    setIsLoading(false)

                    setError([resp.password, resp.email].flat(Infinity))
                    return
                }
                // console.log(resp);
                setIsLoading(false)
                navigate("/login")
            })

    };
    // console.log(error);



    // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
    useEffect(() => {
        setError(null);
    }, [isLoginMode, email, password, repeatPassword]);

    return (
        <S.PageContainer>
            <S.ModalForm>
                <Link to="/login">
                    <S.ModalLogo>
                        <S.ModalLogoImage src="/img/logo192.png" alt="logo" />
                    </S.ModalLogo>
                </Link>
                {isLoginMode ? (
                    <>
                        <S.Inputs>
                            <S.ModalInput
                                type="text"
                                name="login"
                                placeholder="Почта"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </S.Inputs>
                        {error && <S.Error>{error}</S.Error>}
                        <S.Buttons>
                            <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                                Войти
                            </S.PrimaryButton>
                            <Link to="/registration">
                                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
                            </Link>
                        </S.Buttons>
                    </>
                ) : (
                    <>
                        <S.Inputs>
                            <S.ModalInput
                                type="text"
                                name="login"
                                placeholder="Почта"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                            <S.ModalInput
                                type="password"
                                name="repeat-password"
                                placeholder="Повторите пароль"
                                value={repeatPassword}
                                onChange={(event) => {
                                    setRepeatPassword(event.target.value);
                                }}
                            />
                        </S.Inputs>
                        {error && error.map((el, i) => (
                            <S.Error key={i}>{el}</S.Error>
                        ))}
                        <S.Buttons>
                            <S.PrimaryButton onClick={handleRegister} disabled={isLoading}>
                                {!isLoading ? "Зарегистрироваться" : "Загрузка..."}
                            </S.PrimaryButton>
                        </S.Buttons>
                    </>
                )}
            </S.ModalForm>
        </S.PageContainer>
    );
}

//пишу API
//По кнопке выход обнуляю данные юзера (cintext)
//обработка ошибок 
