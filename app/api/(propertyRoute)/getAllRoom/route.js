import { connectToDB } from "@/app/utils/connectDB";
import { dataNotFound, InternalServerError } from "@/app/utils/errorMessage";
import Room from "../../models/Room";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        connectToDB();
        const rooms = await Room.find({});
        if (!rooms) return dataNotFound("Rooms");
        return NextResponse.json(rooms);
    } catch (error) {
        return InternalServerError(error);
    }
}