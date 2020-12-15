import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import T0D0 from '../T0D0';
import Gomoku from '../Gomoku';
import Form from '../Form';
import styled from 'styled-components'

const RouterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: middle;
  width: 100%;
  max-width: 1080px;
  margin: auto;
  padding: 10px;
  font-size: 20px;
  font-family: Courier, Monospace;
  div {
    flex:1;
    margin: auto;
    text-align: center;
  }
  a {
    margin: 5px 20px;
    padding: 10px;
    text-decoration: none;
    color: #122223;
    background: #efefef;
    border-radius: 5px;
  }
`

function SiteRouter() {
  return (
    <Router>
      <RouterNav>
        <h1>
          <Link to="/">REAC21ON</Link>
        </h1>
        <div>
          <b>=</b>
        </div>
        <div>
          <Link to="/T0D0">T0D0</Link>
          <span>
            <b>+</b>
          </span>
          <Link to="/Gomoku">Gomoku</Link>
          <span>
            <b>+</b>
          </span>
          <Link to="/Form">Form</Link>
        </div>
      </RouterNav>
      <Switch>
        <Route path="/T0D0">
          <T0D0 />
        </Route>
        <Route path="/Gomoku">
          <Gomoku />
        </Route>
        <Route path="/Form">
          <Form />
        </Route>
      </Switch>
    </Router>
  )
}

export default SiteRouter;
