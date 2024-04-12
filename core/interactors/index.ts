import { getAllUserInteract, getUserByIdInteract } from "./database.interact";


import DBApi from "@/data-source/db-api.datasorce";
import DBMysql from "@/data-source/db-mysql.datasource";

// const databaseRepository = DBMysql.getInstance()
const databaseRepository = DBApi.getInstance()


export const getUserById = getUserByIdInteract(databaseRepository)
export const getAllUser = getAllUserInteract(databaseRepository)


