(() => {
    // aplicando el principio de responsabilidad unica
    //priorizar la composicion frente a la herencia
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
    }

    class User {
        public email: string
        public role: string
        public lastAccess: Date

        constructor(
            {
                email,
                role,
            }: UserProps
        ) {
            this.lastAccess = new Date()
            this.role = role
            this.email = email
        }

        checkCredentials() {
            return true
        }
    }

    interface SettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class Settings {
        public workingDirectory: string
        public lastOpenFolder: string

        constructor(
            {
                workingDirectory,
                lastOpenFolder,
            }: SettingsProps
        ) {
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
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

    class UserSettings {
        public person: Person
        public user: User
        public settings: Settings

        constructor({
                        name,
                        gender,
                        birthDate,
                        email,
                        role,
                        workingDirectory,
                        lastOpenFolder,
                    }: UserSettingsProps) {
            this.person = new Person({name, gender, birthDate})
            this.user = new User({email, role,})
            this.settings = new Settings({workingDirectory, lastOpenFolder})
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
    console.log(userSettings.user.checkCredentials())
})()