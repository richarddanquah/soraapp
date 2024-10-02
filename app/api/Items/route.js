import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "data.csv"); // Path to your CSV file
  
  // Wrapping the file reading logic in a promise to handle async behavior
  const readCSVFile = () => {
    return new Promise((resolve, reject) => {
      const items = [];
      fs.createReadStream(filePath)
        .pipe(csv({ separator: ";" })) // Setting the delimiter to semicolon
        .on("data", (row) => {
          // Push each row into the items array
          items.push({
            createdAt: row["2023-06-25 11:00"], // Adjusting this to map correctly to your CSV structure
            filename: row["1abc.txt"],          // Same here, map to the correct column names
          });
        })
        .on("end", () => {
          resolve(items); // Resolving the promise with the items array
        })
        .on("error", (err) => {
          reject(err); // Rejecting the promise with the error if something goes wrong
        });
    });
  };

  try {
    const items = await readCSVFile(); // Wait for the CSV to be read
    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    console.error("Error reading CSV:", error);
    return NextResponse.json({ error: "Failed to read the CSV file" }, { status: 500 });
  }
}
