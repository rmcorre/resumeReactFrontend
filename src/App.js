import React, { Component } from 'react';
import axios from 'axios';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Avatar from './components/Avatar/Avatar';
import Summary from './components/Summary/Summary';
import Contact from './components/Contact/Contact';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Concept from './components/CoreConcepts/Concept';
import ToolsAndTech from './components/ToolsAndTech/ToolsAndTech';

import AppStyles from './App.module.css';

class App extends Component {
  state = {
    profile: null,
    summaries: [],
    concepts: [
      { id: 1, name: 'OOP Principles' },
      { id: 2, name: 'Domain Modeling' },
      { id: 3, name: 'RDBMS Design' },
      { id: 4, name: 'Design Patterns' },
      { id: 5, name: 'Software Architecture' }
    ],
    toolsAndTech: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ]
  }

  componentDidMount() {
    // http://localhost:8080
    // http://192.168.1.73:8080

    axios.get('http://localhost:8080/profiles')
      .then(response => {
        console.log(response.data.filter(profile => profile.id === 2));
        this.setState({profile: response.data.filter(profile => profile.id === 2)});
      });

    axios.get('http://localhost:8080/summaries')
      .then(response => {
        this.setState({ summaries: response.data });
      });
  }

  render() {

    if (this.state.profile === null) {
      return null;
    }

    const summary = this.state.summaries
      .filter(summary => summary.id === 1)
      .map(summary => {
        return <Summary
          key={summary.id}
          summary={summary.summary}
        />
      });

    const concepts = (
      <div className="d-flex justify-content-between flex-wrap">
        {this.state.concepts.map((concept) => {
          return <Concept
            key={concept.id}
            name={concept.name}
          />
        })}
      </div>
    );

    return (
      <MDBContainer fluid>
        <MDBRow>
          <header></header>
        </MDBRow>
        <MDBRow className="min-vh-100">
          <MDBCol md="3" className={AppStyles.sidebar}>
            <aside>
              <Avatar identity={this.state.profile['0'].identity} role={this.state.profile['0'].role}/>
              {summary}
              <Contact />
            </aside>
          </MDBCol>
          <MDBCol md="6" className={AppStyles.main}>
            <main>
              .main-content
            </main>
          </MDBCol>
          <MDBCol md="3" className={AppStyles.sidebar}>
            <aside>
              <CoreConcepts concepts={concepts} />
              <ToolsAndTech />
            </aside>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <footer></footer>
        </MDBRow>
      </MDBContainer>
    );
  }

}

export default App;
