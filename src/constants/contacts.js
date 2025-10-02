import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
export const PATH_DB = path.join(dirname, '..', 'db', 'db.json');