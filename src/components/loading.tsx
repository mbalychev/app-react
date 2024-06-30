import { FC } from "react";
import loading from '../public/gifs/loading.gif';
import { colors } from "../styles/common.style";

const Loading: FC = () => {

    return <img src={loading} alt='nom' style={{ color: colors.primary }} />
}

export default Loading;