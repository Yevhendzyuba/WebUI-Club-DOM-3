const pressedBtn = document.getElementById('myBtn');
pressedBtn.onclick = function() {
    const p = document.createElement('p');
    p.textContent = "I was pressed!";
    document.body.append(p);

}

const onMeBtn = document.getElementById('myBtn');
onMeBtn.onmouseenter = function() {
    const p = document.createElement('p');
    p.textContent = "Mouse on me!";
    document.body.append(p);
}

const notOnMeBtn = document.getElementById('myBtn');
notOnMeBtn.onmouseleave = function() {
    const p = document.createElement('p');
    p.textContent = "Mouse is not on me!";
    document.body.append(p);
}