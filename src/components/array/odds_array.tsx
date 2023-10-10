import '../../styles/common.css';
import { useMemo, useState } from "react"
import { oddOnesOut, solutionCode, taskText } from "../../functions/array/odds_array";
import { List, Tag, Typography } from "antd";
const { Text, Paragraph } = Typography;

interface ITamplate {
    req: number[];
    ans: number[];
    res: number[];
}


export const OddsArray = () => {
    
    const example: ITamplate[] = [
        { req: [1, 1, 2, 2, 3, 3, 3], ans: [1, 1, 2, 2], res: [] },
        { req: [26, 23, 24, 17, 23, 24, 23, 26], ans: [26, 24, 24, 26], res: [] },
        { req: [1, 2, 3], ans: [], res: [] },
        { req: [1], ans: [], res: [] },
    ];
    
    const res = (): ITamplate[] => {
        const r: ITamplate[] = [];
        example.forEach(x => r.push({
            ...x,
            res: oddOnesOut(x.req)
        }
        ));
        return r;
    }
    
    const resTag = (a: number[], b: number[]): JSX.Element => (
        (a.toString() === b.toString()) ? <Tag color={'green'} bordered={false} style={{ opacity: '0.5', marginLeft: '10px' }}>ok</Tag> : <Tag color={'red'} bordered={false} style={{ opacity: '0.5', marginLeft: '10px' }}>wrong</Tag>
    )
    
    
    interface Order {
        id: string;
        createdAt: Date;
        items: string[];
      }


    return <div className='paragraph display-linebreak'>
        <h3>oddOnesOut</h3>
        <h3>7 kyu</h3>
        <h5>
            Задача
        </h5>
        <div className='taskParagrph'>
            <Text type='secondary'>
                {taskText}
            </Text>
        </div>
        <h5>
            Решение
        </h5>
        <Paragraph code className='display-linebreak'>
            {solutionCode}
        </Paragraph>
        <h5>
            Тест
        </h5>
        <List
            dataSource={res()}
            renderItem={(e) =>
                <div style={{ textAlign: 'left' }}>
                    request: {e.req};
                    answer: <span style={{ opacity: '0.5', marginLeft: '10px' }}>{e.ans}</span> ?= {e.res}
                    {resTag(e.res, e.ans)}
                </div>
            }
        />
    </div>
}   