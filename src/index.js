import './html-clock.css';
import { Clock } from './html-clock.js';

window.addEventListener('load', (ev)=>{
  let clock = new Clock(document.body.appendChild(document.createElement('section')), {size:'600px'});

  let fileInput = document.body.appendChild(document.createElement('input'));
  fileInput.setAttribute('type', 'file');
  fileInput.addEventListener('change', (ev)=>{
    let file = ev.target.files[0];
    if(file) {
      file.arrayBuffer().then((data)=>{
        console.log('set image', data);
        clock.root.style.backgroundImage = `url(${URL.createObjectURL(new Blob([data]))}`;
        console.log(clock.root.style.backgroundImage);
      });
    }
  });

  clock.start();
});
