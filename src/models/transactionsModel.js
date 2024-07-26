const prisma = require('./prisma');

const createTransaction = async (data) => {
  return prisma.transaction.create({
    data: {
      amount: data.amount,
      fromAccount: { connect: { id: parseInt(data.fromAccountId) } },
      toAccount: { connect: { id: parseInt(data.toAccountId) } }
    }
  });
};

const getTransactions = async () => {
  return prisma.transaction.findMany({
    include: { fromAccount: true, toAccount: true }
  });
};

const getTransactionById = async (id) => {
  return prisma.transaction.findUnique({
    where: { id: parseInt(id) },
    include: { fromAccount: true, toAccount: true }
  });
};

module.exports = {
  createTransaction,
  getTransactions,
  getTransactionById
};
