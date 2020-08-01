import React from "react";

import { Layout, Menu } from "antd";
import ContentHeader from "../components/ContentHeader";
import PortFolioLineBreaker from "../components/PortFolioLineBreaker";
import HouseDisplay from "../components/HouseDisplay";

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Contact Us</Menu.Item>
          <Menu.Item key="3">Our Services</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div className="site-layout-background">
          <ContentHeader />
          <PortFolioLineBreaker />
          <HouseDisplay />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Home Vision ©2020 Created by Joshua Obasaju
      </Footer>
    </Layout>
  );
}

export default Home;
