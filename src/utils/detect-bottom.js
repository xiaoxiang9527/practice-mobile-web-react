export default function detectBottom(thisComponent,cb){
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight-1) {
    if(thisComponent.state.loadingState===false && thisComponent.state.loadingStateCode<2){
      thisComponent.setState({loadingState:true})
      cb()
    }
  }
}