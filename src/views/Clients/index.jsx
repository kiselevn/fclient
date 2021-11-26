import { Component } from 'react';

import { ClientsContainer } from '../../containers';
import { Client } from '../../components';
import clients from '../../assets/list.json';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getClients(new Map(Object.entries(clients.list)));
  }

  renderClients(clients) {
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
    const { clients } = this.props;

    return <div>{this.renderClients(clients)}</div>;
  }
}

export default ClientsContainer(Clients);
