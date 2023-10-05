import { useMemo, useState } from "react"
import { oddOnesOut } from "../functions/odds_array";
import { List, Tag } from "antd";
import { red } from "@ant-design/colors";

interface ITamplate {
    req: number[];
    ans: number[];
    res: number[];
}

export const OddsArray = () => {
    const [arr, setArr] = useState<number[]>();
    // const [res, setRes] = useState<ITamplate[]>([])

    const example: ITamplate[] = [
        { req: [1, 1, 2, 2, 3, 3, 3], ans: [1, 1, 2, 2], res: [] },
        { req: [26, 23, 24, 17, 23, 24, 23, 26], ans: [26, 24, 24, 26], res: [] }
    ]

    const res: ITamplate[] = useMemo(() => {
        const r: ITamplate[] = [];
        example.forEach(x => r.push({
            ...x,
            res: oddOnesOut(x.req)
        }
        ));
        return r;
    }, [arr])

    const resTag = (a: number[], b: number[]): JSX.Element => (
        (a.toString() === b.toString()) ? <Tag color={'green'} bordered={false} style={{ opacity: '0.5', marginLeft: '10px' }}>ok</Tag> : <Tag color={'red'} bordered={false} style={{ opacity: '0.5', marginLeft: '10px' }}>wrong</Tag>
    )

    return <>
        <h3>7 kyu</h3>
        <List
            dataSource={res}
            renderItem={(e) =>
                <div style={{ textAlign: 'left' }}>
                    reques: {e.req};
                    answer: <span style={{ opacity: '0.5', marginLeft: '10px' }}>{e.ans}</span> ?= {e.res}
                    {resTag(e.res, e.ans)}
                </div>
            }
        />
    </>
}