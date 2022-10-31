import './style.scss'

const hero = window.document.querySelector('#hero');

const spriteHeight = 288;
const spriteWidth = 288;

let rightPosition = 0;
let topPosition = 0;
let animationSprite = 1;
let left = false;
let animate = null;
const heroControls = event => {
    switch (event.key.toLowerCase()) {
        case 'arrowright':
            clearInterval(animate);
            left = false;
            rightPosition += 20;
            animationSprite = animationSprite > 5 ? 1 : animationSprite + 1;
            setAnimationSprite(2, animationSprite, left);
            hero.style.left = `${rightPosition}px`;
            break;
        case 'arrowleft':
            clearInterval(animate);
            left = true;
            rightPosition -= 20;
            animationSprite = animationSprite > 5 ? 1 : animationSprite + 1;
            setAnimationSprite(2, animationSprite, left);
            hero.style.left = `${rightPosition}px`;
            break;
        case 'arrowup':
            clearInterval(animate);
            topPosition -= 20;
            animationSprite = animationSprite > 5 ? 1 : animationSprite + 1;
            setAnimationSprite(2, animationSprite, left);
            hero.style.top = `${topPosition}px`;
            break;
        case 'arrowdown':
            clearInterval(animate);
            topPosition += 20;
            animationSprite = animationSprite > 5 ? 1 : animationSprite + 1;
            setAnimationSprite(2, animationSprite, left);
            hero.style.top = `${topPosition}px`;
            break;
    }
}

const setAnimationSprite = (line, column, mirror = false, empty = 0) => {
    const img = hero.querySelector('img')
    if (mirror) {
        img.style.transform = 'rotateY(0)';
        column += empty;
    } else {
        img.style.transform = 'rotateY(180deg)';
    }
    img.style.top = `-${img.offsetHeight - spriteHeight * line}px`;
    img.style.left = `-${img.offsetWidth - spriteWidth * column}px`;

}

document.addEventListener('keydown', heroControls)
document.addEventListener('keyup', () => {
    animate = setInterval(() => {
        animationSprite = animationSprite > 4 ? 1 : animationSprite + 1;
        setAnimationSprite(4, animationSprite, left, 1);
    }, 100)
})

const start = () => {
    animate = setInterval(() => {
        animationSprite = animationSprite > 4 ? 1 : animationSprite + 1;
        setAnimationSprite(4, animationSprite, left, 1);
    }, 100)
}

start();