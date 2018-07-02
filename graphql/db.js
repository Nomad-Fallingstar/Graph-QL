export const people = [
    {
        id: "1",
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: "2",
        name: "YYS",
        age: 18,
        gender: "female"
    },
    {
        id: "3",
        name: "YJY",
        age: 18,
        gender: "female"
    },
    {
        id: "4",
        name: "ASH",
        age: 18,
        gender: "male"
    },
    {
        id: "5",
        name: "KHM",
        age: 18,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => people.id === id);
    return filteredPeople[0]
}