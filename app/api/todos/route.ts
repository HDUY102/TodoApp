import { tasks } from "@/app/lib/placeholder-data";
import { NextRequest,NextResponse } from "next/server";

// CRUD: 1. GET (R): lấy, POST(C): Tạo, DELETE(D): Xóa, PUT(U): cập nhật

// get all tasks
export async function GET(request:NextRequest) {
    return NextResponse.json(tasks);
}

// add new task to tasks list
export async function POST(request:NextRequest) {
    const body = await request.json();
    //add new task in body
    tasks.push(body);
    return NextResponse.json(body);
}