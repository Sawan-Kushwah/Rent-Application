import { dataNotFound, success } from "@/app/utils/errorMessage";
import { NextResponse } from "next/server";
import Room from "../../models/Room";
import { connectToDB } from "@/app/utils/connectDB";
import Owner from "@/app/api/models/Owner";

export async function POST(req) {
    try {
        connectToDB();
        const roomData = await req.json();

        if (!roomData) dataNotFound("Room");

        const ownerId = roomData.owner;
        const newRoom = new Room(roomData);

        const res = await newRoom.save();
        const roomId = res._id

        const updatedOwner = await Owner.findByIdAndUpdate(
            ownerId,
            {
                $push: { room: roomId }
            },
            { new: true, runValidator: true }
        )

        console.log("updated owner : ", updatedOwner);
        return success("Room added")
    } catch (error) {
        console.log(error);
    }
}