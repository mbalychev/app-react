import { FC, memo } from "react";
import { MainDiv } from "./programmPage.styles";
import { ContainerProject } from "../styles/common.style";
import WebApiProject from "../components/programming/webApiProject";
import ETLProject from "../components/programming/ETLProject";

const ProgrammPage: FC = () => {

    return <MainDiv>
        <ContainerProject>
            <WebApiProject />
        </ContainerProject>
        <ContainerProject>
            <ETLProject />
        </ContainerProject>
    </MainDiv>
}

export default memo(ProgrammPage);