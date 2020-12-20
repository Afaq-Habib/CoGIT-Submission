import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Contact from './Account'
import Reviews from './Reviews'
import Account from './Account'
import Requests from './Requests'
import Orders from './Orders'
import History from './History'
import Articles from './Articles'
import { connect } from 'react-redux'

class MainLayout extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <Header/>
          <ActiveComponent activeTab={this.props.activeTab} />
        </div>
      </Wrapper>
    )
  }
}

const ActiveComponent = tab => {
  return tab.activeTab === 'About' ? (
    <About />
  ) : tab.activeTab === 'Projects' ? (
    <Projects />
  ) : tab.activeTab === 'Contact' ? (
    <Contact />
  ) : tab.activeTab === 'Reviews' ? (
    <Reviews />
  ) : tab.activeTab === 'Account' ? (
    <Account />
  ) : tab.activeTab === 'Requests' ? (
    <Requests />
  ) : tab.activeTab === 'Orders' ? (
    <Orders />
  ) : tab.activeTab === 'History' ? (
    <History />
  ) : (
    <Articles />
  )
}

const mapStateToProps = state => {
  return {
    activeTab: state.activeTab
  }
}

export default connect(mapStateToProps)(MainLayout)

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
  }
`
