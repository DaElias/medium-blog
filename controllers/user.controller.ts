import { getAllUser, getUserById } from "@/core/interactors";
import { NextRequest, NextResponse } from "next/server";


export async function getUserController(req: NextRequest, res: NextResponse) {

    // const user = await getUserById("1")
    const user = await getAllUser()
    // const user = {}
    return NextResponse.json(user)
}