$(document).ready(function () {
    $(".saveBtn").on("click", function () { //connected to storage "getItem"
        var textarea = $(this).siblings(".description").val(); //get the value of
        var time = $(this).parent().attr("id"); // in the hour id name 
        localStorage.setItem(textarea, time);
        //storage variables textarea & timeBlock
    })

    //DATE & TIME
    // currentTime = currentTime.startOf("hour"); DONE
    
    var currentTime = moment();
        $('#currentTime').text(currentTime.format("MMM Do, YYYY, h:mm a"));
    // console.log("workin?"); DONE
    
    // ---------------------------------------------------------------------
    // TIME LOOP = past, present, future
    function time() {
        //DONE
        //loop through time block to determine if it is past present future 

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

                if (timeBlock < currentTime) {
                    $(this).toggleClass("past");
                }
                else if (timeBlock === currentTime) {
                    $(this).toggleClass("present");
                }
                else { //if others fail, it must be future 
                    $(this).toggleClass("future");
                }
        })
    }
    // -----------------------------------------------------------
    // THEN the saved events persist
    //LOCAL STORAGE for each save button to get the item (description's value) KEY
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    // console.log("workin?");
    time();

});