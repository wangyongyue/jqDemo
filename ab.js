 
class T {
    constructor(name) {
        this.name = name
        this.vid = 1
        this.ab = function () {
            var _this = this
            var div = $("<div></div>")
            var test = $("<p></p>").text(this.name)
            var c = $("<input></input>").val("请输入")
            c.on("input propertychange",function(){
                test.text(c.val())
                _this.name =  c.val()
            })
            var b = $("<button></button>").text("button1").click(function() {
                _this.vid =  2
            })

            $(div).append(test,c,b)
           
            return div
        }
        
    }
   
    
}

