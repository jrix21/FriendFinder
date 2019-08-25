$("#submit").on("click", function(event) {
    event.preventDefault();

    function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
        if ($(this).val() === "") {
        isValid = false;
        }
    });
    
    return isValid;
    }

    if (validateForm()) {
    var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
        $("#quest1").val(),
        $("#quest2").val(),
        $("#quest3").val(),
        $("#quest4").val(),
        $("#quest5").val(),
        $("#quest6").val(),
        $("#quest7").val(),
        $("#quest8").val(),
        $("#quest9").val(),
        $("#quest10").val()
        ]
    };

    $.post("/api/friends", userData, function(data) {
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);
        $("#results-modal").modal("toggle");

    });
    } else {
    alert("Please fill out all fields before submitting!");
    }
});