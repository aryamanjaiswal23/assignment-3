
document.addEventListener("DOMContentLoaded", function () {
    var pricingPlans = document.querySelectorAll(".pricing-plan");
    var subscribeButton = document.querySelector(".subscribe-button");

    var index = 0;
    var interval = setInterval(function () {
        pricingPlans[index].classList.add("show");
        index++;

        if (index >= pricingPlans.length) {
            clearInterval(interval);
            subscribeButton.classList.add("show");
        }
    }, 500);
});

