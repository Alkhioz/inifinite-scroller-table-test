const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateRecords(numRecords) {
const startDate = new Date(2000, 0, 1); // January 1, 2000
  const endDate = new Date(2020, 11, 31); // December 31, 2020
  const records = [];
  for (let i = 0; i < numRecords; i++) {
    records.push({
      id: i,
      uuid: uuidv4(),
      name: generateRandomString(10),
      lastName: generateRandomString(10),
      initialDate: generateRandomDate(startDate, endDate),
      finalDate: generateRandomDate(startDate, endDate),
      description: generateRandomString(
        Math.floor(Math.random() * 100) + 40
      ),
      totalDebt: Math.floor(Math.random() * 100) + 1,
    });
  }
  return records;
}

const millionRecords = generateRecords(10000);
const filePath = path.join(__dirname, '../back/src/data', 'data.json');
fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, JSON.stringify(millionRecords, null, 2));
console.log(`Data successfully saved to ${filePath}`);