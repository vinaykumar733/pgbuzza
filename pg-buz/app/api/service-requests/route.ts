import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const serviceRequest = await prisma.serviceRequest.create({
      data: {
        name: body.name,
        mobileNumber: body.mobileNumber,
        email: body.email,
        city: body.city,
        serviceRequired: body.serviceRequired,
        message: body.message,
      },
    });

    // TODO: Integrate WhatsApp Business API here to send notification to 6363223446
    // For now, let's just log the notification
    console.log("WhatsApp Notification to 6363223446:", {
      customerName: body.name,
      phoneNumber: body.mobileNumber,
      requestedService: body.serviceRequired,
      dateTime: new Date().toLocaleString("en-IN"),
    });

    return NextResponse.json(serviceRequest, { status: 201 });
  } catch (error) {
    console.error("Error creating service request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const requests = await prisma.serviceRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(requests);
  } catch (error) {
    console.error("Error fetching service requests:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
