import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clientsActions } from '../../store/Clients';
import { statusActions } from '../../store/Status';

const actions = {
  getClients: clientsActions.getClients,
  getStatus: statusActions.getStatus,
  editClientStatus: clientsActions.editClientStatus,
};

const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients,
  status: state.statusReducer.status,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
