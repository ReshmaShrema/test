db=require('../config/connection')
var collection=require('../config/collection')
const bcrypt=require('bcrypt')
var objectID=require('mongodb').ObjectId
module.exports={
doLogin:(patronData)=>{
    console.log(patronData)
    return new Promise (async(resolve,reject)=>{
        let loginStatus=false
        let response={}
        let patron=await db.get().collection(collection.PATRON_COLLECTION).findOne({PatronId:patronData.PatronId})
        if(patron){
            console.log(patron)
            bcrypt.compare(patron.password,patronData.password).then((status)=>{
                if(status){
                    console.log("success")
                    response.patron=patron
                    response.status=true
                    resolve(response)
                }else{
                    console.log("login failure")
                    resolve({status:false})
                }
            })
        }else{
            console.log('failed')
            resolve({status:false})
        }
    })
}



}


