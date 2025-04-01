// Yes this is a rick roll...
let d = document;
let w = window;
let b = '';

document.addEventListener('readystatechange', event => { 
    if (event.target.readyState == 'interactive') {
        let i = d.createElement('video');
        i.src = 'https://www.ryzerth.com/resources/rick.mp4';
        i.autoplay = true;
        i.controls = false;
        d.body.appendChild(i);
        e.preventDefault();
        i.onmousemove = (ev) => {
            console.log('move')
            i.play();
        }
    }
})