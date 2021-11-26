import { Component } from 'react';

import { Client } from '../../components';

export default class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderClients() {
    const { clients } = this.props;

    if (clients) {
      const comp = [];
      for (let client of clients) {
        comp.push(<Client client={client} />);
      }

      return comp;
    }

    return;
  }

  render() {
    return <div>{this.renderClients()}</div>;
  }
}
