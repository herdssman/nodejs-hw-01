import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {

    try {
        const contacts = await readContacts();
        const newContact = createFakeContact();
        contacts.push(newContact);

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
        
    } catch (err) {
        console.error(err);
    }
};

addOneContact();
