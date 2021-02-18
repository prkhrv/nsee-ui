$(function(){


    var slot_booking_id = "";
     var booking ="";
    var slot_no = "";
    var parent_id = "";
    var center_name = "";
    var center_f_id = "";
    var element;
    var id = "";





   $(document).on('change', 'select#center', function(){
  
           var center = $(this).val();
           
          $.ajax({
          
               type: "POST",
               url: "center_for_booking.php",
               data: {center : center},
               success: function(html){
              //alert(html);
                $("#table").html(html);

               }
          
          });
  
  });
  







  
  //function to book slot
  $(document).on('click', 'span.book', function(){
  
        element = $(this);
  
        var center_id = $('#center').val();
        center_f_id = center_id;
        center_name = $('#center').attr("data-center-name");
        var exam_date = $(this).parent().parent().find("td.date").attr("data-exam-date");
        var exam_time = $(this).attr("data-exam-time");
        var d_exam = new Date(exam_date);

        var slot_no = $(this).attr("data-slot-no");  

 


        $("#slot_book").attr("data-center_id", center_id);  
        $("#slot_book").attr("data-exam_date", exam_date); 
        $("#slot_book").attr("data-slot_no", slot_no); 

        
        var result ="<p> You have Selected " + center_name + " as Your examination center. </p><p> Your exam will be at " + d_exam.toDateString() + " at " + exam_time + ".</p></p> If You agree, then book your slots for the examination. </p>";

       $("#booking_details").html(result);
       $('#myModal').modal('show');
       
    

  });
  //end






//new function for booking slot
$(document).on('click', 'button#slot_book', function(){

     $(this).attr('disabled', 'disabled');     

     var center_id = $('#center').val();
     
     var slot_no = $("#slot_book").attr("data-slot_no");

     var exam_date = $("#slot_book").attr("data-exam_date");

     //alert(exam_date);
 
     $.ajax({

          type: "POST",
          url: "booking_exam.php",
          data: {center_id : center_id, exam_date : exam_date, slot_no : slot_no},
          success: function(html){

            alert(html);
          var result = html.split(",");

             if(result[0] == 'success'){

                 $("#booking_results").html(result[1]);
                   //display_booking_data(result[2]);
                   id = result[2];

             }
             else if(result[0] == 'failed'){
          
                 $("#booking_results").html(result[1]);

                 element.parent().html("<span style='color:red'>Unavailable</span>");

             }

         
          $('#myModal').modal('hide');

            $('#myModal2').modal({
             backdrop: 'static',
             keyboard: false
            })
    
          $('#myModal2').modal('show');
            
          $('#city').remove();
           //alert(html);
             
       }

    });

});
//end

function display_booking_data(id){
  
   $.ajax({

          type: "POST",
          url: "display_booking_data.php",
          data: {id : id},
          success: function(html){
         $("#table").html(html);

        } 



  });

}

  
  $(document).on('click', 'button#save_card', function(){

         var card_type = $("#card_type").val();
         var card_no = $("#card_no").val();

    if(card_type != "" && card_no != ""){

      $.ajax({

            type: "POST",
            url: "identity_card.php",
            data: {card_type: card_type, card_no : card_no},
            success: function(html){

             if(html != 'failed'){
                
                  $("#center_d").html(html);
                  $('#summery').addClass("show");

                  $('#myModal2').modal('hide');
             
               }
           
            }

      });

    }
    else{

     alert("Please Select Identity Card Type and Enter Number");

    }

  }); 

 



  //function to open book slot
  $(document).on('click', 'span.book_t', function(){
 // alert("hello");
        element = $(this);
  
        var center_id = $('#center_t').val();
        center_f_id = center_id;
        center_name = $("#center_t option[value='" + center_id + "']").text();
        var exam_date = $(this).parent().parent().find("td.date").attr("data-exam-date");
        var exam_time = $(this).attr("data-exam-time");
        var d_exam = new Date(exam_date);

        var slot_no = $(this).attr("data-slot-no");  

       //alert(slot_no);


        $("#slot_book_t").attr("data-center_id", center_id);  
        $("#slot_book_t").attr("data-exam_date", exam_date); 
        $("#slot_book_t").attr("data-slot_no", slot_no); 

        
        var result ="<p> You have Selected " + center_name + " as Your examination center. </p><p> Your exam will be at " + d_exam.toDateString() + " at " + exam_time + ".</p></p> If You agree, then book your slots for the examination. </p>";

       $("#booking_details_t").html(result);
       $('#myModal_t').modal('show');
       
  });
  //end




  $(document).on('change', 'select#center_t', function(){
  
           var center = $(this).val();
           
          $.ajax({
          
               type: "POST",
               url: "center_for_booking.php",
               data: {center : center},
               success: function(html){
              //alert(html);
                $("#table").html(html);

               }
          
          });
  
  });
  


//new function for booking slot
$(document).on('click', 'button#slot_book_t', function(){

     $(this).attr('disabled', 'disabled');     

     var center_id = $('#center_t').val();
     
     var slot_no = $("#slot_book_t").attr("data-slot_no");

     var exam_date = $("#slot_book_t").attr("data-exam_date");

     $.ajax({

          type: "POST",
          url: "buffer_booking_exam.php",
          data: {center_id : center_id, exam_date : exam_date, slot_no : slot_no},
          success: function(html){
          
           // alert(html);
          var result = html.split(",");

             if(result[0] == 'success'){

                 $("#booking_results").html(result[1]);
                   //display_booking_data(result[2]);
                   id = result[2];

             }
             else if(result[0] == 'failed'){
          
                 $("#booking_results").html(result[1]);

                 element.parent().html("<span style='color:red'>Unavailable</span>");

             }

         
          $('#myModal_t').modal('hide');

            $('#myModal2').modal({
             backdrop: 'static',
             keyboard: false
            })
    
          $('#myModal2').modal('show');
            
          $('#city').remove();
           //alert(html);
             
       }

    });

});
//end





});