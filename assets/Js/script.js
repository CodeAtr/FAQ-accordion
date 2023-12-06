document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.landing-faq-button');
    var displayTextContainers = document.querySelectorAll('.landing-faq-text');

    buttons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            // Hide other text containers
            displayTextContainers.forEach(function (textContainer, i) {
                if (i !== index && textContainer.classList.contains('show')) {
                    textContainer.classList.remove('show');
                }
            });

            // Toggle the 'show' class for the corresponding text container
            displayTextContainers[index].classList.toggle('show');

            // Show or hide the corresponding text and update the SVG image source
            if (displayTextContainers[index].classList.contains('show')) {
                displayTextContainers[index].innerHTML = getCorrespondingText(index);
            } else {
                displayTextContainers[index].innerHTML = '';
            }

            // Update all buttons' SVG based on whether their associated text container is showing
            buttons.forEach(function (btn, i) {
                updateButtonSVG(btn, displayTextContainers[i].classList.contains('show'));
            });
        });
    });

    function getCorrespondingText(index) {
        // Return the corresponding text based on the button index
        switch (index) {
            case 0:
                return "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
            case 1:
                return "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
            case 2:
                return "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers! ";
            case 3:
                return "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
            default:
                return "";
        }
    }

    function updateButtonSVG(button, isShowingText) {
        // Update the SVG image source based on whether text is showing
        var svgPath = isShowingText ? "assets/images/icon-minus.svg" : "assets/images/icon-plus.svg";
        button.innerHTML = '<img class="landing-faq-plus" src="' + svgPath + '">';
    }
});
