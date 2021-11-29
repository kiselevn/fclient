import { Component } from 'react';

import { Client } from './components';
import { SearchBar } from './components';

import { ClientsContainer } from '../../containers';
import { list } from '../../assets/list.json';
import { status } from '../../assets/status.json';
import styled from './styles.module.scss';

const RenderClients = ({ clients, status, editStatus }) => {
  const clientsList = [];

  for (let client of clients) {
    clientsList.push(
      <Client
        key={client[0]}
        client={client}
        status={status}
        clientKey={client[0]}
        editStatus={editStatus}
      />
    );
  }

  return clientsList;
};

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getClients(list);
    this.props.getStatus(status);
  }

  render() {
    const { clients, status, editClientStatus } = this.props;

    return (
      <div className={styled.clients}>
        <SearchBar />
        {clients && (
          <RenderClients
            clients={clients}
            status={status}
            editStatus={editClientStatus}
          />
        )}
      </div>
    );
  }
}

export default ClientsContainer(Clients);
