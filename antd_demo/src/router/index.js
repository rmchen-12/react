import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import style from "./style.scss";
import SiderComponent from "../component/sider";
import HeaderComponent from "../component/header";
import FooterComponent from "../component/footer";

import asyncComponent from "../utils/asyncComponent";
const Table = asyncComponent(() => import("../page/table"));
const Label = asyncComponent(() => import("../page/label"));
const Form = asyncComponent(() => import("../page/form"));
const Carousel = asyncComponent(() => import("../page/carousel"));
const Shop = asyncComponent(() => import("../page/shop"));
const Chart = asyncComponent(() => import("../page/chart"));
const Editor = asyncComponent(() => import("../page/editor"));
const Upload = asyncComponent(() => import("../page/upload"));

const { Header, Footer, Sider, Content } = Layout;

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Table} />
    <Route path="/table" component={Table} />
    <Route path="/label" component={Label} />
    <Route path="/form" component={Form} />
    <Route path="/carousel" component={Carousel} />
    <Route path="/shop" component={Shop} />
    <Route path="/chart" component={Chart} />
    <Route path="/editor" component={Editor} />
    <Route path="/upload" component={Upload} />
    <Route path="/form" render={() => <div>form</div>} />
  </Switch>
);

const GlobalLayout = () => {
  return (
    <Router>
      <div className={style.global}>
        <Layout>
          <Header className={style.header}>
            <HeaderComponent />
          </Header>
          <Layout>
            <Sider className={style.sider}>
              <SiderComponent />
            </Sider>
            <Content className={style.content}>
              <Routes />
            </Content>
          </Layout>
          <Footer className={style.footer}>
            <FooterComponent />
          </Footer>
        </Layout>
      </div>
    </Router>
  );
};

export default GlobalLayout;
