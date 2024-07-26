const prisma = require('./prisma');

const createAccount = async (data) => {
  return prisma.account.create({
    data: {
      balance: data.balance,
      user: {
        connect: { id: parseInt(data.userId) }
      }
    }
  });
};

const getAccounts = async () => {
  return prisma.account.findMany();
};

const deleteAccountById = async (id) => {
  return prisma.account.delete({
    where: { id: parseInt(id) }
  });
};

module.exports = {
  createAccount,
  getAccounts,
  deleteAccountById
};
