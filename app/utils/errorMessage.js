import { NextResponse } from "next/server";

export function dataNotFound(error) {
    return NextResponse.json({ message: `${error} not found` });
}

export function success(message) {
    return NextResponse.json({ message: `${message} submitted succesfully` });
}

export function InternalServerError(error) {
    return NextResponse.json({ message: `${error}` });
}