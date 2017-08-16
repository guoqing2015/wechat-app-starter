import wx, { Component, PropTypes } from 'labrador-immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'labrador-redux';
import { sleep } from '../../utils/utils';

const { array, func } = PropTypes;

class Index extends Component {
  

  navToDemoAjax() {
    wx.navigateTo({ url: '/pages/demoAjax/index' });
  }

  navToDemoCouter() {
    wx.navigateTo({ url: '/pages/demoCouter/index' });
  }

  handleShowUI() {
    wx.navigateTo({ url: '/pages/ui/index' });
  }
}

export default connect(
  () => ({}),
  (dispatch) => bindActionCreators({
  }, dispatch)
)(Index);
