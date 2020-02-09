class Com101 {
    constructor(name) {
        this.name = name
        this.com = function () {
            var _this = this
            var div = $("<div></div>")
            var text = $("<p></p>").text(this.name)
            var input = $("<input></input>").val("请输入")
            input.on("input propertychange",function(){
                text.text(input.val())
                _this.name = input.val()
            })
            div.append(text,input)
           
            return div
        }
        
    }
   
    
}
