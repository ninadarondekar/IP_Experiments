const { MongoClient } = require("mongodb");
 
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
 
async function con() {
    try {
        await client.connect();
        console.log("Connected!");
 
        // Accessing the database and the collection
        const db = client.db("collegeDB");
        const c = db.collection("student");
 
        // ---------- CREATE ----------
        await c.insertOne({ name: "Ninad", age: 20, class: "CSE" });
        await c.insertOne({ name: "Sahil", age: 22, class: "CSE" });
 
        await c.insertMany([
            { name: "Bob",     age: 21, class: "CE" },
            { name: "Charlie", age: 20, class: "EE" }
        ]);
 
        // ---------- READ ----------
       
        const student = await c.findOne({ name: "Ninad" });
        
        // ---------- UPDATE ----------
        await c.updateOne(
            { name: "Bob" },
            { $set: { age: 20 } }
        );
 
        // ---------- DELETE ----------
        await c.deleteOne({ name: "Charlie" });
 
        const finalData = await c.find().toArray();
 
    } catch (error) {
        console.log("Connection Failed!", error);
    } finally {
        // Closing the connection so the program exits cleanly
        await client.close();
    }
}
 
con();
