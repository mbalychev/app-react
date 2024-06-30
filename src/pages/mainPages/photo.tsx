import { FC } from 'react';
import { Photo } from './mainPage.style';
import photo from '../../public/img/bmm.png';

const PhotoComponent: FC = () => {
    return <Photo src={photo} alt="фото" />;
};

export default PhotoComponent;