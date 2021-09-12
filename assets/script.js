$(document).ready(function () {
    
    // saved events
        //LOCAL STORAGE for each save button to get the item (description's value) KEY
        $("#9 .description").val(localStorage.getItem("9"));
        $("#10 .description").val(localStorage.getItem("10"));
        $("#11 .description").val(localStorage.getItem("11"));
        $("#12 .description").val(localStorage.getItem("12"));
        $("#13 .description").val(localStorage.getItem("13"));
        $("#14 .description").val(localStorage.getItem("14"));
        $("#15 .description").val(localStorage.getItem("15"));
        $("#16 .description").val(localStorage.getItem("16"));
        $("#17 .description").val(localStorage.getItem("17"));
        // console.log("workin?");
        time();
    // ****************************************************
    $(".saveBtn").on("click", function () { //connected to storage "getItem"
        var time = $(this).parent().attr("id"); // in the hour id name 
        var textarea = $(this).siblings(".description").val(); //get the value of
        localStorage.setItem(time, textarea); //KEY/VALUE - time/textarea
        //storage variables textarea & timeBlock
    })
    function time() {  
    // console.log("workin?"); DONE
        var currentTime = moment().hour();  //FIXED!!!
       
    // ---------------------------------------------------------------------
    // TIME LOOP = past, present, future
    
        //DONE
        //loop through time block to determine if it is past present future 
        $(".time-block").each(function () { //this pull from time-block class
            var timeBlock = parseInt($(this).attr("id"));

                if (timeBlock < currentTime) {
                    $(this).toggleClass("past");
                }
                else if (timeBlock === currentTime) {
                    $(this).toggleClass("present");
                }
                else { //if others false, it must be future 
                    $(this).toggleClass("future");
                }
        })
    }

});
         //DATE & TIME display ------------------------------------------------------------------   
         // currentTime = currentTime.startOf("hour"); DONE
        var currentTime = moment();   
        $('#currentTime').text(currentTime.format("MMM Do, YYYY, h:mm a"));