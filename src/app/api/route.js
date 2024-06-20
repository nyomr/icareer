import connectMongoDB from "@/libs/mongodb";
import Job from "@/models/job";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, company, salary } = await request.json();
  await connectMongoDB();
  await Job.create({ title, company, salary });
  return NextResponse.json({ message: "Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const jobs = await Job.find();
  return NextResponse.json({ jobs });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Job.findByIdAndDelete(id);
  return NextResponse.json({ message: "deleted" }, { status: 200 });
}