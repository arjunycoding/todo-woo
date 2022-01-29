let createTodo = $("#createTodo")
let newTodo = $("#newTodo")
let heading = $("#heading")
let color = "alert"
let el = 0
let prevColor = 0

$(".editOptins").hide()
newTodo.on("click",function(){
    heading.html("New Todo")
    $(".newTodo").show()
    $("#home").hide()
    newTodo.hide()
})

$(".color").on("click",function(){
    color += $(this).attr('class').split(' ')[2].slice(3)
})

createTodo.on("click", function(){
    heading.html("Current Todos")
    let titleVal = $("input#title").val()
    let memoVal = $.trim($("#memo").val())
    $(".todos").append(
        `<div class="alert ${color} todoItem" role="alert">
            <b id="todoTitle">${titleVal}</b> --> ${memoVal}
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
    createTodo.show()
    $(".editOptins").hide()
    // console.log($(".todoItem"))
})

$("#home").on("click", ".todoItem", function(){
    prevColor = color
    let item = $(this).text()
    el = $(this)
    let splitted = item.replace(/\s{2,}/g, '').split('-->');
    let title = splitted[0]
    let memo = splitted[1]
    let titleVal = $("input#title").val(title)
    let memoVal = $.trim($("#memo").val(memo))
    console.log(title, memo)
    heading.html("Edit Todo")
    $(".newTodo").show()
    $("#home").hide()
    $("#createTodo").hide()
    $(".editOptins").show()


})

$("#save").on("click", function(){
    heading.html("Current Todos")
    let titleVal = $("input#title").val()
    let memoVal = $.trim($("#memo").val())
    el.removeClass(prevColor);
    el.addClass(color);
    el.html(`<b id="todoTitle">${titleVal}</b> --> ${memoVal}`)
    $("input#title").val("")
    $.trim($("#memo").val(""))
    color = "alert"
    $(".newTodo").hide()    
    $("#home").show()
    $("#noTodo").hide()
    newTodo.show()
    $(".todos").show()

})