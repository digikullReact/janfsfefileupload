const express=require("express");
const app=express();
const cors=require("cors");
var cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'snapclean', 
    api_key: '', 
    api_secret: '',
    secure: true
  });

app.use(cors());

const multipart = require('connect-multiparty');

const multipartMiddleware = multipart({uploadDir: "./uploads"});


// fileupload handling
app.post("/upload",multipartMiddleware,(req,res)=>{


    cloudinary.uploader.upload(req.files.file.path, function(result, error) {
        if(error){
            console.log(error);
            res.json({
                message:"Failed to upload to cloud"
            })
        }
        else{

    res.json({
        message:"Success",
        imageUrl:result.url
    })


        }
       
    
    });




})

app.listen(8080,()=>{
    console.log("Server running");
})