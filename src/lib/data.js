import { promises as fs } from 'fs';
import path from 'path';

export async function getLocalBooks() {
    const jsonDirectory = path.join(process.cwd(), 'src/assets/JSON');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    return JSON.parse(fileContents);
}