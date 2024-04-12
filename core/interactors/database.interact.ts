import DatabaseRepository from "../repositories/database.repository";


export const getUserByIdInteract = (
    databaseRepository: DatabaseRepository
) => async (id: string) => {
    const user = await databaseRepository.getUserById(id)
    return user
}

export const getAllUserInteract = (
    databaseRepository: DatabaseRepository
) => async () => {
    const users = await databaseRepository.getAllUser()
    return users
}