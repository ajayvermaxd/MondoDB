////setting up the express server
express = require("express");
//create the server
app = express();
// creatig the mongoose object
mongoose = require("mongoose")

app.get("/", (req, res) => {
  res.send("Hello World");
});
mongoose
  .connect(
    "<connection string>"
  )
  .then(() => {
    console.log(" The database connection is succesfully established ");
  })
  .catch((error) => {
    console.log(" The error is ", error);
  });

  // Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    stock: Number,
  });
  //schema method, it takes the schema object,
  //the object has key value pairs.
  //where the keys are the name of the field and the values are the typeof the field.
  //create the Model.
  const productModel = mongoose.model("Product", productSchema);
  
  app.post("/createProduct",async (req,res)=>{
    product=new productModel({
        name: "Chips",
        price: 50,
        category: "Snaks",
        stock: 10,
      });
    
      productResult=await product.save();
    })







//always at the end of the code
app.listen(3000, () => {
  console.log("The server is listening to port 3000");
});