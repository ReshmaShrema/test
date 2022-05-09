
db=require('../config/connection')
var collection=require('../config/collection')
const bcrypt=require('bcrypt')
var objectID=require('mongodb').ObjectId
module.exports={

 addKeyword:(item,callback)=>{
    //console.log(product)
    db.get().collection('item').insertOne(item).then((data)=>{
        callback(data.insertedId)
       // console.log(data)
    })

},
  addBook:(book,callback)=>{
    //console.log(product)
    db.get().collection(collection.BOOK_COLLECTION).insertOne(book).then((data)=>{
        callback(data.insertedId)
       // console.log(data)
    })

},

getAllBook:()=>{
  return new Promise(async(resolve,reject)=>{
      let book=await db.get().collection(collection.BOOK_COLLECTION).find().toArray()
      resolve(book)
  })
},
deleteBook:(bookId)=>{
  return new Promise((resolve,reject)=>{
      db.get().collection(collection.BOOK_COLLECTION).deleteOne({_id:objectID(bookId)},{}).then((response)=>{
          resolve(response)
         // console.log(response)
      })
  })
},
getBookDetails:(bookId)=>{
  return new Promise((resolve,reject)=>{
      db.get().collection(collection.BOOK_COLLECTION).findOne({_id:objectID(bookId)}).then((book)=>{
          resolve(book)
          console.log(book)
      })
  })
},
updateBook:(bookId,bookDetails)=>{
  return new Promise((resolve,reject)=>{
      db.get().collection(collection.BOOK_COLLECTION).updateOne({_id:objectID(bookId)},{
          $set:{
            ItemType:bookDetails.ItemType,
            BookId:bookDetails.BookId,
            ISBN:bookDetails.ISBN,
            BookTitle:bookDetails.BookTitle,
            AuthorName:bookDetails.AuthorName,
            Edition:bookDetails.Edition,
            Publication:bookDetails.Publication,
            AutherizedValue:bookDetails.AutherizedValue,
            Subject:bookDetails. Subject,
            Subject:bookDetails.Subject
          }
      }).then((responce)=>{
          resolve()
       })
  })
},


  
  addItemType:(itemType,callback)=>{
        //console.log(product)
        db.get().collection(collection.ITEM_TYPE_COLLECTION).insertOne(itemType).then((data)=>{
            callback(true)
           // console.log(data)
        })
    },
    

    getAllItemType:()=>{
      return new Promise(async(resolve,reject)=>{
          let item=await db.get().collection(collection.ITEM_TYPE_COLLECTION).find().toArray()
          resolve(item)
      })
    },
    
    deleteItemType:(id)=>{
      return new Promise((resolve,reject)=>{
          db.get().collection(collection.ITEM_TYPE_COLLECTION).deleteOne({_id:objectID(id)}).then((response)=>{
              resolve(response)
             // console.log(response)
          })
      })
    },
    getItemTypeDetails:(id)=>{
      return new Promise((resolve,reject)=>{
          db.get().collection(collection.ITEM_TYPE_COLLECTION).findOne({_id:objectID(id)}).then((itemType)=>{
              resolve(itemType)
              console.log(itemType)
          })
      })
    },
    updateItemType:(id,itemTypeDetails)=>{
     // console.log(itemTypeDetails)
      return new Promise((resolve,reject)=>{
          db.get().collection(collection.ITEM_TYPE_COLLECTION).updateOne({_id:objectID(id)},{
              $set:{
                ItemType:itemTypeDetails.ItemType
                
               }
          }).then((responce)=>{
              resolve()
           })
      })
    },
    

    addAutherizedValue:(autherizedValue,callback)=>{
        //console.log(product)
        db.get().collection('AutherizedValue').insertOne(autherizedValue).then((data)=>{
            callback(true)
           // console.log(data)
        })
    },


    




getAllAutherizedValue:()=>{
  return new Promise(async(resolve,reject)=>{
      let AutherizedValue=await db.get().collection('AutherizedValue').find().toArray()
      resolve(AutherizedValue)
  })
},

deleteAutherizedValue:(id)=>{
  return new Promise((resolve,reject)=>{
      db.get().collection("AutherizedValue").deleteOne({_id:objectID(id)}).then((response)=>{
          resolve(response)
         // console.log(response)
      })
  })
},
getAutherizedValueDetails:(id)=>{
  return new Promise((resolve,reject)=>{
      db.get().collection('AutherizedValue').findOne({_id:objectID(id)}).then((AutherizedValue)=>{
          resolve(AutherizedValue)
          console.log(AutherizedValue)
      })
  })
},
updateAutherizedValue:(id,AutherizedValueDetails)=>{
 // console.log(itemTypeDetails)
  return new Promise((resolve,reject)=>{
      db.get().collection("AutherizedValue").updateOne({_id:objectID(id)},{
          $set:{
            AutherizedValue:AutherizedValueDetails.AutherizedValue
            
           }
      }).then((responce)=>{
          resolve()
       })
  })
},



addSubject:(subject,callback)=>{
  //console.log(product)
  db.get().collection('Subject').insertOne(subject).then((data)=>{
      callback(true)
     // console.log(data)
  })
},







getAllSubject:()=>{
return new Promise(async(resolve,reject)=>{
let Subject=await db.get().collection('Subject').find().toArray()
resolve(Subject)
})
},

deleteSubject:(id)=>{
return new Promise((resolve,reject)=>{
db.get().collection("Subject").deleteOne({_id:objectID(id)}).then((response)=>{
    resolve(response)
   // console.log(response)
})
})
},
getSubjectDetails:(id)=>{
return new Promise((resolve,reject)=>{
db.get().collection('Subject').findOne({_id:objectID(id)}).then((Subject)=>{
    resolve(Subject)
    console.log(Subject)
})
})
},
updateSubject:(id,SubjectDetails)=>{
// console.log(itemTypeDetails)
return new Promise((resolve,reject)=>{
db.get().collection("Subject").updateOne({_id:objectID(id)},{
    $set:{
      Subject:SubjectDetails.Subject
      
     }
}).then((responce)=>{
    resolve()
 })
})
},




addPatron:(Patron)=>{
  return new Promise(async(resolve,reject)=>{
  Patron.Password=await bcrypt.hash(Patron.Password,10)
  //console.log(product)
  db.get().collection('Patron').insertOne(Patron).then((data)=>{
      resolve(data)
     // console.log(data)
  })
})
},

getAllPatron:()=>{
return new Promise(async(resolve,reject)=>{
let Patron=await db.get().collection('Patron').find().toArray()
resolve(Patron)
})
},

deletePatron:(id)=>{
return new Promise((resolve,reject)=>{
db.get().collection("Patron").deleteOne({_id:objectID(id)}).then((response)=>{
    resolve(response)
   // console.log(response)
})
})
},
getPatronDetails:(id)=>{
return new Promise((resolve,reject)=>{
db.get().collection('Patron').findOne({_id:objectID(id)}).then((Patron)=>{
    resolve(Patron)
    console.log(Patron)
})
})
},
updatePatron:(id,PatronDetails)=>{
// console.log(itemTypeDetails)
return new Promise((resolve,reject)=>{
db.get().collection("Patron").updateOne({_id:objectID(id)},{
    $set:{
      PatronName:PatronDetails.PatronName,
      PatronId:PatronDetails.PatronId,
      Category:PatronDetails.Category,
      
     }
}).then((responce)=>{
    resolve()
 })
})
},




addCategory:(Category,callback)=>{
  //console.log(product)
  db.get().collection('Category').insertOne(Category).then((data)=>{
      callback(true)
     // console.log(data)
  })
},

getAllCategory:()=>{
return new Promise(async(resolve,reject)=>{
let Category=await db.get().collection('Category').find().toArray()
resolve(Category)
})
},

deleteCategory:(id)=>{
return new Promise((resolve,reject)=>{
db.get().collection("Category").deleteOne({_id:objectID(id)}).then((response)=>{
    resolve(response)
   // console.log(response)
})
})
},
getCategoryDetails:(id)=>{
return new Promise((resolve,reject)=>{
db.get().collection('Category').findOne({_id:objectID(id)}).then((Category)=>{
    resolve(Category)
    console.log(Category)
})
})
},
updateCategory:(id,CategoryDetails)=>{
// console.log(itemTypeDetails)
return new Promise((resolve,reject)=>{
db.get().collection("Category").updateOne({_id:objectID(id)},{
    $set:{
      Category:CategoryDetails.Category
       }
}).then((responce)=>{
    resolve()
 })
})
},

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
