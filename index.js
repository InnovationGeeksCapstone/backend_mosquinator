const app = require("./app");
const UserModel = require('./models/user_information_model');
const UserReportModel = require('./models/user_report_model');
const AdminRegistrationModel = require('./models/admin_registration_model');
const db = require('./config/db')

const port = process.env.PORT || 80;

app.get('/api',(req,res)=>{
    res.send("Hello World")
})


app.listen(process.env.PORT || port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
})