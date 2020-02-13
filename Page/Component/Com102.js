
function Com102(name){

    this.name = name
    this.div = $("<div></div>")

    var _this = this
    var text = $("<p></p>").text(this.name)
    var button = $("<button></button>").text("button1").click(function() {
        _this.vid =  1
    })
    this.div.append(text,button)
            
            
            
        
}