
function Com101(name){

    this.name = name
    this.div = $("<div></div>")

    var _this = this
    var text = $("<p></p>").text(this.name)
    var input = $("<input></input>").val("请输入")
    input.on("input propertychange",function(){
        text.text(input.val())
        _this.name = input.val()
    })
    this.div.append(text,input)
        
}