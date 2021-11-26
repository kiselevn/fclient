import { Component } from 'react';

import { Clients } from './views';
import clients from './assets/list.json';
import status from './assets/status.json';

import './App.css';

const defaultState = {
  clients: new Map(Object.entries(clients.list)),
  status: status,
};

class App extends Component {
  constructor() {
    super();
    this.state = defaultState;
  }

  render() {
    const { clients, status } = this.state;

    return (
      <div className="App">
        <Clients clients={clients} status={status} />
      </div>
    );
  }
}

export default App;
