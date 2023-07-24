interface IFly {
    fly(): void
}

interface IEat {
    eat(): void
}

interface IRun {
    run(): void
}

interface ISwin {
    swin(): void
}

class Tucan implements IEat, IRun, IFly {
    public eat() {
        console.log(2)
    }

    public run() {
    }

    public fly() {
    }
}

class Huminbird implements IEat, IRun, IFly {
    public eat() {
        console.log(1)
    }

    public run() {
    }

    public fly() {
    }
}

class Ostrich implements IEat, IRun {

    public eat(): void {
        console.log(4)
    }

    public run(): void {
    }
}

class Penguin implements IEat, IRun, ISwin {
    public eat(): void {
        console.log(5)
    }

    public run(): void {
    }

    public swin() {
    }
}

const birdsWhoEat = [
    new Tucan(),
    new Penguin(),
    new Huminbird(),
    new Ostrich(),
]

birdsWhoEat.forEach(bird => {
    console.log(bird.constructor.name)
    bird.eat()
})