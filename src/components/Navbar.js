import React, { useState } from "react";
import Logo from "../assets/fbcFuchs.png";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import { Layout, Menu, Dropdown, Button, Space } from "antd";
let { Header  } = Layout;
let { Item, SubMenu, ItemGroup } = Menu;

const menu1 = (
  <Menu className="DropdownMenue">
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Kunden
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Partner
      </a>
    </Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Bewerbung
      </a>
    </Menu.Item>
  </Menu>
);

const menu3 = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Leistungen
      </a>
    </Menu.Item>
  </Menu>
);

const menu4 = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Team
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Forum
      </a>
    </Menu.Item>
  </Menu>
);

function Navbar() {
  return (
    
      <Layout>
        <Header>
          <div>FBK</div>
          <Menu>
                <Dropdown overlay={menu1} placement="bottomCenter">
                  <Button>Über Uns</Button>
                </Dropdown>
                <Dropdown overlay={menu2} placement="bottomCenter">
                  <Button>Karriere </Button>
                </Dropdown>
                <Dropdown overlay={menu3} placement="bottomCenter">
                  <Button>Services </Button>
                </Dropdown>
                <Dropdown overlay={menu4} placement="bottomCenter">
                  <Button>Kontakt</Button>
                </Dropdown>
          </Menu>
        </Header>
      </Layout>
   
  );
}

export default Navbar;
