var express = require('express');
var router = express.Router();
var patronHelpers=require('../helpers/patronHelpers')





/* Patron Login  */
router.get('/patronLogin', (req, res)=> {
    res.render('patron/patronLogin')
  })
  router.post('/patronLogin',(req, res)=> {
    console.log()
    patronHelpers.doLogin(req.body).then((response)=>{
      console.log(response)
      
    })
    res.render('patron/patronLogin')
  })



  router.get('/patronHome', (req, res)=> {
    res.render('patron/patronHome')
  })















/* GET users listing. */
//const verifyLogin=(req,res,next)=>{
 //if(req.session.loggedIn){
  //next()
//}
  //else{
   // res.render('patron/patronLogin')
  //}
//}


//router.get('/patronHome',verifyLogin, (req, res)=> {
  // let patron=req.session.patron
   //res.render('patron/patronHome',{patron})
  //})

 



//router.get('/patronLogin', verifyLogin,(req, res)=> {
 //if(req.session.loggedIn){
  // res.render('patron/patronHome')
 // }
 // else{
  //   res.render('patron/patronLogin',{"loginErr":req.session.loginErr})
   // req.session.loginErr=false
     //}
    //})


    //router.get('/logout',verifyLogin,(req,res)=>{
     // req.session.destroy()
      //res.redirect('patronLogin')
   // })
    

  //router.post('/patronLogin',(req,res)=>{
    //patronHelpers.doLogin(req.body).then((response)=>{
      //  if(response.status){
        //  req.session.loggedIn=true
        //req.session.patron=response.patron
          //  res.render('patron/patronHome')
          //}
          //else{
          // req.session.loginErr=true
          // res.redirect('patronLogin')
        // }
   // })
 // })

  
















module.exports = router;
