
import wx, {Component, PropTypes} from 'labrador-immutable'
import {connect} from 'labrador-redux'
import SwitchCom from '../../components/switchCom/switchCom'



const { func, string, object, bool } = PropTypes;

class OnlineSign extends Component {
  static propTypes = {

  }
  children() {
    return {
      switchCom: {
        component: SwitchCom,
        props: {
          switchTo: '1'
        }
      }
    }
  }
  
}

const mapStateToProps = (state) => ({
 
})

const mapDispatchToProps = (dispatch) => ({
  
})


export default connect(mapStateToProps, mapDispatchToProps)(OnlineSign);

