import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';


const generateContacts = async (number) => {

    try {
        const contacts = await readContacts();

        for (let i = 0; i < number; i++){
            const newContact = createFakeContact();
            contacts.push(newContact);
        }
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    } catch (err) {
        console.error(err);
    }
};

generateContacts(5);
