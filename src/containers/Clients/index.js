import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clientsActions } from '../../store/Clients';

const actions = {
  getClients: clientsActions.getClients,
};

const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
