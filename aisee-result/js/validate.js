//$(function(){



var validate = (function(){
    
    return {
        
        val_text : function() {
            
            var id = arguments[0];
            var msg = arguments[1];
            
            var value = $("#" + id + "").val();
            value = value.trim();
            
            if(value.length == 0) {

               $("#" + id + "").parent("div").find("span.notice").html(msg);

               return false;

            }
            else {

                $("#" + id + "").parent("div").find("span.notice").html("");
                
                return true;

            }
            
            
        },
        val_select : function() {

            var id = arguments[0];
            var msg = arguments[1];

            var value = $("#" + id + "").val(); 
            value = value.trim();
            
            if(value == 0 || value == undefined || value == null) {

               //alert("Please Select the " + field + "");
                
               $("#" + id + "").parent("div").find("span.notice").html(msg);   

               return false;

            }
            else {

                $("#" + id + "").parent("div").find("span.notice").html("");
                
                return true;

            }
        
        },
        val_email : function() {

            var id = arguments[0];

            var value = $("#" + id + "").val();  
            value = value.trim();
                    
            if(value == "" || value == null) {

            $("#" + id + "").parent("div").find("span.notice").html("Please enter your email id"); 
            return false;

            }
            else if((/^[A-Za-z0-9#$%^&*\-_\.]+@[A-Za-z0-9\-\.]+\.[a-z]{2,}$/).test(value) == false) {

               $("#" + id + "").parent("div").find("span.notice").html("Please enter a valid email id"); 
                return false;
                
            }
            else {
                
                    var status;
                
                    $.ajax({

                        url: "includes/verify.php",
                        data : {field_data : value},
                        type : 'POST',
//                        beforeSend : function () {
//
//                            $("#" + input_field).parent().find("span.loading_image").show();
//
//                        },
//                        complete : function () {
//
//                            $("#" + input_field).parent().find("span.loading_image").hide();
//
//                        },
                        success: function(result){

                            if(result == "exist") {

                               $("#" + id + "").parent("div").find("span.notice").html("A user is already registered with this email id."); 
                                
                               status = true;    

                            }
                            else {

                                status = false;

                            }

                        }

                    });
                

                    if(status == true) {
                        return false;
                    }
                    else {
                        $("#" + id + "").parent("div").find("span.notice").html("");
                        return true;   
                    }

            }
        
        },
        val_mobile_no : function() {

            var id = arguments[0];

            var value = $("#" + id + "").val();   
                    
            value = value.trim();
            var pattern = /^\d{10}$/;

            if(value == "" || value == null) {

                $("#" + id + "").parent("div").find("span.notice").html("Please enter your mobile number"); 
                return false;

            }
            if(!pattern.test(value)) {

                $("#" + id + "").parent("div").find("span.notice").html("Please enter a valid mobile number"); 
                return false;

            }
            else {

                $("#" + id + "").parent("div").find("span.notice").html("");
                return true;

            }
        
      },
      val_pin_code : function() {

            var id = arguments[0];

            var value = $("#" + id + "").val();   
                    
            value = value.trim();
            var pattern = /^\d{6}$/;

            if(value == "" || value == null) {

                $("#" + id + "").parent("div").find("span.notice").html("Please enter the picode"); 
                return false;

            }
            if(!pattern.test(value)) {

                $("#" + id + "").parent("div").find("span.notice").html("Please enter a valid pin code"); 
                return false;

            }
            else {

                $("#" + id + "").parent("div").find("span.notice").html("");
                return true;

            }
        
      },
      val_ref_id : function() {

            var id = arguments[0];

            var value = $("#" + id + "").val();   
                    
            value = value.trim();
            var pattern = /^[A][E,M]\d{8}$/;

            if(value == "" || value == null) {

                $("#" + id + "").parent("div").find("span.notice").html("Please enter your registration number"); 
                return false;

            }
            if(!pattern.test(value)) {

                $("#" + id + "").parent("div").find("span.notice").html("Please enter a valid registration  number"); 
                return false;

            }
            else {

                $("#" + id + "").parent("div").find("span.notice").html("");
                return true;

            }
        
      },
      val_email_for_login : function() {

            var id = arguments[0];

            var value = $("#" + id + "").val();  
            value = value.trim();
                    
            if(value == "" || value == null) {

                $("#" + id + "").parent("div").find("span.notice").html("Please enter your email id"); 
                return false;

            }
            else if((/^[A-Za-z0-9#$%^&*\-_\.]+@[A-Za-z0-9\-\.]+\.[a-z]{2,}$/).test(value) == false) {

               $("#" + id + "").parent("div").find("span.notice").html("Please enter a valid email id"); 
                return false;
                
            }
            else {
                
                 $("#" + id + "").parent("div").find("span.notice").html("");
                return true;
                
            }
        
        },
        
    };
    
    
})();
    
    
//});    