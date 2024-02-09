// get the elements in palette id div
document.getElementById("palette").addEventListener('click', function(event) {
    // verify button clicked to find a match
    if (event.target && event.target.matches("button")) {
        // change background color based in button background color matched
        document.getElementById("box").style.backgroundColor = event.target.style.backgroundColor;
    }
});