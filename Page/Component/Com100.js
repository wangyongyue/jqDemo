class Com100 {
    constructor(name) {
        this.name = name
        this.com = function () {
            var _this = this
            var div = $("<div></div>")
            var text = $("<p></p>").text(_this.name)
            $(div).append(text)
           
            return div
        }
        
    }
   
    
}
