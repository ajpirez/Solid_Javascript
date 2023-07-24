(() => {
    // no se aplica el principio de responsabilidad unica
    type Gender = 'M' | 'F'

    class Person {
        constructor(public name: string, public gender: Gender, public birthDate: Date) {
        }
    }

    // Person.prototype.saludar = function(){
    //     console.log(this.name)
    // }

    class User extends Person {
        public lastAccess: Date
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(name, gender, birthDate);
            this.lastAccess = new Date()
        }
        checkCredentials() {
            return true
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            name: string,
            gender: Gender,
            birthDate: Date,
            email: string,
            role: string,
        ) {
            super(email, role, name, gender, birthDate);
        }
    }


    const newPerson = new Person("Fernando", "M", new Date('1985-10-21'))
    const userSettings = new UserSettings(
        '/home/fernando',
        '/home',
        'Fernando',
        'M',
        new Date('1985-10-21'),
        'F2XZl@example.com',
        'admin',
    )
    console.log({newPerson})
    console.log({userSettings})
    console.log(userSettings.checkCredentials())
    // console.log(newPerson.saludar())

})()