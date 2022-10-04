import React, { useEffect} from 'react';
import './App.css';

function App() {
  let navbar: any;
  useEffect(() => {
      let down :boolean = false;
      let touch:boolean = false;
      navbar = document.getElementById('navbar');
        navbar.addEventListener('mousedown',(e:any) => {
          down = true;
        })
        navbar.addEventListener('mousemove',(e:any) => {
          let h = navbar.style.height;
          if(!down){
            return
          }
          navbar.style.height = 10 + (e.clientY ) + 'px'

        })
        window.addEventListener('mouseup',(e:any) => {
          down = false;
        })
        navbar.addEventListener('touchstart',(e:any) => {
          touch = true;
          console.log("touchstart",touch)
        })
        navbar.addEventListener('touchmove',(e:any) => {
          e.preventDefault();
          if(!touch){
            return
          }
          let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
          let tch = evt.touches[0] ||evt.changedTouches[0];
          if(tch){
            navbar.style.height = 10 + (tch.clientY ) + 'px'
            console.log("touchmove",tch.clientY)
          }
          
        })
        window.addEventListener('touchend',(e:any) => {
          touch = false;
          console.log("touchend")
        })
  })
  return (
    <div className="App">
      <div className='outer-wrapper'>
        <div className='navbar' id='navbar'></div>

      </div>
    </div>
  );
}

export default App;
