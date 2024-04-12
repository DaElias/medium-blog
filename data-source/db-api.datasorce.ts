import User from "@/core/entities/user.entity";
import DatabaseRepository from "@/core/repositories/database.repository";

export default class DBApi implements DatabaseRepository {
    private static instance: DBApi

    constructor() {
        // Connection with db
        console.log("Connection with API successful!!")
    }

    public static getInstance(): DBApi {
        if (!DBApi.instance)
            DBApi.instance = new DBApi()
        return DBApi.instance
    }
    async getUserById(id: string): Promise<User> {
        return { id, name: "test1", email: "test1@test1.com" }
    }
    async getAllUser(): Promise<User[]> {
        const response = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        return response
    }
    createUser(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteUserById(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}