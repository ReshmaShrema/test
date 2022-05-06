$(function() {
    var $changepass=$("#changepass")
        $.validator.addMethod("passv", function(value, element) {
        return value == value.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/);
    },"Weak password! eg: Student@123");
 

    if($changepass.length){
        $changepass.validate({
            rules:{
                
                oldpassword:{
                    required:true,
                    
                    
                },
                newpassword:{
                    required:true,
                    passv:true
                },
                repeatnewpassword:{
                    required:true,
                    equalTo:'#newpassword'
                }

                    },
                    messages:{
                        
                        repeatpassword:{
                            required:"Please re-enter password!",
                            equalTo:"Password Mismatch !"
                        }   

            }
        })
    }
})