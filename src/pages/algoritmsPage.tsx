import { List, Typography } from 'antd';
import { memo, FC } from 'react';

export interface ILink {
    link: string;
    title: string;
    decriptions: string;
}
const AlgoritmsPage: FC = () => {
    const { Text, Link } = Typography;

    const listsLinks: ILink[] = [{
        link: '/algoritms',
        title: 'algoritms',
        decriptions: 'algoritms and more'
    }]

    return <>
        <Typography.Title level={3}>Алгоритмы</Typography.Title>
        <List
            dataSource={listsLinks}
            renderItem={(link: ILink) => <Link title={link.title}>{link.title}</Link>}
        />
    </>
}

export default memo(AlgoritmsPage)