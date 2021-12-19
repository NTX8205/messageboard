var input, yourname;
$(document).ready(function () {
    $("#tap").click(function () {
        input = $("#comment").val();
        yourname = $("#yourname").val();
        tap();
        $("input").val("");
        $("textarea").val("");
    });
});

function tap() {
    var floor = $("<div class='container mt-3 mes'>");
    floor.attr("id", "message");
    floor.append(
        $("<p class=firstname >").html("姓名: "+yourname),
        $("<p class=text >").html("內容: " + input),
        $("<button class='btn btn-outline-danger delete'>").html("刪除").attr("id", "del"),
        $("<button class='btn btn-outline-success edt'>").html("編輯").attr("id", "edit")
    );
    $("#messages").append(floor);
    $("#messages").on("click", "#del", function () {
        $(this).parents("#message").remove();
    });
} 