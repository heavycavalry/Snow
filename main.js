var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


function modulo(n, m) {
    return ((n % m) + m) % m;
}

class Flake {
    constructor() {
        this.step = Math.random()
        this.x = Math.random() * 1200;
        this.y = Math.random() * 800;
        this.r = Math.random() * 8;
    }

    drawFlake() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
    }



    move() {
        this.step += Math.random() * 0.01;
        this.x = modulo(this.x + Math.sin(this.step), 1200);
        this.y = modulo(this.y + 0.7, 800);

}

}



let flakes = [];

for (let i = 0; i < 500; i++) {
    flakes.push(new Flake());
}

console.dir(flakes);
flakes.forEach(flake => {
    flake.drawFlake();
});

function anime() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (i in flakes) {
        let flake = flakes[i];
        flake.drawFlake();
        flake.move();
    }
    requestAnimationFrame(anime);
}
anime();