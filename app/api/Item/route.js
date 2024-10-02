import fs from 'fs'
import path from 'path';
import csv from  'csv-parser'

// a function to handle fetching of data from csv
export default function csvhandler(req,res){
   const filePath = path.join(process.cwd(), 'data', 'data.csv'); // path of the csv file
   const items = [];

   fs.createReadStream(filePath).pipe(csv()).on('data',(row)=> {
    // pushing each row into the items array
    items.push({
        createdAt: row.createdAt,
        filename: row.filename
    });

   }).on('end',()=>{
    // sending the data to the client
    res.status(200).json(items);
   }).on('error',(err)=>{
    // sending the error to the client
    console.log("Error reading CSV", err);
    res.status(500).json({message: "Error reading CSV"});
   })
}