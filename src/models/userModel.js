const prisma = require('./prisma');

const createUser = async (data) => {
  return prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      profile: {
        create: { bio: data.bio }
      }
    }
  });
};

const getUsers = async () => {
  return prisma.user.findMany({
    include: { profile: true }
  });
};

const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: { id: parseInt(id) },
    include: { profile: true }
  });
};

const updateUserById = async (id, data) => {
  return prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      email: data.email,
      name: data.name,
      profile: {
        update: { bio: data.bio }
      }
    }
  });
};

const deleteUserById = async (id) => {
  await prisma.account.deleteMany({
    where: { userId: parseInt(id) }
  });
  
  await prisma.profile.delete({
    where: { userId: parseInt(id) }
  });
  
  return prisma.user.delete({
    where: { id: parseInt(id) }
  });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById
};
