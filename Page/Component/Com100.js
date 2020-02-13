
function Com100(name){

    this.name = name
    this.div = $("<div></div>")

    var _this = this
    var text = $("<p></p>").text(_this.name)
    $(this.div).append(text)
        
}
