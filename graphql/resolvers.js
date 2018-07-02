import { people, getById } from "./db"

const resolvers = {
    Query: {
        people: () => people
    }
};

export default resolvers;