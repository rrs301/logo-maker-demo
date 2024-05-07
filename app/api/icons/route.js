import { NextResponse } from "next/server"
import fs from 'fs';
import path from 'path';
export async function GET(req){




  // Replace 'public/assets' with your actual folder path
  const dir = path.join(process.cwd(), 'public');

  try {
    const filenames = fs.readdirSync(dir);

    return  NextResponse.json(filenames)
  } catch (error) {
    return  NextResponse.json("Failed")
  }

  
}