import { List, Typography } from 'antd';

export interface ILink {
    link: string;
    title: string;
    decriptions: string;
}
export const ArraysPage = () => {
    const { Text, Link, Title } = Typography;

    const listsLinks: ILink[] = [{
        link: '/algoritms',
        title: 'algoritms',
        decriptions: 'algoritms and more'
    }]

    return <div>
        <Title level={4}>
            Массивы
        </Title>
        <List
            dataSource={listsLinks}
            renderItem={(link: ILink) => <Link title={link.title}>{link.title}</Link>}
        />
    </div>
}