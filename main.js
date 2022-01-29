let createTodo = $("#createTodo")
let newTodo = $("#newTodo")
let heading = $("#heading")
let color = "alert"

newTodo.on("click",function(){
    heading.html("New Todo")
    $(".newTodo").show()
    $("#home").hide()
    newTodo.hide()
})
$(".color").on("click",function(){
    // console.log($(this).attr('class').split(' ')[2][1]);
    console.log($(this).attr('class').split(' ')[2].slice(3));
    color += $(this).attr('class').split(' ')[2].slice(3)
    console.log(color)
})
createTodo.on("click", function(){
    heading.html("Current Todos")
    let titleVal = $("input#title").val()
    let memoVal = $.trim($("#memo").val())
    $(".todos").append(
        `<div class="alert ${color}" role="alert">
            <b>${titleVal}</b> ${memoVal}
        </div>`
    )
    $("input#title").val("")
    $.trim($("#memo").val(""))
    color = "alert"
    $(".newTodo").hide()    
    $("#home").show()
    $("#noTodo").hide()
    newTodo.show()
    $(".todos").show()
})