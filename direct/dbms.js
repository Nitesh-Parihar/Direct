import {mongoose}   from  "mongoose"
const dbconnect = async ()=>{
mongoose.connect('mongodb+srv://nnn742583:Nitesh2112@cluster0.gynrvra.mongodb.net/?retryWrites=true&w=majority',{
    dbName : "nitesh"
}).then( () => {
    console.log("db connected");
}).catch(() => {
    console.log("Failed");
})}

export default dbconnect