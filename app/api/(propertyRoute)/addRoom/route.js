
import { dataNotFound, dataSubmittedSuccessfully, InternalServerError } from "@/app/utils/errorMessage";
import { NextResponse } from "next/server";
import Room from "../../models/Room";
import { connectToDB } from "@/app/utils/connectDB";
import mongoose from "mongoose";
import Owner from "@/app/api/models/Owner";
export async function POST(req) {
    try {
        connectToDB();

        
        const roomData = await req.json();
        const ownerId = roomData.owner;
        console.log(roomData);

        if (!roomData) dataNotFound("Room");

        const newRoom = new Room(roomData);

        const res = await newRoom.save();


        const roomId = res._id

        if (!ownerId) {
            return NextResponse.json({message: " owner id not found"});
        }
        // console.log(id)
    
        

        const updatedOwner = await Owner.findByIdAndUpdate(
            ownerId,
            {

                $push: { room : roomId }
            }, 
            {
            new: true
        }
        )

        console.log("updated owner : ", updatedOwner);
        return NextResponse.json({ message: "Room added successfully" });

        
    } catch (error) {
        console.log(error);
    }
}