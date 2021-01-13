document.body.onclick = function (event) {
    event = event || window.event;
    if (event.target.classList.contains('min-photo')) {
        // remove .active class in .goods-img-min divs
        var allDivs = document.querySelectorAll('.min-product__photo div');
        for (var i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.remove('active');
        }

        document.getElementById('max-photo').src = event.target.src;
        event.target.parentElement.classList.add('active');
    }

}