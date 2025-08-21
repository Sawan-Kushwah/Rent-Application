import { dataNotFound, success } from "@/app/utils/errorMessage";
import { connectToDB } from "@/app/utils/connectDB";
import Room from "@/app/api/models/Room";
import { NextResponse } from "next/server";

export async function PATCH(req, content) {
    try {
        await connectToDB()
        const params = await content.params;
        const roomData = await req.json();
        const room = await Room.findByIdAndUpdate(params.roomId, roomData, { new: true, runValidator: true });

        if (!room) return dataNotFound("Room");

        return NextResponse.json(room)
    } catch (error) {
        console.log(error);
    }
}