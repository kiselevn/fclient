import { Select } from '../../../../components';
import styled from './styles.module.scss';

const Client = ({ client, status, editStatus, clientKey }) => {
  const clientName = `${client[1].lastName} ${client[1].firstName} ${client[1].patronymic}`;

  return (
    <div className={styled.client}>
      <div className={styled.clientName}>{clientName}</div>
      <div className={styled.clientStatus}>
        <span>Статус:</span>
        <Select
          options={status}
          defaultValue={client[1].status}
          editValue={editStatus}
          editedKey={clientKey}
        />
      </div>
    </div>
  );
};

export default Client;
