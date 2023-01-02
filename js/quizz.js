// SCORE DU QUIZZ

function calcScore() {
    let quizzScore = 0;

    document.querySelectorAll('.answers').forEach(answers => {
        let correct = true;
        answers.querySelectorAll('input').forEach(input => {
            input.disabled = "disabled";
            if ((input.className == "right") && (!input.checked)) {
                correct = false;
                answers.querySelector('label[for="'+input.id+'"]').innerHTML =  '<i class="fa fa-check" aria-hidden="true"></i>' + answers.querySelector('label[for="'+input.id+'"]').textContent ;
            } else if ((input.className != "right") && (input.checked)) {
                correct = false;
                answers.querySelector('label[for="'+input.id+'"]').innerHTML =  '<i class="fa fa-times" aria-hidden="true"></i>' + answers.querySelector('label[for="'+input.id+'"]').textContent ;
            } else if (input.className == "right") {
                answers.querySelector('label[for="'+input.id+'"]').innerHTML =  '<i class="fa fa-check" aria-hidden="true"></i>' + answers.querySelector('label[for="'+input.id+'"]').textContent ;
            }
        })
        if (correct) {
            quizzScore++;
        }
    })


    document.querySelector('.quizz .scoreValue').innerHTML = "Score : " + quizzScore + "/10";
    console.log("Quizz score : " + quizzScore);
}


// SNOW ANIMATION

const cnv = document.getElementById('cnv');
const ctx = cnv.getContext("2d");

cnv.width = (window.innerWidth * 75) / 100;
cnv.height = (window.innerHeight * 75) / 100;
ctx.fillStyle = "#fff";

class Drop{
    constructor() {
        this.x = Math.random() * cnv.width;
        this.y = Math.random() * cnv.height;
        this.r = Math.random() * 4.5;
        this.v = Math.random() * 1.5;
    }
    make() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        this.y += this.v;
        if (this.y > cnv.height) {
            this.x = Math.random() * cnv.width;
            this.y = 0;
        }
    }
}

let drops = [];

for (let i=0; i<750; i++) drops.push(new Drop());

function animation() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    drops.forEach((drop) => {drop.make()});
    requestAnimationFrame(animation);
}

animation();