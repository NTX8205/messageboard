var input, yourname;
$(document).ready(function () {
    $("#tap").click(function () {
        input = $("#comment").val();
        yourname = $("#yourname").val();
        tap();
        $("input").val("");
        $("textarea").val("");
    });

    $("#edit").click(function () {
        edit();
    });
});

function tap() {
    var floor = $("<div class='container mt-3 mes'>");
    floor.attr("id", "message");
    floor.append(
        $("<p class=firstname >").html("姓名: "),
        $("<p class=conname id=conname>").html(yourname),
        $("<p class=text >").html("內容: "),
        $("<p class=context id=context>").html(input),
        $("<button class='btn btn-outline-danger delete'>").html("刪除").attr("id", "del"),
        $("<button class='btn btn-outline-success edt'>").html("編輯").attr("id", "edit")
    );
    $("#messages").append(floor);
    $("#messages").on("click", "#del", function () {
        $(this).parents("#message").remove();
    });
    $("#messages").on("click","#edit",function () {
        $("#conname").replaceWith("<input type=text class=form-control id=yourname1 value="+yourname+">");
        $("#del").replaceWith("<button class='btn btn-outline-primary' id=send>更改");
        $("#edit").replaceWith("<button class='btn btn-outline-danger' id=cancel>取消");
        $("#context").replaceWith("<textarea class=form-control rows=3 id=content name=text>"+input+"</textarea>");
    });
    $("#messages").on("click","#send",function () {
        input = $("#content").val();
        yourname = $("#yourname1").val();
        $("#yourname1").replaceWith("<p class=conname id=conname>"+yourname);
        $("#content").replaceWith("<p class=context id=context>"+input);
        $("#send").replaceWith("<button class='btn btn-outline-danger' id=del>刪除");
        $("#cancel").replaceWith("<button class='btn btn-outline-success' id=edit>編輯");
    });
    $("#messages").on("click","#cancel",function () {
        $("#yourname1").replaceWith("<p class=conname id=conname>"+yourname);
        $("#send").replaceWith("<button class='btn btn-outline-danger' id=del>刪除");
        $("#cancel").replaceWith("<button class='btn btn-outline-success' id=edit>編輯");
        $("#content").replaceWith("<p class=context id=context>"+input);
    });


} 
