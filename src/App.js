import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/Main'
import { Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/Education">Education</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Experience">Experience</Link>
               
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Portfolio</Link>}>
            <Navigation>
                <Link to="/Education">Education</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Experience">Experience</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
