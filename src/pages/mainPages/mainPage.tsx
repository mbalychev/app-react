import React, { memo } from 'react';
import photo from '../../public/img/bmm.png'
import { Photo, PhotoBlock } from './mainPage.style';

const MainPage = () => {
    const skills = [
        'C#',
        'MS SQL',
        'Entity Framework',
        'ASP.NET',
        'MS Visual Studio',
        'Git',
        'ООП',
        'ASP.NET Core',
        'React TS',
        'ASP.NET',
        'REST API',
        'ReactJS',
        'HTML5',
        'JSON API',
        'Redux',
        'CSS3',
        'TypeScript',
    ];

    return (
        <div style={{ padding: '20px' }}>
            <PhotoBlock>
                <Photo src={photo} />
                <p>
                    Михаил Балычев<br />
                    Frontend-разработчик
                </p>
            </PhotoBlock>

            <p>
                Добро пожаловать на мою страницу-презентацию! Здесь я расскажу о своих возможностях как программиста, основываясь на моем резюме.
            </p>

            <hr />

            <h2>Опыт работы</h2>
            <p>
                Я имею более 5 лет опыта работы в качестве разработчика. Работал в таких компаниях, как ООО "Профессиональный партнер", ООО ИК "СИБИНТЕК" и других.
            </p>

            <p>
                <strong>Последний проект:</strong> Разработка веб-интерфейса внутренней CRM-системы для ООО "Профессиональный партнер" с использованием следующих технологий:
            </p>

            <ul>
                <li>React 18.2</li>
                <li>TypeScript 4.6</li>
                <li>effector (state-менеджер)</li>
                <li>styled-components</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>react-query (кеширование данных)</li>
                <li>fetch (запросы к API)</li>
                <li>dayjs (работа с датами)</li>
                <li>react-router-dom (навигация)</li>
                <li>socket.io-client (получение сообщений от сервера)</li>
            </ul>

            <hr />

            <h2>Образование</h2>
            <p>
                Высшее образование: Комсомольский-на-Амуре государственный технический университет, специальность "Программное обеспечение вычислительной техники и автоматизированных систем".
            </p>

            <hr />

            <h2>Ключевые навыки</h2>
            <p>
                <strong>Языки:</strong> Русский (родной)
            </p>
            <p>
                <strong>Навыки:</strong>
                {skills.map((skill) => (
                    <span key={skill} style={{ marginRight: '5px', padding: '2px 5px', backgroundColor: 'blue', color: 'white' }}>
                        {skill}
                    </span>
                ))}
            </p>

            <hr />

            <h2>Дополнительная информация</h2>
            <p>
                Готов к работе на удаленной основе (организованное рабочее место, стабильная связь). Готов выполнить тестовое задание.
            </p>
            <p>
                Примеры моих работ:
                <ul>
                    <li>
                        <code>WebAPI</code> (ASP.NET, C#, Entity Framework Core, PostgreSQL):{' '}
                        <a href="https://github.com/mbalychev/flights" target="_blank" rel="noopener noreferrer">
                            https://github.com/mbalychev/flights
                        </a>
                    </li>
                    <li>
                        <code>FrontEnd</code> (React, TypeScript):{' '}
                        <a href="https://github.com/mbalychev/flights.front" target="_blank" rel="noopener noreferrer">
                            https://github.com/mbalychev/flights.front
                        </a>
                    </li>
                </ul>
            </p>
        </div>
    );
};

export default memo(MainPage);