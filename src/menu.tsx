import { MailOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import './styles/common.css'

const DivMenu = styled(Menu)`
height: 5vh;
background-color: #391085;
color: white;
`


export const MainMenu = () => {

    const [current, setCurrent] = useState('arrays');
    const navigate = useNavigate();

    const items: MenuProps['items'] = [
      {
        label: 'Arrays',
        key: 'arrays',
        icon: <></>
      },{
        label: 'Algoritms',
        key: 'algoritms',
        icon: <></>
      }
    ]
  
    const onClick: MenuProps['onClick'] = (item) => {
      navigate(item.key)
      setCurrent(item.key);
    };
  
    return  <DivMenu 
            mode='horizontal'
            items={items} theme='dark'
            selectedKeys={[current]}
            onClick={(item) => onClick(item)}
            />
}