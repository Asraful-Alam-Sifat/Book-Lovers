import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {

  const jsonDirectory = path.join(process.cwd(), 'src/assets/JSON');
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

  return NextResponse.json(JSON.parse(fileContents));
}