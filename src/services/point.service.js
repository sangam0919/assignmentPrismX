const users = {}; // in-memory 포인트 저장

export const earnPoint = (userId, amount) => {
  if (!users[userId]) users[userId] = { balance: 0, history: [] };
  users[userId].balance += amount;
  users[userId].history.push({ type: "earn", amount, date: new Date() });
  return { userId, balance: users[userId].balance };
};

export const getBalance = (userId) => {
  if (!users[userId]) return { userId, balance: 0 };
  return { userId, balance: users[userId].balance };
};

export const getHistory = (userId) => {
  if (!users[userId]) return { userId, history: [] };
  return { userId, history: users[userId].history };
};
