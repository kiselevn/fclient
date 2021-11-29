import { Component } from 'react';

import { Client } from './components';
import { SearchBar } from './components';

import { ClientsContainer } from '../../containers';
import { list } from '../../assets/list.json';
import { status } from '../../assets/status.json';

import styled from './styles.module.scss';

const RenderClients = ({ clients, status, editStatus, filteredSurname }) => {
  const clientsList = [];

  const filteredClients = new Map(
    [...clients.entries()]
      .filter((client) => {
        const clientName =
          `${client[1].lastName} ${client[1].firstName} ${client[1].patronymic}`.toLowerCase();

        return filteredSurname ? clientName.includes(filteredSurname) : client;
      })
      .sort((a, b) => ('' + a[1].lastName).localeCompare(b[1].lastName))
  );

  for (let client of filteredClients) {
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

  return clientsList.length ? (
    clientsList
  ) : (
    <div className={styled.notFound}>Клиент не найден</div>
  );
};

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredSurname: '',
    };
  }

  componentDidMount() {
    this.props.getClients(list);
    this.props.getStatus(status);
  }

  filterClients = (surname) => {
    this.setState({ filteredSurname: surname.toLowerCase() });
  };

  render() {
    const { clients, status, editClientStatus } = this.props;
    const { filteredSurname } = this.state;

    return (
      <div className={styled.clients}>
        <SearchBar filterClients={this.filterClients} />
        {clients ? (
          <RenderClients
            clients={clients}
            status={status}
            editStatus={editClientStatus}
            filteredSurname={filteredSurname}
          />
        ) : (
          <div className={styled.notFound}>Нет клиентов</div>
        )}
      </div>
    );
  }
}

export default ClientsContainer(Clients);
