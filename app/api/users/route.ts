import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const users = await prisma.users.findMany({
    select: {
      name: true,
      email: true,
    },
  });

  return NextResponse.json(users);
}
export async function POST(request: Request) {
  const json = await request.json();

  const user = await prisma.users.create({
    data: json,
  });

  return new NextResponse(JSON.stringify(user), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
