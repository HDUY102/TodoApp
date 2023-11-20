import { tasks } from "@/app/lib/placeholder-data";
import { NextRequest,NextResponse } from "next/server";

export async function GET(
    request:NextRequest,
    {params}:{params:{isDeleted: boolean}}) {
    let task = tasks.filter((task) => task.isDeleted === params.isDeleted);
    if(task.length>0){
        return NextResponse.json(task);
    }else{
        return NextResponse.json({message: "Không có task nào bị xóa"});
    }
}