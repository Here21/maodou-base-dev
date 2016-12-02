import { useDeps } from 'react-simple-di';
import { withRedux, composeAll, withLifecycle } from 'react-komposer-plus';
import Footer from '../../components/layout/footer';

const mapStateToProps = (state) => ({

});

const depsToProps = (context, actions) => ({
  context,
  setLanguage: actions.core.setLanguage
});

export default composeAll(
  withRedux(),
  useDeps()
)(Footer);
