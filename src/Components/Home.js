import Wirkung from "../Wirkungs";
import Spenden from "../Spenden";
import React from "react";
import Header from "./Header";
import Beiträge from "./Beiträge";
import DetailBeitrag from "./DetailBeitrag";
import { Switch, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DigitalZukunft from "./DigitalZukunft";
import "./app.css";
import Chancen from "./Chancen";
import UeberUns from "./UeberUns";
import UeberUnsItem from "./UeberUnsItem";
import { Container } from "react-bootstrap";
import FooterNav from "./FooterNav";
import Partner from "./Partner";
import AfterFooter from "./AfterFooter";

const Home = () => {
  return (
    <div>
      <Chancen />
      <DigitalZukunft />
      <Wirkung />
      <Beiträge />
      <UeberUns />
      <Spenden />
      <FooterNav />
      <Partner />
      <AfterFooter />
    </div>
  );
};

export default Home;
