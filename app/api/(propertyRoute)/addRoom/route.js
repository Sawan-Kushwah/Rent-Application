import { dataNotFound, success, InternalServerError } from "@/app/utils/errorMessage";
import { NextResponse } from "next/server";
import Room from "../../models/Room";
import { connectToDB } from "@/app/utils/connectDB";

export async function POST(req) {
    try {
        connectToDB();
        const roomData = await req.json();

        console.log(roomData);

        if (!roomData) dataNotFound("Room");

        const newRoom = new Room(roomData);

        const res = await newRoom.save();

        if (res) {
            return success("Room data")
        } else {
            return InternalServerError(res);
        }
    } catch (error) {
        console.log(error);
    }
}