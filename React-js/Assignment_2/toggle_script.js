
document.getElementById('toggleScientific').addEventListener('click', function() {
    var scientificButtons = document.getElementById('scientificButtons');
    if (scientificButtons.style.display === 'none') {
        scientificButtons.style.display = 'grid';
    } else {
        scientificButtons.style.display = 'none';
    }
});

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText === 'C') {
            display.innerText = '0';
        } else if (e.target.innerText === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error';
            }
        } else {
            if (display.innerText === '0') {
                display.innerText = e.target.innerText;
            } else {
                display.innerText += e.target.innerText;
            }
        }
    });
});
