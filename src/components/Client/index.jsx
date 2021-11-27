import styled from './styles.module.scss';

function Client({ client }) {
  return <div className={styled.client}>{client[1].firstName}</div>;
}

export default Client;
