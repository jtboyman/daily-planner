var dailyTasks = [];

$('#currentDay').text(moment().format("dddd, MMMM Do"));

let loadTasks = function() {
    dailyTasks = JSON.parse(localStorage.getItem('dailyTasks'));
    if (!dailyTasks) {    
        dailyTasks = [
            {id:0, text:""},
            {id:1, text:""},
            {id:2, text:""},
            {id:3, text:""},
            {id:4, text:""},
            {id:5, text:""},
            {id:6, text:""},
            {id:7, text:""},
            {id:8, text:""},
        ]
    };

    $('textarea').each(function(i) {
        $('textarea').eq(i).val(dailyTasks[i].text);
    })
};

$(".saveBtn").on("click", function() {

    let time = $(this).closest(".row").attr("id");

    let task = $("#"+time).children("textarea").val();

    dailyTasks[time].text = task;
    localStorage.setItem("dailyTasks", JSON.stringify(dailyTasks));
});

let timeCheck = function() {
    $('.description').each(function(i) {

        $(this).removeClass("past present future")

        let time = moment().hour(i+9);

        if (moment().isAfter(time, 'hour')) {
            $(this).addClass("past");
        }

        else if (moment().isSame(time, 'hour')) {
            $(this).addClass("present");
        }

        else if (moment().isBefore(time, 'hour')) {
            $(this).addClass("future");
        }
    });
}

loadTasks();
timeCheck();

setInterval(timeCheck, 300000);