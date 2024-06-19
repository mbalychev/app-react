import { List, Typography } from 'antd';
import { FC, memo } from 'react'
export interface ILink {
    link: string;
    title: string;
    decriptions: string;
}

const ArraysPage: FC = () => {
    const { Text, Link, Title } = Typography;

    const listsLinks: ILink[] = [{
        link: '/algoritms',
        title: 'algoritms',
        decriptions: 'algoritms and more'
    }]

    return <div>
        <Title level={3}>
            Массивы
        </Title>
        <List
            dataSource={listsLinks}
            renderItem={(link: ILink) => <Link title={link.title}>{link.title}</Link>}
        />
    </div>
}

export default memo(ArraysPage);