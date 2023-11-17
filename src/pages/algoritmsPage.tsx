import { List, Typography } from 'antd';

export interface ILink {
    link: string;
    title: string;
    decriptions: string;
}
export const AlgoritmsPage = () => {
    const {Text, Link} = Typography;

    const listsLinks:ILink[] = [{
        link: '/algoritms',
        title: 'algoritms',
        decriptions: 'algoritms and more'
    }]

    return <List
    dataSource={listsLinks} 
    renderItem={(link: ILink) => <Link title={link.title}>{link.title}</Link>}
    />
}