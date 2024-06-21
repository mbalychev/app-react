import { FC, memo } from 'react'
import { Container, Description, TechIcon, TechItem, TechList, Title } from './aboutPage.style';

const AboutPage: FC = () => {
    return (
        <Container>
            <Title>Описание сайта</Title>
            <Description>
                <p>
                    Сайт имеет адаптивную разметку под мобильные устройства и оптимизирован для работы с медленным интернет-соединением.
                </p>
                <p>
                    Этот сайт был создан в качестве демонстрации навыков в программировании. Он был разработан с использованием следующих технологий:
                </p>
            </Description>
            <TechList>
                <TechItem>
                    <TechIcon
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
                        alt='Visual Studio Code' />
                    <strong>MS Visual Code</strong> - популярный код-редактор для разработки программного обеспечения.
                </TechItem>
                <TechItem>
                    <TechIcon src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='React' />
                    <strong>React 18.2</strong> - библиотека JavaScript для создания пользовательских интерфейсов.
                </TechItem>
                <TechItem>
                    <TechIcon
                        src='data:image/jpeg;base64,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'
                        alt='Effector' />
                    <strong>Effector</strong> - библиотека для управления состоянием в React-приложениях.
                </TechItem>
                <TechItem>
                    <TechIcon src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' alt='TypeScript' />
                    <strong>TypeScript</strong> - язык программирования, который является надстройкой над JavaScript, добавляющий статическую типизацию.
                </TechItem>
                <TechItem>
                    <TechIcon src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' alt='CSS3' />
                    <strong>CSS3</strong> - язык стилей для описания внешнего вида веб-страниц.
                </TechItem>
                <TechItem>
                    <TechIcon src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' alt='HTML5' />
                    <strong>HTML5</strong> - язык разметки для создания структуры веб-страниц.
                </TechItem>
                <TechItem>
                    <TechIcon
                        src='data:image/png;base64,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'
                        alt='Styled Components' />
                    <strong>Styled Components</strong> - библиотека для стилизации компонентов React с использованием CSS-in-JS.
                </TechItem>
                <TechItem>
                    <TechIcon
                        src='data:image/png;base64,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'
                        alt='React Router' />
                    <strong>react-router-dom</strong> - библиотека для маршрутизации в React-приложениях.
                </TechItem>
                <TechItem>
                    <TechIcon
                        src='data:image/png;base64,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 '
                        alt='ESLint' />
                    <strong>ESLint</strong> - инструмент для анализа и обеспечения соответствия кода определенным правилам и стандартам.
                </TechItem>
                <TechItem>
                    <TechIcon src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='GitHub' />
                    <strong>GitHub</strong> - веб-сервис для хостинга IT-проектов и их совместной разработки.
                </TechItem>
            </TechList>
        </Container>
    );
};

export default memo(AboutPage);