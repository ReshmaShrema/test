var express = require('express');
var router = express.Router();
//var patronHelpers=require('../helpers/patronHelpers')
var db=require('../config/connection');
const multer = require('multer')//1
const tesseract = require("node-tesseract-ocr");//2
//app.use(express.static(path.join(__dirname + '/uploads')))
var librarianHelpers=require('../helpers/librarianHelpers');
const async = require('hbs/lib/async');

router.get('/',(req,res)=>{
  res.render('librarian/ocr')
})

router.post('/',async(req,res)=>{
 try{
  
  //  console.log("this isfinal result",finalResult)


  //console.log([req.body])
  //console.log(req.body)
 // console.log(req.files.image)
 librarianHelpers.addKeyword(req.body,(id)=>{
    //console.log(id)
    let image=req.files.image
    image.mv('./public/Upload/'+id+".jpg",(err,done)=>{
      if(!err){
        res.render('librarian/book') 
      }else{
        console.log(err)
      }

      console.log('./public/Upload/'+id+".jpg")
      //const config = {
       // lang: "eng",
        //oem: 1,
        //psm: 3,
      //};
      
      //let finalResult=await  tesseract.recognize('./public/Upload/'+id+".jpg", config)
    

    })
  })
  //console.log("reqbody",req.file.path)
  console.log('./public/Upload/'+id+".jpg")
  const config = {
   lang: "eng",
  oem: 1,
  psm: 3,
  };
  
let finalResult=await  tesseract.recognize('./public/Upload/'+id+".jpg", config)


}
catch(err){

}
})

 


module.exports = router;