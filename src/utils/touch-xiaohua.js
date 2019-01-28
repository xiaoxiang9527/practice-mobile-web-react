export default function touchXiaoHua (ev,thisElement,thisComponent){
  let x=0
  let disX=ev.targetTouches[0].clientX-x;
  function fnMove(ev){
    x=ev.targetTouches[0].clientX-disX;
    if(x<0){
      if(x>(-(thisElement.offsetWidth/5))){
        thisElement.style.transform=`translate(${x}px,0px)`
      }
      else{
        thisElement.style.transform=`translate(${(-(thisElement.offsetWidth/5))}px,0px)`
      }
    }
  }
  function fnEnd(){
    thisElement.style.transition='0.2s all ease'
    if(x>-(thisElement.offsetWidth/5)){
      thisElement.style.transform='translate(0px,0px)'
    }
    else{
      thisElement.style.transform='translate(-7.5rem,0px)'
     setTimeout(()=>{ thisComponent.props.switchShow(true);thisComponent.props.history.push('/xiaohua/qutu')
      },250) 
    }
    thisElement.removeEventListener('touchmove', fnMove, {passive: true});
    thisElement.removeEventListener('touchend', fnEnd, {passive: true});
  }

  thisElement.addEventListener('touchmove', fnMove, {passive: true});
  thisElement.addEventListener('touchend', fnEnd, {passive: true});
}