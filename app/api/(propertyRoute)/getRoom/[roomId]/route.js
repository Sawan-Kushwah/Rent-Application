import { dataNotFound, success } from "@/app/utils/errorMessage";
import { connectToDB } from "@/app/utils/connectDB";
import Room from "@/app/api/models/Room";
import { NextResponse } from "next/server";

export async function GET(req, content) {
    try {
        await connectToDB()
        const params = await content.params;

        const room = await Room.findById(params.roomId);

        if (!room) return dataNotFound("Room");

        return NextResponse.json(room);
    } catch (error) {
        console.log(error);
    }
}