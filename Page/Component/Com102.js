class Com102 {
    constructor(name) {
        this.name = name
        this.vid = 0
        this.com = function () {
            var _this = this
            var div = $("<div></div>")
            var text = $("<p></p>").text(this.name)
            var button = $("<button></button>").text("button1").click(function() {
                _this.vid =  1
            })

            $(div).append(text,button)
           
            return div
        }
        
    }
   
    
}
