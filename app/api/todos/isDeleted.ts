import { tasks } from "@/app/lib/placeholder-data";
import { NextRequest,NextResponse } from "next/server";

export async function GET(
    request:NextRequest,
    {params}:{params:{isDeleted: boolean}}) {
    let task = tasks.filter((task) => task.isDeleted === params.isDeleted);
    return NextResponse.json(task);
}