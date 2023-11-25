import { tasks } from "@/app/lib/placeholder-data";
import prisma from "@/prisma/client";
import { NextRequest,NextResponse } from "next/server";

// CRUD: 1. GET (R): lấy, POST(C): Tạo, DELETE(D): Xóa, PUT(U): cập nhật

// get all tasks
export async function GET(request:NextRequest) {
    const task = await prisma.task.findMany()
    return NextResponse.json(task);
}

// add new task to tasks list
export async function POST(request:NextRequest) {
    const body = await request.json();
    //add new task in body
    // tasks.push(body);

    //add new task to mysql db
    const task = await prisma.task.create({
        data: {
          taskName: body.taskName,
          isDone: false,
          isDeleted: false
        },
    })
    return NextResponse.json(task);
}