import { MailOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import './styles/common.css'
import iconArray from './icons/icons8-array-32.png';
import iconAlgoritms from './icons/icons8-algorithm-32.png'
import iconBlockChain from './icons/icons8-blockchain-technology-32.png'

const DivMenu = styled(Menu)`
height: 5vh;
background-color: #1b024b;
color: white;
.ant-menu-item-selected {
  background-color: #6236b5;
  color: black;
}
`
const ImgWhite = styled.img`
  filter: invert(1);
`


export const MainMenu = () => {

  const [current, setCurrent] = useState('arrays');
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      label: 'Массивы',
      key: 'arrays',
      icon: <ImgWhite src={iconArray} />
    }, {
      label: 'Алгоритмы',
      key: 'algoritms',
      icon: <ImgWhite src={iconAlgoritms} />
    }, {
      label: 'Прочее',
      key: 'others',
      icon: <ImgWhite src={iconBlockChain} />
    }
  ]

  const onClick: MenuProps['onClick'] = (item) => {
    navigate(item.key)
    setCurrent(item.key);
  };

  return <DivMenu
    mode='horizontal'
    items={items}
    selectedKeys={[current]}
    onClick={(item) => onClick(item)}
  />
}