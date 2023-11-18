import Chance from 'chance';

const chance = new Chance();

const generateUniqueEmail = () => {
    const domain = 'gmail.com';
    return `user${Math.floor(Math.random() * 10000)}@${domain}`;
};

const generateUser = (id: number) => {
    const firstName = chance.first();
    const lastName = chance.last();

    return {
        id,
        createDate: chance.date().toISOString(),
        avatar: chance.avatar(),
        firstName,
        lastName,
        patronymic: chance.syllable(),
        email: generateUniqueEmail(),
        about: chance.sentence(),
    };
};

const generateUsers = (count: number) => {
    const users: any[] = [];

    for (let i = 1; i <= count; i++) {
        const user = generateUser(i);
        users.push(user);
    }

    return users;
};

export { generateUser, generateUsers };
