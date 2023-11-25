import { tasks } from "@/app/lib/placeholder-data";
import { Task } from "@/app/lib/types";
import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";

//Call API chưa dùng prisma
//------------------------------------------------------------------------------------
// export async function GET(
//     request:NextRequest,
//     {params}:{params:{id: string}}) {
//     let task = tasks.find((task)=>task.id===params.id);
    
//     return NextResponse.json(task);
// }

// export async function DELETE(request:NextRequest,{params}:{params:{id: string}}) {
    
//     const elementIndex = tasks.findIndex((task)=>task.id===params.id);
//     if(elementIndex!=-1){
//         //Delete element in tasks at elementIndex
//         tasks.splice(elementIndex,1)
//         return NextResponse.json({mesage:"Xóa thành công"})
//     }else{
//         return NextResponse.json({message:"Xóa thất bại"})
//     }
// }
// export async function PUT(request:NextRequest,
//     {params}:{params:{id: string}}) {
//     const elementIndex = tasks.findIndex((task)=>task.id===params.id);
//     if(elementIndex!=-1){
//         //Get element in tasks at elementIndex
//         const task: Task | undefined= tasks.at(elementIndex);
//         const body = await request.json();
//         if(task != undefined){
//             task.taskName=body.taskName;
//             task.isDone=body.isDone;
//             task.isDeleted=body.isDeleted;

//             return NextResponse.json(task);
//         }else{
//             return NextResponse.json({message:"Cập nhật thất bại"})
//         }
//     }
// }
//--------------------------------------------------------------------------------------

//Call API with prisma
export async function GET(request:NextRequest,{params}:{params:{id: string}}) {
    let idCheck=parseInt(params.id);
    let task = await prisma.task.findUnique({
        where: {
            id: idCheck,
        },
    });
    return NextResponse.json(task);
}
export async function DELETE(request:NextRequest,{params}:{params:{id: string}}) {
    const elementIndex = tasks.findIndex((task)=>task.id===params.id);
    let idCheck=parseInt(params.id);
    if(idCheck!=-1){
        const deleteUser = await prisma.task.delete({
            where: {
              id: idCheck,
            },
          })
        return NextResponse.json({mesage:"Xóa thành công"})
    }else{
        return NextResponse.json({message:"Xóa thất bại"})
    }
}

export async function PUT(request:NextRequest,
    {params}:{params:{id: string}}) {
    const elementIndex = tasks.findIndex((task)=>task.id===params.id);
    if(elementIndex!=-1){
        //Get element in tasks at elementIndex
        const task: Task | undefined= tasks.at(elementIndex);
        const body = await request.json();
        if(task != undefined){
            task.taskName=body.taskName;
            task.isDone=body.isDone;
            task.isDeleted=body.isDeleted;

            return NextResponse.json(task);
        }else{
            return NextResponse.json({message:"Cập nhật thất bại"})
        }
    }
}