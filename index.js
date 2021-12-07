// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("Click", function () {
//         alert("I got Clicked!");
//     });
// }
var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

    document.querySelectorAll(".button")[j]
        .addEventListener("click", function () {
            var buttonStyle = this.innerHTML;
            sound(buttonStyle);
            animation(buttonStyle);
        });
}
