import React, { memo, useRef, lazy, Suspense } from 'react';
import telegrammIcon from '../../public/icons/telegrammIcon.png'
import emailIcon from '../../public/icons/emailIcon.png'
import {
    ContainerProject,
    HeaderH4,
    List,
    ListItem,
    Label,
    Value,
    Paragraph,
    OrderedList,
    OrderedListItem,
    SmallIcon,
    HeaderH3,
    LinkToDiv,
    LinkToAnotherSrc
} from '../../styles/common.style';
import { LinkDiv, PhotoBlock, SkillTag, SubHeader } from './mainPage.style';
import Loading from '../../components/loading';
const MyPhoto = lazy(() => import('./photo'));

const MainPage = () => {
    const skills = [
        'C#', 'MS SQL', 'Entity Framework', 'ASP.NET', 'MS Visual Studio', 'Git', 'ООП',
        'ASP.NET Core', 'React TS', 'REST API', 'ReactJS', 'HTML5', 'JSON API',
        'Redux', 'CSS3', 'TypeScript',
    ];

    const contactsRef = useRef<HTMLDivElement>(null);

    return (
        <ContainerProject>
            <HeaderH3 style={{ textAlign: 'center' }}>Здравствуйте и добро пожаловать на мой сайт!</HeaderH3>
            <PhotoBlock ref={contactsRef}>
                <Suspense fallback={<Loading />}>
                    <MyPhoto />
                </Suspense>
                <HeaderH4>Михаил Балычев</HeaderH4>
                <SubHeader>разработчик</SubHeader>
                <LinkDiv ref={contactsRef}>
                    <SmallIcon src={telegrammIcon} alt="Telegram" />
                    <LinkToAnotherSrc href="https://t.me/+79157004030">+79157004030</LinkToAnotherSrc>
                </LinkDiv>
                <LinkDiv>
                    <SmallIcon src={emailIcon} alt="Email" />
                    <LinkToAnotherSrc href="mailto:mbalychev@yandex.ru">mbalychev@yandex.ru</LinkToAnotherSrc>
                </LinkDiv>
            </PhotoBlock>

            <Paragraph>
                Здесь вы найдете подробную информацию о моих навыках и опыте в сфере программирования. На этом ресурсе представлены:
                <List>
                    <ListItem>
                        Мое портфолио с примерами реализованных проектов
                    </ListItem>
                    <ListItem>
                        Список технологий и языков программирования, которыми я владею
                    </ListItem>
                    <ListItem>
                        Описание моего опыта работы в различных областях разработки
                    </ListItem>
                    <ListItem>
                        Информация о моем образовании и профессиональном развитии
                    </ListItem>
                </List>
                Надеюсь, этот сайт поможет вам составить полное представление о моих возможностях как разработчика. Если у вас возникнут вопросы или предложения о сотрудничестве, не стесняйтесь
                <LinkToDiv onClick={() => contactsRef.current?.scrollIntoView({ behavior: 'smooth' })}>связаться</LinkToDiv> со мной.
                Приятного просмотра!
            </Paragraph>

            <HeaderH4>Опыт работы</HeaderH4>
            <Paragraph>
                Я имею более 3 лет опыта работы в качестве разработчика. Работал в таких компаниях, как ООО "Профессиональный партнер", ООО ИК "СИБИНТЕК" и других.
            </Paragraph>

            <Paragraph>
                <strong>Последний проект:</strong> Разработка веб-интерфейса внутренней CRM-системы для ООО "Профессиональный партнер" с использованием следующих технологий:
            </Paragraph>

            <List>
                {['React 18.2', 'TypeScript 4.6', 'effector (state-менеджер)', 'styled-components', 'CSS', 'HTML', 'react-query (кеширование данных)', 'fetch (запросы к API)', 'dayjs (работа с датами)', 'react-router-dom (навигация)', 'socket.io-client (получение сообщений от сервера)'].map((tech) => (
                    <ListItem key={tech}>{tech}</ListItem>
                ))}
            </List>

            <HeaderH4>Образование</HeaderH4>
            <Paragraph>
                Высшее образование: Комсомольский-на-Амуре государственный технический университет, специальность "Программное обеспечение вычислительной техники и автоматизированных систем".
            </Paragraph>

            <HeaderH4>Ключевые навыки</HeaderH4>
            <List>
                <ListItem>
                    <Label>Языки:</Label>
                    <Value>Русский (родной)</Value>
                </ListItem>
                <ListItem>
                    <Label>Навыки:</Label>
                    <Value>
                        {skills.map((skill) => (
                            <SkillTag key={skill}>{skill}</SkillTag>
                        ))}
                    </Value>
                </ListItem>
            </List>

            <HeaderH4>Дополнительная информация</HeaderH4>
            <Paragraph>
                Готов к работе на удаленной основе (организованное рабочее место, стабильная связь). Готов выполнить тестовое задание.
            </Paragraph>
            <Paragraph>
                Примеры моих работ:
            </Paragraph>
            <OrderedList>
                <OrderedListItem>
                    <strong>WebAPI</strong> (ASP.NET, C#, Entity Framework Core, PostgreSQL):{' '}
                    <LinkToAnotherSrc href="https://github.com/mbalychev/flights" target="_blank" rel="noopener noreferrer">
                        https://github.com/mbalychev/flights
                    </LinkToAnotherSrc>
                </OrderedListItem>
                <OrderedListItem>
                    <strong>FrontEnd</strong> (React, TypeScript):{' '}
                    <LinkToAnotherSrc href="https://github.com/mbalychev/flights.front" target="_blank" rel="noopener noreferrer">
                        https://github.com/mbalychev/flights.front
                    </LinkToAnotherSrc>
                </OrderedListItem>
            </OrderedList>
        </ContainerProject>
    );
};

export default memo(MainPage);