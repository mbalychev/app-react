import { FC } from "react"
import { Header4, Li, Ol, P, Ul } from "../../../../styles/common.style"

const WebApiProject: FC = () => {

    return <>
        <Header4>
            Четение данныез из БД
        </Header4>
        <Ul>
            <Li>
                тип проекта:&emsp;Web API
            </Li>
            <Li>
                архитектура:&emsp;Rest
            </Li>
            <Li>
                стек:&emsp;C#,LINQ
            </Li>
            <Li>
                база данных:&emsp;Posgress
            </Li>
            <Li>
                библиотеки:&emsp;Entity framework
            </Li>
            <Li>
                цель:&emsp;Предоставление данных по запросу
            </Li>
            <Li>
                документорование:&emsp;swagger
            </Li>
        </Ul>
        <P>
            Используя протокол HTTP клиент отправляет запрос на сервер, используя соответсвующий метод (POST, GET..).
            При обмене данных используется формат JSON.
            Приложение обрабатывает запрос следующим способом:
            <Ol>
                <Li>
                    валидация токена
                </Li>
                <Li>
                    валидация модели запроса (типизация данных)
                </Li>
                <Li>
                    запрос к базе данных используя EF, LINQ
                </Li>
                <Li>
                    отправка ответа на запрос
                </Li>
            </Ol>
        </P>
    </>
}

export default WebApiProject;