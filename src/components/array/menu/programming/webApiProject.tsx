import React, { FC } from "react";
import styled from "styled-components";
import { ContainerProject, HeaderH4, Label, List, ListItem, OrderedList, OrderedListItem, Paragraph, Value } from "../../../../styles/common.style";


const WebApiProject: FC = () => {
    return (
        <ContainerProject>
            <HeaderH4>Чтение данных из БД</HeaderH4>
            <List>
                <ListItem>
                    <Label>Тип проекта:</Label>
                    <Value>Web API</Value>
                </ListItem>
                <ListItem>
                    <Label>Архитектура:</Label>
                    <Value>Rest</Value>
                </ListItem>
                <ListItem>
                    <Label>Стек:</Label>
                    <Value>C#, LINQ</Value>
                </ListItem>
                <ListItem>
                    <Label>База данных:</Label>
                    <Value>Postgres</Value>
                </ListItem>
                <ListItem>
                    <Label>Библиотеки:</Label>
                    <Value>Entity Framework</Value>
                </ListItem>
                <ListItem>
                    <Label>Цель:</Label>
                    <Value>Предоставление данных по запросу</Value>
                </ListItem>
                <ListItem>
                    <Label>Документирование:</Label>
                    <Value>Swagger</Value>
                </ListItem>
            </List>
            <Paragraph>
                Используя протокол HTTP, клиент отправляет запрос на сервер, используя соответствующий метод (POST, GET...).
                При обмене данными используется формат JSON.
                Приложение обрабатывает запрос следующим способом:
                <OrderedList>
                    <OrderedListItem>Валидация токена</OrderedListItem>
                    <OrderedListItem>Валидация модели запроса (типизация данных)</OrderedListItem>
                    <OrderedListItem>Запрос к базе данных используя EF, LINQ</OrderedListItem>
                    <OrderedListItem>Отправка ответа на запрос</OrderedListItem>
                </OrderedList>
            </Paragraph>
        </ContainerProject>
    );
};

export default WebApiProject;