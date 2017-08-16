import wx, { Component, PropTypes } from 'labrador-immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'labrador-redux';

//import { increment, doubleAsyncStart } from './modules/reducer'

import {increment, doubleAsyncStart} from '../../redux/demoCouter/actions';


const { array, func, string, number, object } = PropTypes;

class DemoCouter extends Component {
  constructor() {
    super();
  }

  static propTypes = {
    counter: number,
    increment: func,
    doubleAsyncStart: func,
  };

  static defaultProps = {
    counter: 0,
  };

  state = {

  };

  onUpdate(props) {
    console.log('onUpdate', props)
  }



  handleIncrement(e) {
    this.props.increment(1);
  }

  handledoubleAsyncStart(e) {
    this.props.doubleAsyncStart(this.props.counter);
  }


}

//

//const mapStateToProps = (state) => ( { counter: state.counter } )
const mapStateToProps = function(state) {
  return { counter: state.counter }
}

const mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch(increment(number)),
  doubleAsyncStart: (counter) => dispatch(doubleAsyncStart(counter))
})

//const mapDispatchToProps = (dispatch) => ({
//  increment: (number) => increment(number),
//  doubleAsyncStart
//}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DemoCouter);

