import React, { Component,Suspense,lazy } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Footer from './components/common/footer.js';
import LoadingOfComponent from './components/common/loadingofcomponent';
import './app.css';
import {Provider} from 'react-redux';
import store from './stores';
import './assets/iconfont/iconfont.css';

const XiaoHua=lazy(()=>import('./components/xiaohua'))
const KaiYan=lazy(()=>import('./components/kaiyan'))
const DuanWen=lazy(()=>import('./components/duanwen'))
const YiYan=lazy(()=>import('./components/yiyan'))

const routes=[{path:'/xiaohua',component:XiaoHua},{path:'/xiaohua/qutu',component:XiaoHua},
{path:'/duanwen',component:DuanWen},{path:'/yiyan',component:YiYan},{path:'/kaiyan',component:KaiYan}]


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <Suspense fallback={<LoadingOfComponent/>} >
              <Switch>
                {routes.map(route=>(
                  <Route exact path={route.path} component={route.component} />))}
                  <Redirect from="/" to="/kaiyan"></Redirect>
              </Switch>
              </Suspense>
              <Footer/>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
