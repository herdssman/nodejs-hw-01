import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {

    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        if (Array.isArray(contacts)) {
            console.log(contacts.length, 'contacts');
        }

    } catch (err) {
        console.error(err);
    }
};

console.log(await countContacts());
