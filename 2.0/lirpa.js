// Yes this is a rick roll...
let d = document;
let w = window;
let b = '';

function troll() {
    let i = d.createElement('video');
    i.src = 'https://www.ryzerth.com/resources/rick.mp4';
    i.allowFullscreen = true;
    i.autoplay = true;
    i.controls = false;
    d.body.appendChild(i);
    i.requestFullscreen();
    e.preventDefault();
    i.onfullscreenchange = (ev) => {
        if (d.fullscreenElement == null) {
            d.body.removeChild(i);
        }
    }
    i.onmousemove = (ev) => {
        console.log('move')
        i.play();
    }
}