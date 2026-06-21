import express from "express";

const app = express();

app.use(express.json());

const PORT = 8080;

/*Objectives
--Tell the webhook that the transaction has been completed

*/


app.listen(PORT,()=>{
 console.log(`Server is running at PORT: ${PORT}`);
});