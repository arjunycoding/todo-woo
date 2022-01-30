let createTodo = $("#createTodo")
let newTodo = $("#newTodo")
let heading = $("#heading")
let color = "alert"
let error = $(".error")
let el = 0
let prevColor = 0

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
    if(titleVal == ""){
        error.show()
        return
    }
    if(memo == ""){
        $(".todos").append(
            `<div class="alert ${color} todoItem" role="alert">
            <b id="todoTitle">${titleVal}</b>
            </div>`)        
    } else {
        $(".todos").append(
            `<div class="alert ${color} todoItem" role="alert">
            <b id="todoTitle">${titleVal}</b> --> ${memoVal}
            </div>`
        )
    } 
    console.log(`Hi "${memoVal}"`)
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
})

$("#home").on("click", ".todoItem", function(){
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
    console.log(color, prevColor)
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