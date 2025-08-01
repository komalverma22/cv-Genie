import { PrismaClient } from '../../../../db/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: 'Email already registered.' }, { status: 409 });
    }

    const user = await prisma.user.create({
      data: { name, email },
    });

    return NextResponse.json({ message: 'Signup successful!', user });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
