import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const contacts = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, contacts, 'utf-8');
  } catch (error) {
    console.error('Error occurred: ', error);
  }
};
