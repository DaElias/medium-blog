import { createEdgeRouter } from "next-connect";
import { NextRequest, NextResponse } from "next/server";
import { getUserController } from "@/controllers/user.controller";

const router = createEdgeRouter<NextRequest, NextResponse>()

router.get(getUserController)

export async function GET(request: NextRequest, ctx: any) {
    return router.run(request, ctx)
}