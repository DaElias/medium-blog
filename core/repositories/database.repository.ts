import User from "../entities/user.entity";

export default interface DatabaseRepository {
    getAllUser(): Promise<User[]>
    getUserById(id: string): Promise<User>
    createUser(user: User): Promise<User>
    deleteUserById(id: string): Promise<void>
}