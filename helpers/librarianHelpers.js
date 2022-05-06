db=require('../config/connection')
//var collection=require('../config/collection')
//const bcrypt=require('bcrypt')

module.exports={
  
    
  
  
  addItemType:(itemType,callback)=>{
        //console.log(product)
        db.get().collection('ItemTypes').insertOne(itemType).then((data)=>{
            callback(true)
           // console.log(data)
        })
    },
    


    addAutherizedValue:(autherizedValue,callback)=>{
        //console.log(product)
        db.get().collection('AutherizedValue').insertOne(autherizedValue).then((data)=>{
            callback(true)
           // console.log(data)
        })
    },

    addSubject:(subject,callback)=>{
      //console.log(product)
      db.get().collection('Subjects').insertOne(subject).then((data)=>{
          callback(true)
         // console.log(data)
      })
  },


  addBook:(book,callback)=>{
    //console.log(product)
    db.get().collection('Books').insertOne(book).then((data)=>{
        callback(data.insertedId)
       // console.log(data)
    })

},


addPatron:(patron,callback)=>{
  //console.log(product)
  db.get().collection('Patron').insertOne(patron).then((data)=>{
      callback(true)
     // console.log(data)
  })
}

    
//doLogin:(librarianData)=>{
  //  return new Promise(async(resolve,reject)=>{
    //    let loginStatus=false
      //  let response={}
        //let librarian= await db.get().collection(collection.LIBRARIAN_COLLECTION).findOne({librarian_ID:librarianData.librarian_ID})
       // if(librarian){
         //   bcrypt.compare(librarianData.Password,librarian.Password).then((status)=>{
           //     if(status){
                    
             //       response.librarian=librarian
               //     response.status=true
                 //   resolve(response)}
                   // else{
                     //   resolve({status:false})
                        
                  //  }
                //})
            
       // }else{
           // resolve({status:false})
       // }
    //})
//}

}
