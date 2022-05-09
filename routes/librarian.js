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


   /* circulation*/
   router.get('/circulation',(req,res)=>{
    res.render('librarian/circulation')
  })

/

/* book  */
router.get('/book',(req,res)=>{
  librarianHelpers.getAllBook().then((book)=>{
    res.render('librarian/book',{book})
   // console.log(book)
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
    image.mv('./public/CoverPage/'+id+".jpg",(err,done)=>{
      if(!err){
        res.redirect('/librarian/book') 
      }else{
        console.log(err)
      }
    })
  })
})




router.get('/deleteBook/:id',(req,res)=>{
  let bookId=req.params.id
  console.log(bookId)
  librarianHelpers.deleteBook(bookId).then((response)=>{
    res.redirect('/librarian/book')
  })
})


router.get('/editBook/:id',async(req,res)=>{
let book=await librarianHelpers.getBookDetails(req.params.id)
//console.log(product)
res.render('librarian/editBook',{book})
})
router.post('/editBook/:id',(req,res)=>{
// console.log(req.params.id)
let id=req.params.id
librarianHelpers.updateBook(req.params.id,req.body).then(()=>{
  res.redirect('/librarian/book')
  if(req.files.Image){
      let image=req.files.Image
      image.mv('./public/CoverPage/'+id+".jpg")
}
})
})




router.get('/itemType',(req,res)=>{
  librarianHelpers.getAllItemType().then((item)=>{
    res.render('librarian/itemType',{item})
     console.log(item)
  })
  
})


router.get('/addItemType',(req,res)=>{
  res.render('librarian/addItemType')
})
router.post('/addItemType',(req,res)=>{
  //console.log([req.body])
  //console.log(req.body)
 librarianHelpers.addItemType(req.body,(id)=>{
    //console.log(id)
    res.redirect('/librarian/itemType')
    })
  })

router.get('/deleteItemType/:id',(req,res)=>{
  let id=req.params.id
  //console.log(id)
  librarianHelpers.deleteItemType(id).then((response)=>{
    res.redirect('/librarian/itemType')
  })
})


router.get('/editItemType/:id',async(req,res)=>{
let ItemType=await librarianHelpers.getItemTypeDetails(req.params.id)
console.log('hrll'+ItemType)
res.render('librarian/editItemType',{ItemType})
})
router.post('/editItemType/:id',(req,res)=>{
// console.log(req.params.id)
let id=req.params.id
console.log(id)
librarianHelpers.updateItemType(id,req.body).then(()=>{
  res.redirect('/librarian/itemType')

})
})


 
router.get('/autherizedValue',(req,res)=>{
  librarianHelpers.getAllAutherizedValue().then((AutherizedValue)=>{
    res.render('librarian/autherizedValue',{AutherizedValue})
     console.log(AutherizedValue)
  })
  
})


router.get('/addAutherizedValue',(req,res)=>{
  res.render('librarian/addAutherizedValue')
})
router.post('/addAutherizedValue',(req,res)=>{
  //console.log([req.body])
  //console.log(req.body)
 librarianHelpers.addAutherizedValue(req.body,(id)=>{
    //console.log(id)
    res.redirect('/librarian/autherizedValue')
    })
  })

router.get('/deleteAutherizedValue/:id',(req,res)=>{
  let id=req.params.id
  //console.log(id)
  librarianHelpers.deleteAutherizedValue(id).then((response)=>{
    res.redirect('/librarian/autherizedValue')
  })
})


router.get('/editAutherizedValue/:id',async(req,res)=>{
let AutherizedValue=await librarianHelpers.getAutherizedValueDetails(req.params.id)
//console.log('hrll'+AutherizedValue)
res.render('librarian/editAutherizedValue',{AutherizedValue})
})
router.post('/editAutherizedValue/:id',(req,res)=>{
// console.log(req.params.id)
let id=req.params.id
//console.log(id)
librarianHelpers.updateAutherizedValue(id,req.body).then(()=>{
  res.redirect('/librarian/autherizedValue')

})
})


  
 
router.get('/subject',(req,res)=>{
  librarianHelpers.getAllSubject().then((Subject)=>{
    res.render('librarian/subject',{Subject})
   //  console.log(subject)
  })
  
})


router.get('/addSubject',(req,res)=>{
  res.render('librarian/addSubject')
})
router.post('/addSubject',(req,res)=>{
  //console.log([req.body])
  //console.log(req.body)
 librarianHelpers.addSubject(req.body,(id)=>{
    //console.log(id)
    res.redirect('/librarian/subject')
    })
  })

router.get('/deleteSubject/:id',(req,res)=>{
  let id=req.params.id
  //console.log(id)
  librarianHelpers.deleteSubject(id).then((response)=>{
    res.redirect('/librarian/subject')
  })
})


router.get('/editSubject/:id',async(req,res)=>{
let Subject=await librarianHelpers.getSubjectDetails(req.params.id)
//console.log('hrll'+subject)
res.render('librarian/editsubject',{Subject})
})
router.post('/editSubject/:id',(req,res)=>{
// console.log(req.params.id)
let id=req.params.id
console.log(id)
librarianHelpers.updateSubject(id,req.body).then(()=>{
  res.redirect('/librarian/subject')

})
})


    
router.get('/patron',(req,res)=>{
  librarianHelpers.getAllPatron().then((Patron)=>{
    res.render('librarian/patron',{Patron})
   //  console.log(subject)
  })
  
})


router.get('/addPatron',(req,res)=>{
  res.render('librarian/addPatron')
})
router.post('/addPatron',(req,res)=>{
  //console.log([req.body])
  //console.log(req.body)
 librarianHelpers.addPatron(req.body).then((response)=>{
  res.redirect('/librarian/patron')
      //console.log(id)
 })

    
    })
 

router.get('/deletePatron/:id',(req,res)=>{
  let id=req.params.id
  //console.log(id)
  librarianHelpers.deletePatron(id).then((response)=>{
    res.redirect('/librarian/patron')
  })
})


router.get('/editPatron/:id',async(req,res)=>{
let Patron=await librarianHelpers.getPatronDetails(req.params.id)
//console.log('hrll'+subject)
res.render('librarian/editPatron',{Patron})
})
router.post('/editPatron/:id',(req,res)=>{
// console.log(req.params.id)
let id=req.params.id
console.log(id)
librarianHelpers.updatePatron(id,req.body).then(()=>{
  res.redirect('/librarian/patron')

})
})



    
router.get('/category',(req,res)=>{
  librarianHelpers.getAllCategory().then((Category)=>{
    res.render('librarian/category',{Category})
   //  console.log(subject)
  })
  
})


router.get('/addCategory',(req,res)=>{
  res.render('librarian/addCategory')
})
router.post('/addCategory',(req,res)=>{
  //console.log([req.body])
  //console.log(req.body)
 librarianHelpers.addCategory(req.body,(id)=>{
    //console.log(id)
    res.redirect('/librarian/category')
    })
  })

router.get('/deleteCategory/:id',(req,res)=>{
  let id=req.params.id
  //console.log(id)
  librarianHelpers.deleteCategory(id).then((response)=>{
    res.redirect('/librarian/category')
  })
})


router.get('/editCategory/:id',async(req,res)=>{
let Category=await librarianHelpers.getCategoryDetails(req.params.id)
//console.log('hrll'+subject)
res.render('librarian/editCategory',{Category})
})
router.post('/editCategory/:id',(req,res)=>{
// console.log(req.params.id)
let id=req.params.id
console.log(id)
librarianHelpers.updateCategory(id,req.body).then(()=>{
  res.redirect('/librarian/Category')

})
})



/*changePassword */
router.get('/changePassword',(req,res)=>{
  res.render('librarian/changePassword')
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