import { FC, memo } from "react";
import { MainDiv } from "./programmPage.styles";
import { HeaderH1 } from "../styles/common.style";
import WebApiProject from "../components/array/menu/programming/webApiProject";

const ProgrammPage: FC = () => {

    return <MainDiv>
        <WebApiProject />
    </MainDiv>
}

export default memo(ProgrammPage);