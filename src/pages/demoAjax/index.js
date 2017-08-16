import wx, {Component, PropTypes} from 'labrador-immutable';
import {connect} from 'labrador-redux';
import {loadRepos} from '../../redux/demoAjax/actions';


const {array, func, string, number, object, bool} = PropTypes;

class DemoAjax extends Component {
  static propTypes = {
    loading: bool,
    // error: PropTypes.oneOfType([
    //   object,
    //   bool,
    // ]),
    // repos
    onSubmitForm: func.isRequired,
    username: string,
    onChangeUsername: func.isRequired
  };

  state = {
    githubUsername: "guoqing2013"
  };

  constructor() {
    super();
  }

  onUpdate(props) {
    //console.log('onUpdate', props);
    if(props.loading) {
      wx.showLoading({
        title: '正在加载'
      });
    } else {
      wx.hideLoading();
    }
  }

  async onReady() {
    this.props.onSubmitForm(this.state.githubUsername);
  }

  onChangeUsername(e) {
    this.setState({githubUsername: e.detail.value});
  }

  search(evt) {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    this.props.onSubmitForm(this.state.githubUsername);
  }

}


// Map the store's state to component's props.
const mapStateToProps = (state) => ({
  repos: state.demoAjax.userData.repositories,
  username: state.demoAjax.currentUser,
  loading: state.demoAjax.loading,
  error: state.demoAjax.error,
});

// Wrap action creator with dispatch method. This way getUserDetails is passed in as props.
const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (name) => {
    dispatch(loadRepos(name));
  }
})

// React-redux connect function connects our react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(DemoAjax);


// export default connect(
//   state => ({
//     // seconds: seconds,
//     // status: state
//   }),
//   (dispatch) => bindActionCreators({
//     getUserDetails: getUserDetails
//   }, dispatch)
// )(DemoAjax);
