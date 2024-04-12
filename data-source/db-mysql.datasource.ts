import User from "@/core/entities/user.entity";
import DatabaseRepository from "@/core/repositories/database.repository";

export default class DBMysql implements DatabaseRepository {
    private static instance: DBMysql

    constructor() {
        // Connection with db
        console.log("Connection with MYSQL successful!!")
    }

    public static getInstance(): DBMysql {
        if (!DBMysql.instance)
            DBMysql.instance = new DBMysql()
        return DBMysql.instance
    }
    async getUserById(id: string): Promise<User> {
        return { id, name: "test1", email: "test1@test1.com" }
    }
    async getAllUser(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    createUser(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteUserById(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}