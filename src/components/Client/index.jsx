function Client({ client }) {
  return <div key={client[0]}>{client[1].firstName}</div>;
}

export default Client;
