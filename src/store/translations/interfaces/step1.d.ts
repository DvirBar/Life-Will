interface Step1Gender {
    edited_by: string
}

interface Step1 extends Step1Gender {
    title: string
    first_name: string
    last_name: string
    birthDate: string
    hebrewBirthDate: string
    gender: string
    person_id: string
    email: string,
    phone: string,
    address: {
        text: string,
        street: string,
        houseNum: string,
        city: string
    },
    citizenship: string,
    passport_id: string,
}

