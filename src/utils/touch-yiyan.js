export default function touchYiYan(ev,thisElement,thisComponent){
  let x=0
  let disX=ev.targetTouches[0].clientX-x;
  function fnMove(ev){
    x=ev.targetTouches[0].clientX-disX;
}
  function fnEnd(){
    if (x<0){
      if(x<(-thisElement.offsetWidth/4)){
        thisComponent.picForward()
      }
    }
    else{
      if(x>thisElement.offsetWidth/4){
        thisComponent.picBackward()
      }
    }
    thisElement.removeEventListener('touchmove', fnMove, {passive: true});
    thisElement.removeEventListener('touchend', fnEnd, {passive: true});
  }

  thisElement.addEventListener('touchmove', fnMove, {passive: true});
  thisElement.addEventListener('touchend', fnEnd, {passive: true});
}