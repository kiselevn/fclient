import { Component } from 'react';

import { ClientsContainer } from '../../containers';
import { Client } from '../../components';
import { list } from '../../assets/list.json';
import { status } from '../../assets/status.json';
import styled from './styles.module.scss';

const RenderClients = ({ clients, status }) => {
  const clientsList = [];

  for (let client of clients) {
    clientsList.push(
      <Client key={client[0]} client={client} status={status} />
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
    const { clients, status } = this.props;

    return (
      clients && (
        <div className={styled.clients}>
          <RenderClients clients={clients} status={status} />
        </div>
      )
    );
  }
}

export default ClientsContainer(Clients);
