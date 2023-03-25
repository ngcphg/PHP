const express = require("express")
const app=express()
const mongoose = require("mongoose")
app.use(express.json())
//DB connect
console.log('Before connecting to database');
mongoose.connect("mongodb://127.0.0.1:27017/resmandb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {
    console.log('Database connection successful');
    // Your code here
  })
  .catch((err) => {
    console.error('Database connection error', err);
  });


//Schema
const sch={
    id:Number,
    name:String,
    price:String,
    desc:String,
    img:String
}
const monmodel=mongoose.model("Reservation",sch);

//POST
app.post("/addmon",async(req, res)=>{

    const data = new monmodel({
        id:req.body.id,
        name:req.body.name,
        price:req.body.price,
        desc:req.body.desc,
        img:req.body.img
    });

    const val = await data.save();
    res.send("Add successful");
});

//FETCH
app.get('/search/:id', function(req, res){
  fetchid=req.params.id;
  monmodel.find(({}), function(err,val){
      if(err){
          console.log("Error!");
      }else{
          if(val.length==0){
              res.send("Data doesn't exist");
          }else{
              res.send(val);
          }
      }
  })
})

app.listen(3000,()=>{
  console.log("On port 3000")
})