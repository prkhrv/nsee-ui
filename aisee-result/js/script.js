$(function(){
    
//    alert("hello");
    
    
    $("#stream").change(function(){ validate.val_select("stream", "Please select the course");});
    
    $("#income").change(function(){ validate.val_select("income", "Please select your family income");});
    
    $("#goccupation").change(function(){ validate.val_select("goccupation", "Please select Guardian occupation");});
    
    $("#gender").change(function(){ validate.val_select("gender", "Please select your gender");});
    $("#nationality").change(function(){ validate.val_select("nationality", "Please select your nationality");});
    $("#medium").change(function(){ validate.val_select("medium", "Please select your medium of school");});
    $("#fcenter").change(function(){ validate.val_select("fcenter", "Please select your first center of examination");});
    
    $("#scenter").change(function(){ validate.val_select("scenter", "Please select your second center of examination");});
    
    
    $("#tcenter").change(function(){ validate.val_select("tcenter", "Please select your third center of examination");});
    
    $("#4center").change(function(){ validate.val_select("4center", "Please select your fourth center of examination");});
    
    
    
    
    $("#year_ob").change(function(){ validate.val_select("year_ob", "Please select the year");});
    $("#month_ob").change(function(){ validate.val_select("month_ob", "Please select the month");});
    $("#date_ob").change(function(){ validate.val_select("date_ob", "Please select the date");});
    
    $("#first_name").blur(function(){validate.val_text("first_name", "Please enter your first name.")});
    
    $("#email").blur(function(){validate.val_email("email");});
    $("#login_email").blur(function(){validate.val_email_for_login("login_email");});
    
    $("#mobile_no").blur(function(){validate.val_mobile_no("mobile_no");});
    
    $("#mname").blur(function(){validate.val_text("mname", "Please enter your mother's full name.")});
    $("#fname").blur(function(){validate.val_text("fname", "Please enter your father's full name.")});
    $("#address").blur(function(){validate.val_text("address", "Please enter your address.")});
    $("#city").blur(function(){validate.val_text("city", "Please enter your city name.")});
    $("#state").blur(function(){validate.val_text("state", "Please enter your state name.")});
    
    $("#pincode").blur(function(){validate.val_pin_code("pincode")});
    
    $("#applying_from").blur(function(){validate.val_text("applying_from", "Please enter from where you are  applying from.")});

    $("#ten_perc").blur(function(){validate.val_text("ten_perc", "Please enter your class 10th percentage.")});
    $("#ten_pass_year").blur(function(){validate.val_select("ten_pass_year", "Please enter your class 10th passing year.")});



//second year
    //$("#two_perc").blur(function(){validate.val_text("two_perc", "Please enter your class 12th percentage.")});
    //$("#two_pass_year").blur(function(){validate.val_select("two_pass_year", "Please enter your class 12th passing year.")});
//second year


    $("#school_name").blur(function(){validate.val_text("school_name", "Please enter your school name.")});
    $("#board_name").blur(function(){validate.val_text("board_name", "Please enter your board name.")});
    $("#appear_exam").blur(function(){validate.val_text("appear_exam", "Please enter exams you are appearing.")});
    $("#gname").blur(function(){validate.val_text("gname", "Please enter your guardian name.")});
    $("#gcontact_no").blur(function(){validate.val_mobile_no("gcontact_no");});

//    $("#goccupation").blur(function(){validate.val_text("goccupation", "Please enter your guardian occupation.")});
//    $("#income").blur(function(){validate.val_text("income", "Please enter your family income.")});




    $("#refrence_id").blur(function(){validate.val_ref_id("refrence_id")});
    
    
    //function to remove spacial charectors
    function remove_spacial(value) {
        
        var spacial_chars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "/", "|", "\\", "\,", "?", "\:" , ";", "'", "\""];
        
        if(spacial_chars.indexOf(value) != -1) {
            
            alert("Please use spaces instead of spacial charactors");
            
            return true
            
        }
        else {
            
            return false
            
        }
        
    }
    //end
    
    
    //function to validate dob
    function val_whatsapp_id() {
        
        value = $("#whatsapp_id").val();
        
        if(value == "" || value == null) {
            
            return true;
            
        }
        else {
            
            if(validate.val_mobile_no("whatsapp_id") == true) {
                
                return true;
                
            }
            else {
                
                return false;
                
            }
            
        }
        
        
    }
    //end
    
    
    
    
    $("#address").keyup(function(){
        
        value = $(this).val();
        
        if(remove_spacial(value.slice(-1)) == true) {
            
            $(this).val(value.slice(0,-1));
            
        }

        
    });
    
    $("#ten_perc").keyup(function(){
        
        value = $(this).val();
        
        if(remove_spacial(value.slice(-1)) == true) {
            
            $(this).val(value.slice(0,-1));
            
        }

        
    });
    
    
    
    $("#whatsapp_id").blur(function(){
        
        val_whatsapp_id();
        
    });
    
    
    
    
    
    
    
    
    
    // function validate whole form
    function validate_form() {

        var stream      =   validate.val_select("stream", "Please select the course");
        var sex 	=   validate.val_select("gender", "Please select your gender");
        var first_name  =   validate.val_text("first_name", "Please enter your first name.");
        var email       =   validate.val_email("email");
        var mobile_no   =   validate.val_mobile_no("mobile_no");
        
        if(stream == false || first_name == false || email == false || mobile_no == false || sex == false) {

            return false;

        }
        else  {

            return true;

        }

    }


  $("#register_form").on('submit', function(e){

//      e.preventDefault();
//      
        if(validate_form()) {

            return true;

        }
        else {
            
            return false;
            
        }

    });
    //function to save class 
    
    
    
    
    
    
    
        // function validate whole form
    function validate_details() {

//        var stream      =   validate.val_select("stream", "Please select the course");
        var gender      =   validate.val_select("gender", "Please select your gender");
        var nationality =   validate.val_select("nationality", "Please select your nationality");
        var medium      =   validate.val_select("medium", "Please select your medium of school");
        
        var fcenter     =   validate.val_select("fcenter", "Please select your first center of examination");
        var scenter     =   validate.val_select("scenter", "Please select your second center of examination");
        
        var tcenter     =   validate.val_select("tcenter", "Please select your third center of examination");
        var forcenter     =   validate.val_select("4center", "Please select your fourth center of examination");
        
        
//        var first_name  =   validate.val_text("first_name", "Please enter your first name.");
//        var email       =   validate.val_email("email");
//        var mobile_no   =   validate.val_mobile_no("mobile_no");
        var mname       =   validate.val_text("mname", "Please enter your mother's full name.");
        var fname       =   validate.val_text("fname", "Please enter your father's full name.");
        var address     =   validate.val_text("address", "Please enter your address.");
        var city        =   validate.val_text("city", "Please enter your city name.");
        var state       =   validate.val_text("state", "Please enter your state name.");
        var pincode     =   validate.val_pin_code("pincode");
        var applying_from = validate.val_text("applying_from", "Please enter from where you are  applying from.");
        var ten_perc    =   validate.val_text("ten_perc", "Please enter your class 10th percentage.");
        var ten_pass_year = validate.val_select("ten_pass_year", "Please enter your class 10th passing year.");


//second year
        var two_perc    =   validate.val_text("two_perc", "Please enter your class 12th percentage.");
        var two_pass_year = validate.val_select("two_pass_year", "Please enter your class 12th passing year.");
//second year




        var school_name =   validate.val_text("school_name", "Please enter your school name.");
        var board_name  =   validate.val_text("board_name", "Please enter your board name.");
        var appear_exam =   validate.val_text("appear_exam", "Please enter exams you are appearing.");
        var gname       =   validate.val_text("gname", "Please enter your guardian name.");
        var gcontact_no =   validate.val_mobile_no("gcontact_no");



        var goccupation =   validate.val_select("goccupation", "Please select your Guardian Occupation");
        var income      =   validate.val_select("income", "Please enter your family income.");
        
        var year_ob     =   validate.val_select("year_ob", "Please select the year");
        var month_ob    =   validate.val_select("month_ob", "Please select the month");
        var date_ob     =   validate.val_select("date_ob", "Please select the date");
        
        var whastapp_id = val_whatsapp_id();

        if(gender == false || nationality == false || medium == false || fcenter == false || scenter == false || tcenter == false || forcenter == false || mname == false || fname == false || address == false || city == false || state == false || pincode == false || applying_from == false || ten_perc == false || ten_pass_year == false || school_name == false || board_name == false || appear_exam == false || gname == false || gcontact_no == false || goccupation == false || income == false || year_ob == false || month_ob == false || date_ob == false || whastapp_id == false) {

            return false;

        }
        else  {

            return true;

        }

    }


  $("#form").on('submit', function(e){

//      e.preventDefault();
//      
        if(validate_details()) {

            return true;

        }
        else {
            
            return false;
            
        }

    });
    //function to save class
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function validate_login() {

        var stream      =   validate.val_select("stream", "Please select the course");
        var login_email      =   validate.val_email_for_login("login_email");
        var refrence_id =   validate.val_ref_id("refrence_id");
        
        if(refrence_id == false || login_email == false) {

            return false;

        }
        else  {

            return true;

        }

    }
    
    
    
    
    //login form 
    $("#login_form").on('submit', function(e){

      e.preventDefault();
//      
        if(validate_login()) {
            
            var stream      = $("#stream").val();
            var refrence_id = $("#refrence_id").val();
            var email       = $("#login_email").val();

            $.ajax({
                
                url  : "includes/login_user.php",
                type : "POST",
                data : {stream : stream, refrence_id : refrence_id, email : email},
                success : function(result) {
                    
                   alert(result);
                    
                    if(result == "success") {
                        
//                        setTimeout(function(){ window.location = "timer_page.php" }, 2000);
                        window.location = "timer_page.php";
                        
                    }
                    else if(result == "fail") {
                        
//                        $("#login_success").html("<span class='notice' style='color:red'>Please check the details and try again.</span>");
                        
                         alert("Please check the details and try again.");
                        
                        
                    }
                    
                    
                    
                }
                
                
                
                
                
            });

        }
        else {
            
            return false;
            
        }

    });
    //end
    
    
    
    
    
    
    
    
    
    
    
    
    
});