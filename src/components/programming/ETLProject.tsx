import React, { FC } from "react";
import {
    HeaderH4,
    List,
    ListItem,
    Label,
    Value,
    Paragraph,
    OrderedList,
    OrderedListItem
} from "../../styles/common.style";

const ETLProject: FC = () => {
    return (
        <>
            <HeaderH4>Асинхронное ETL-приложение</HeaderH4>
            <List>
                <ListItem>
                    <Label>Тип проекта:</Label>
                    <Value>Консольное приложение</Value>
                </ListItem>
                <ListItem>
                    <Label>Стек:</Label>
                    <Value>C#</Value>
                </ListItem>
                <ListItem>
                    <Label>Библиотеки:</Label>
                    <Value>Entity Framework Core, LINQ</Value>
                </ListItem>
                <ListItem>
                    <Label>База данных:</Label>
                    <Value>Postgre, MongoDB</Value>
                </ListItem>
                <ListItem>
                    <Label>Цель:</Label>
                    <Value>Перенос и преобразование данных</Value>
                </ListItem>
                <ListItem>
                    <Label>Особенности:</Label>
                    <Value>Асинхронные операции, рекуррентные задачи</Value>
                </ListItem>
            </List>
            <Paragraph>
                Приложение выполняет следующие основные функции:
                <OrderedList>
                    <OrderedListItem>Извлечение данных из исходной PostgreSQL базы данных</OrderedListItem>
                    <OrderedListItem>Преобразование типов и форматов данных</OrderedListItem>
                    <OrderedListItem>Загрузка преобразованных данных в целевую PostgreSQL базу</OrderedListItem>
                    <OrderedListItem>Логирование ошибок и успешных операций в MongoDB</OrderedListItem>
                </OrderedList>
            </Paragraph>
            <Paragraph>
                Процесс работы приложения:
                <OrderedList>
                    <OrderedListItem>Периодический запуск с проверкой новых записей</OrderedListItem>
                    <OrderedListItem>Асинхронное выполнение операций с базами данных</OrderedListItem>
                    <OrderedListItem>Вывод информации об ошибках в консоль</OrderedListItem>
                    <OrderedListItem>Запись всех операций (успешных и неуспешных) в MongoDB</OrderedListItem>
                </OrderedList>
            </Paragraph>
        </>
    );
};

export default ETLProject;