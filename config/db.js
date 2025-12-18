import mongoose from "mongoose";    
const dbcon = "mongodb+srv://salmi204salmi_db_user:MiLXcdqnQs6HdizG@cluster0.kzmj7nz.mongodb.net/authordb?appName=Cluster0"
const database = mongoose.connect(dbcon)
.then(()=> console.log("dbconexion true"));

export default database;
