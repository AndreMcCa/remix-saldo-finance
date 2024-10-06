import { prisma } from "./database.server";

export async function addExpenses(expenseData) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: Number(expenseData.amount),
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
