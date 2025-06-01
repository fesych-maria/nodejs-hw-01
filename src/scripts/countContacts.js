import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const allContacts = await readContacts();
  const count = allContacts.length;
  return count;
};

console.log(await countContacts());
