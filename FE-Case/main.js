
String.prototype.spacify = function(){
	var split = this.split("");
return split.join(" ");
};

var headerText = 'hello world'.spacify();

console.log(headerText);
//document.getElementById("spacify").innerHTML = headerText;
document.getElementsByTagName("h1")[0].innerHTML = headerText;
var backgroundcolor = function () {
    var articles = document.getElementsByTagName("article");
    for(var i = 0; i<articles.length; i++) {
    	var hex = Math.floor(Math.random() * 0xFFFFFF);
        articles[i].style.backgroundColor =  "#" + ("000000" + hex.toString(16)).substr(-6);


    }
};
backgroundcolor();

var equalHeight = function() {
    var article = document.getElementsByTagName("article");
    var tallest = 0;
    for(i = 0; i < article.length; i++)
    {
        var element = article[i];
        var elementHeight = element.offsetHeight;
        tallest = (elementHeight>tallest ? elementHeight : tallest);
    }
    for(i = 0; i < article.length; i++)
    {
        article[i].style.height = tallest + "px";
    }
};
equalHeight();


    var article = document.getElementsByTagName("article");
    for(var i = 0; i<10; i++){
    article[i].addEventListener("mouseover", function () {
        target = event.target;
       // event.target.style.backgroundColor = "blue";
        // Not pleased with this..
    })
	}






// Assignment 7: Fix the code
// the buttons should alert the number written on them - currently they all alert 5
for (var i=0, btn; i<5; i++) {
	btn = document.createElement("button");
	btn.innerHTML = "Button #" + i;
	btn.alert =i;
	btn.onclick = function () {
		alert(this.alert);

	};
    document.body.appendChild(btn);
}

// Assignment 8: Fix the code
var Friends = (function() {
var i = 0;

	function Friends() {
		var ival = setInterval(function() {
			console.log(this.friends[i]);
			
			i++;
			if(i === this.friends.length) {
				clearInterval(ival);
			}
		}, 1000);
	}

	Friends.prototype.friends = ['Mikkel', 'Jens', 'Filip'];

	return Friends;
	
})();

var f = new Friends();
console.log(f.friends)
var f2 = new Friends();
console.log(f2.friends)

/* it should log:
Mikkel
Mikkel
Jens
Jens
Filip
Filip
*/