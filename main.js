let createTodo = $("#createTodo")
let newTodo = $("#newTodo")
let heading = $("#heading")
let color = "alert"
let error = $(".error1")
let el = 0
let prevColor = "alert"
let todoItemClicked = ""

// When the ""New Todo butn is clicked
newTodo.on("click",function(){
    heading.html("New Todo")
    // Hide and show
    $(".newTodo").show()
    $("#home").hide()
    newTodo.hide()
    $(".editOptins").hide()
    $("#createTodo").show()
})
// When a color is clicked
$(".color").on("click",function(){
    color += $(this).attr('class').split(' ')[2].slice(3)
})

// When the create todo btn is clicked
createTodo.on("click", function(){
    let titleVal = $("input#title").val()
    let memoVal = $.trim($("#memo").val())
    if(prevColor == "alert" && titleVal == ""){
        $(".errorBoth").show()
        return
    } else if(titleVal == ""){
        error.show()       
        return
    } else if(color == "alert"){
        $(".error2").show()
        return
    } else {
        if(memoVal == ""){
            $(".todos").append(
                `<div class="alert ${color} todoItem" role="alert">
                <b id="todoTitle">${titleVal}</b>
                </div>`
            )
        } else {
            $(".todos").append(
                `<div class="alert ${color} todoItem" role="alert">
                <b id="todoTitle">${titleVal}</b> --> ${memoVal}
                </div>`
            )
        }
    } 
    heading.html("Current Todos")
    $("input#title").val("")
    $.trim($("#memo").val(""))
    prevColor = color
    color = "alert"
    $(".newTodo").hide()    
    $("#home").show()
    $("#noTodo").hide()
    newTodo.show()
    $(".todos").show()
    createTodo.show()
    $(".editOptins").hide()
    $(".errorBoth").hide()
    $(".error2").hide()
    $(".error1").hide()
})

$("#home").on("click", ".todoItem", function(){
    let item = $(this).text()
    el = $(this)
    let splitted = item.replace(/\s{2,}/g, '').split('-->');
    let title = splitted[0]
    let memo = splitted[1]
    let titleVal = $("input#title").val(title)
    let memoVal = $.trim($("#memo").val(memo))
    heading.html("Edit Todo")
    $(".newTodo").show()
    $("#home").hide()
    $("#createTodo").hide()
    $(".editOptins").show()
    $("#cancel").hide()
    todoItemClicked = el.text()
    
    
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
    prevColor = color
    color = "alert"
    $(".newTodo").hide()    
    $("#home").show()
    $("#noTodo").hide()
    newTodo.show()
    $(".todos").show()

})

$(".cancel").on("click", function(){
    $(".newTodo").hide()    
    $("#home").show()
    if($(".todos").html() == ""){
        $("#noTodo").show()
    }
    newTodo.show()
    createTodo.hide()
    $(".editOptins").hide()
    $(".errorBoth").hide()
    $(".error2").hide()
    $(".error1").hide()
})

$(".delete").on("click", function(){
    let todoClass = $(`div:contains(${todoItemClicked})`)[5]
    todoClass.remove()
    $(".newTodo").hide()    
    $("#home").show()
    if($(".todos").html() == ""){
        $("#noTodo").show()
        $(".todos").hide()
    }
    newTodo.show()
    createTodo.hide()
    $("input#title").val("")
    $.trim($("#memo").val(""))
    $(".editOptins").hide()
    $(".errorBoth").hide()
    $(".error2").hide()
    $(".error1").hide()
    

})

$(".compleate").on("click", function(){
    let todoClass = $(`.todoItem:contains(${todoItemClicked})`)
    todoClass.appendTo(".todosCompleate")
    console.log($(todoClass))
    todoClass.remove()
    $("#compleate").show()
    $(".newTodo").hide()
    $("#home").show()
    if($(".todos").html() == ""){
        $("#noTodo").show()
        $(".todos").hide()
    }
    newTodo.show()
    createTodo.hide()
    $("input#title").val("")
    $.trim($("#memo").val(""))
    $(".editOptins").hide()
    $(".errorBoth").hide()
    $(".error2").hide()
    $(".error1").hide()

})