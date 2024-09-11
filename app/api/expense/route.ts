// import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
	const { description, amount } = await req.json();

	try {
		// const expense = await prisma.expense.create({
		// 	data: {
		// 		description,
		// 		amount,
		// 	},
		// });

		return NextResponse.json({
			message: 'Expense added successfully',
			// expense,
		});
	} catch (error) {
		return NextResponse.json({ message: 'Error adding expense', error }, { status: 500 });
	}
}
