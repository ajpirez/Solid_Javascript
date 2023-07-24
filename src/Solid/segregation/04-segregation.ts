
interface Bird {
    fly(): void;

    eat(): void;

    run(): void;

    swin(): void
}


class Tucan implements Bird{
    public fly() {
    }

    public eat() {
    }

    public run() {
    }

    public swin() {
        throw new Error('not swin')
    }

}

class Huminbird implements Bird{
    public fly() {
    }

    public eat() {
    }

    public run() {
    }

    public swin() {
        throw new Error('not swin')
    }
}

class Ostrich implements Bird {
    public fly() {
        throw new Error('Not fly')
    }

    public eat(): void {
    }

    public run(): void {
    }

    public swin() {
        throw new Error('not swin')
    }

}

class Penguin implements Bird{
    public eat(): void {
    }

    public fly(){
        throw new Error('not fly')
    }

    public run(): void {
    }

    public swin(){}
}