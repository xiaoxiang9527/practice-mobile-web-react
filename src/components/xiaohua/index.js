import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import actionsCommon from '../../stores/actions/action-common';
//import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import XiaoHuaHeader from './xiaohua-header';
import XiaoHuaPage from './xiaohua-page';
import QuTuPage from './qutu-page';

class XiaoHua extends Component{
  componentDidMount(){
    this.props.switchChannelButton()
  }
  render(){
    return(
      <div>
        <XiaoHuaHeader/>
        {this.props.history.location.pathname==='/xiaohua/qutu'?<QuTuPage></QuTuPage>:<XiaoHuaPage></XiaoHuaPage>
          }
        {/* <Router>
          <Switch>
            <Route path="/qutu" render={()=>{return <h1>joke</h1>}}/>
            <Route path="/joke" component={JokePage}/>
          </Switch>
        </Router> */}
      </div>
    )
  }  
}

const mapDispatchToProps=dispatch=>{
  return{
    switchChannelButton(){
      dispatch(actionsCommon.switchChannelButton(2))
    }
  }
}

XiaoHua.propTypes={
  switchChannelButton:PropTypes.func.isRequired
}


export default connect(null, mapDispatchToProps)(XiaoHua)