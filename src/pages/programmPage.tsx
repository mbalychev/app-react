import { FC, memo } from "react";
import { MainDiv } from "./programmPage.styles";
import { Header1 } from "../styles/common.style";
import WebApiProject from "../components/array/menu/programming/webApiProject";

const ProgrammPage: FC = () => {

    return <MainDiv>
        <Header1>Проекты</Header1>
        <WebApiProject />
    </MainDiv>
}

export default memo(ProgrammPage);