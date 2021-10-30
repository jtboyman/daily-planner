$(".description").on("click", "p", function() {
    let text = $(this).text().trim();

    let textInput = $("<textarea>").val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});