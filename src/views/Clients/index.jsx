import { Component } from 'react';

import { ClientsContainer } from '../../containers';
import { Client } from '../../components';
import clients from '../../assets/list.json';

function renderClients(clients) {
  const clientsList = [];

  for (let client of clients) {
    clientsList.push(<Client key={client[0]} client={client} />);
  }

  return clientsList;
}

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getClients(new Map(Object.entries(clients.list)));
  }

  render() {
    const { clients } = this.props;

    return clients && <div>{renderClients(clients)}</div>;
  }
}

export default ClientsContainer(Clients);
