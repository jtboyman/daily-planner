var dailyTasks = [];

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
//figure out how to loop this
    $.each(dailyTasks, function() {
        
    })
};

$(".saveBtn").on("click", function() {

    let time = $(this).closest(".row").attr("id");

    let task = $("#"+time).children("textarea").val();

    console.log(time);
    console.log(task);

    dailyTasks[time].text = task;
    localStorage.setItem("dailyTasks", JSON.stringify(dailyTasks));
});

loadTasks();