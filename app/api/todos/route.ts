import { tasks } from "@/app/lib/placeholder-data";

export async function GET(request:Request) {
    return Response.json(tasks);
}