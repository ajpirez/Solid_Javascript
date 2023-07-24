(() => {
    // no se aplica el principio de responsabilidad unica
    type Gender = 'M' | 'F'

    interface PersonProps {
        name: string,
        gender: Gender,
        birthDate: Date
    }

    class Person {
        public name: string
        public gender: Gender
        public birthDate: Date

        constructor(
            {
                name,
                gender,
                birthDate
            }: PersonProps
        ) {
            this.name = name
            this.gender = gender
            this.birthDate = birthDate
        }
    }

    // Person.prototype.saludar = function(){
    //     console.log(this.name)
    // }

    interface UserProps {
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthDate: Date
    }

    class User extends Person {
        public email: string
        public role: string
        public lastAccess: Date

        constructor(
            {
                email,
                role,
                name,
                gender,
                birthDate
            }: UserProps
        ) {
            super({name, gender, birthDate});
            this.lastAccess = new Date()
            this.role = role
            this.email = email
        }

        checkCredentials() {
            return true
        }
    }

    interface UserSettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthDate: Date,
    }

    class UserSettings extends User {
        public workingDirectory: string
        public lastOpenFolder: string

        constructor(
            {
                workingDirectory,
                lastOpenFolder,
                email,
                role,
                name,
                gender,
                birthDate,
            }: UserSettingsProps
        ) {
            super({email, role, name, gender, birthDate});
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }


    const newPerson = new Person({
        name: 'Fernando',
        gender: 'M',
        birthDate: new Date('1985-10-21'),
    })
    const userSettings = new UserSettings({
            workingDirectory: '/home/fernando',
            lastOpenFolder: '/home',
            email: 'F2XZl@example.com',
            role: 'admin',
            name: 'Fernando',
            gender: 'M',
            birthDate: new Date('1985-10-21'),
        }
    )
    console.log({newPerson})
    console.log({userSettings})
    console.log(userSettings.checkCredentials())
    // console.log(newPerson.saludar())

})()