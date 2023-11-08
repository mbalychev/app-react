import { TMultiplesRes, multiples } from "../../functions/algorithms/multiples";
import { List, Typography } from "antd";

export const MultiplesComp = () => {
    const {Title} = Typography;

    const resMultiples = (number: number): TMultiplesRes => {
        return multiples(number);
    }

    const example = () => {
        const res:TMultiplesRes = resMultiples(10);
        return <div>
        <List 
            dataSource={res.multiples} 
            renderItem={(num) => <>{num}</>} 
            />
            {`res: ${res.summ}`}
        </div>
    }
    return <div>
        <Title level={5}>Multiples</Title>
        {example()}
    </div>
}