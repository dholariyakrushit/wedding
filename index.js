const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT || 7000


const staticPath=path.join(__dirname,"./public");
const templatesPath=path.join(__dirname,"./views")


app.use(express.static(staticPath));
app.use(express.static(path.join(__dirname, "./public/script.js")));

app.use(express.Router())

app.set("views",templatesPath);

// set the view engine
app.set("view engine","hbs");
// hbs.registerPartials(partialPath);

app.get("/wedding",(req,res)=>{
    
    res.render("index")
    // res.sendFile(__dirname,"index.html")
});


app.listen(port,()=>{
    console.log(`connect port ${port}`);
})
