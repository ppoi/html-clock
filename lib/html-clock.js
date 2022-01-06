'use strict';

class Clock {
  constructor(elm, opts) {
    elm.hidden = true;
    elm.innerHtml = '';
    if(!elm.classList.contains('clock')) {
      elm.classList.add('clock');
    }

    let dials = document.createElement('div');
    dials.classList.add('dials');
    for(let i = 0; i < 12; ++i) {
      dials.appendChild(document.createElement('div'));
    }
    elm.appendChild(dials);
    let hands = {};
    ['hour', 'minute', 'second'].forEach(type=>{
      let hand = elm.appendChild(document.createElement('div'));
      hand.className = `${type} hand`;
      hands[type] = hand;
    });

    this.root = elm;

    this._clock = ()=>{
      const date = new Date();
      const s = (360 / 60) * date.getSeconds();
      const m = (360 / 60) * date.getMinutes() + (s / 60);
      const h = (360 / 12) * date.getHours() + (m / 12);
      
      hands.second.style.transform = `rotate(${s}deg)`;
      hands.minute.style.transform = `rotate(${m}deg)`;
      hands.hour.style.transform = `rotate(${h}deg)`;
    };

    this.opts = {};
    this.applyOptions(opts || {});
  }

  start() {
    this.root.hidden = false;
    setInterval(this._clock);
  }

  applyOptions(opts) {
    this.opts.size = opts.size || '450px';
    this.root.style.width = this.opts.size;
    this.root.style.height = this.opts.size;
  }
}

export {
  Clock
}
