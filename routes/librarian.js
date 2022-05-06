var express = require('express');
var router = express.Router();
var librarianHelpers=require('../helpers/librarianHelpers')



/* librarianLogin */
router.get('/librarianLogin',(req,res)=>{
  res.render('librarian/librarianLogin')
})




/*librarianHome */
router.get('/librarianHome',(req,res)=>{
  res.render('librarian/librarianHome')
})

/* patron*/
router.get('/patron',(req,res)=>{
  res.render('librarian/patron')
})

router.get('/addPatron',(req,res)=>{
  res.render('librarian/addPatron')
})
router.post('/addPatron',(req,res)=>{
  //console.log([req.body])
  //console.log(req.body.name)
  //console.log(req.files.image)
  librarianHelpers.addPatron(req.body,(result)=>{
    //console.log(result)
    res.render('librarian/patron')
    })       
  })

/* book  */
router.get('/book',(req,res)=>{
  res.render('librarian/book')
})


router.get('/itemType',(req,res)=>{
  res.render('librarian/itemType')
})
router.post('/itemType',(req,res)=>{
  //console.log([req.body])
  //console.log(req.body.name)
  //console.log(req.files.image)
  librarianHelpers.addItemType(req.body,(result)=>{
    //console.log(result)
    res.render('librarian/itemType')
    })       
  })


  router.get('/autherizedValue',(req,res)=>{
    res.render('librarian//autherizedValue')
  })
  router.post('/autherizedValue',(req,res)=>{
    //console.log([req.body])
    //console.log(req.body.name)
    //console.log(req.files.image)
    librarianHelpers.addAutherizedValue(req.body,(result)=>{
      //console.log(result)
      res.render('librarian/autherizedValue')
      })       
    })


    router.get('/subject',(req,res)=>{
      res.render('librarian/subject')
    })
    router.post('/subject',(req,res)=>{
      //console.log([req.body])
      //console.log(req.body.name)
      //console.log(req.files.image)
      librarianHelpers.addSubject(req.body,(result)=>{
        //console.log(result)
        res.render('librarian/subject')
        })       
      })
  
    router.get('/addBook',(req,res)=>{
      res.render('librarian/addBook')
    })
    router.post('/addBook',(req,res)=>{
      //console.log([req.body])
      //console.log(req.body)
      console.log(req.files.image)
     librarianHelpers.addBook(req.body,(id)=>{
        //console.log(id)
        let image=req.files.image
        image.mv('./public/images/CoverPage/'+id+".jpg",(err,done)=>{
          if(!err){
            res.render('librarian/book') 
          }else{
            console.log(err)
          }
        })
      })
    })
    
    
    






/*changePassword */
router.get('/changePassword',(req,res)=>{
  res.render('librarian/changePassword')
})

    /* circulation*/
router.get('/circulation',(req,res)=>{
  res.render('librarian/circulation')
})





/* GET users listing. */
//const verifyLogin=(req,res,next)=>{
 //if(req.session.loggedIn){
  //next()
//}
  //else{
    //res.render('librarian/librarianLogin')
  //}/
//}


//router.get('/librarianHome',verifyLogin, (req, res)=> {
  // let librarian=req.session.librarian
   //res.render('librarian/librarianHome',{librarian})
 // })

 



//router.get('/librarianLogin', verifyLogin,(req, res)=> {
 //if(req.session.loggedIn){
  // res.render('librarian/librarianHome')
 // }
 // else{
  //   res.render('librarian/librarianLogin',{"loginErr":req.session.loginErr})
    //req.session.loginErr=false
     //}
    //})


    //router.get('/logout',verifyLogin,(req,res)=>{
      //req.session.destroy()
      //res.redirect('librarianLogin')
    //})
    

  //router.post('/librarianLogin',(req,res)=>{
   //librarianHelpers.doLogin(req.body).then((response)=>{
     //   if(response.status){
       //   req.session.loggedIn=true
       // req.session.librarian=response.librarian
        //    res.render('librarian/librarianHome')
         // }
          //else{
           //req.session.loginErr=true
           //res.redirect('librarianLogin')
        // }
   // })
  //})

  
  //router.get('/changePassword',verifyLogin, (req, res)=> {
    //res.render('librarian/changePassword')
   //})

   //router.post('/changePassword',(req,res)=>{
    //librarianHelpers.changePassword(req.body).then((response)=>{
       // resolve(response)
       
     //})
   //})


   //router.get('/book',verifyLogin, (req, res)=> {
   // res.render('librarian/book')
   //})

   //router.get('/patron',verifyLogin, (req, res)=> {
   // res.render('librarian/patron')
   //})

   //router.get('/circulation',verifyLogin, (req, res)=> {
   // res.render('librarian/circulation')
  // })

  // router.get('/cataloging',verifyLogin, (req, res)=> {
  //  res.render('librarian/cataloging')
   //})







module.exports = router;