import { FC, memo } from "react";
import { MainDiv } from "./programmPage.styles";
import { ContainerProject } from "../styles/common.style";
import WebApiProject from "../components/programming/webApiProject";

const ProgrammPage: FC = () => {

    return <MainDiv>
        <ContainerProject>
            <WebApiProject />
        </ContainerProject>
    </MainDiv>
}

export default memo(ProgrammPage);