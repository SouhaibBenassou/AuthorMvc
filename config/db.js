import mongoose from "mongoose";    
const dbcon = "mongodb+srv://salmi204salmi_db_user:MiLXcdqnQs6HdizG@cluster0.kzmj7nz.mongodb.net/authordb?appName=Cluster0"

async function conDB() {
    try{
        await mongoose.connect(dbcon)
        console.log("DataB Correct");
    } catch (error) {
        console.error("DataB Fail", error);
        process.exit(1);
    }
    
}

export default mongoose;
