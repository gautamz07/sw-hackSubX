const worker = new Worker('ss-buyer.js')

const btn = document.querySelector('#btn')
btn.addEventListener('click', (event ) => {
  worker.postMessage('Gautam');
})

var p = document.createElement('p');
p.textContent = 'This content was added via JavaScript!';
document.body.appendChild(p);