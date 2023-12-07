


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    var index = 0;
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')


    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault()
                if (!form.checkValidity()) {
                    event.stopPropagation()

                } else {
                    console.log(index)
                    forms[index].style.display = "none";
                    forms[index + 1].style.display = "flex";
                    index++;

                }
                form.classList.add('was-validated')
            }, false);
            // go to back
            var backButton = form.querySelector('.back');
            if (backButton) {
                backButton.addEventListener('click', function (event) {
                    event.preventDefault();
                    if (index > 0) {
                        forms[index].style.display = "none";
                        forms[index - 1].style.display = "flex";
                        index--;
                    }
                });
            }
        })


})()





// image



const image_input = document.querySelector("#image_input");
var uploaded_image = "";


image_input.addEventListener("change", function () {

    const reader = new FileReader();
    reader.addEventListener("load", () => {

        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    })

    reader.readAsDataURL(this.files[0]);

})



// image1


const image1 = document.querySelector("#image1");
var uploaded_image = "";


image1.addEventListener("change", function () {

    const reader = new FileReader();
    reader.addEventListener("load", () => {

        uploaded_image = reader.result;
        document.querySelector("#display1").style.backgroundImage = `url(${uploaded_image})`;
    })

    reader.readAsDataURL(this.files[0]);

})



// image2


const image2 = document.querySelector("#image2");
var uploaded_image = "";


image2.addEventListener("change", function () {

    const reader = new FileReader();
    reader.addEventListener("load", () => {

        uploaded_image = reader.result;
        document.querySelector("#display2").style.backgroundImage = `url(${uploaded_image})`;
    })

    reader.readAsDataURL(this.files[0]);

})




// image3


const image3 = document.querySelector("#image3");
var uploaded_image = "";


image3.addEventListener("change", function () {

    const reader = new FileReader();
    reader.addEventListener("load", () => {

        uploaded_image = reader.result;
        document.querySelector("#display3").style.backgroundImage = `url(${uploaded_image})`;
    })

    reader.readAsDataURL(this.files[0]);

})

// image4


const image4 = document.querySelector("#image4");
var uploaded_image = "";


image4.addEventListener("change", function () {

    const reader = new FileReader();
    reader.addEventListener("load", () => {

        uploaded_image = reader.result;
        document.querySelector("#display4").style.backgroundImage = `url(${uploaded_image})`;
    })

    reader.readAsDataURL(this.files[0]);

})


// image5


const image5 = document.querySelector("#image5");
var uploaded_image = "";


image5.addEventListener("change", function () {

    const reader = new FileReader();
    reader.addEventListener("load", () => {

        uploaded_image = reader.result;
        document.querySelector("#display5").style.backgroundImage = `url(${uploaded_image})`;
    })

    reader.readAsDataURL(this.files[0]);

})



// image6


const image6 = document.querySelector("#image6");
var uploaded_image = "";


image6.addEventListener("change", function () {

    const reader = new FileReader();
    reader.addEventListener("load", () => {

        uploaded_image = reader.result;
        document.querySelector("#display6").style.backgroundImage = `url(${uploaded_image})`;
    })

    reader.readAsDataURL(this.files[0]);

})







// //  back form click

// document.getElementById('byy').addEventListener('click', function () {

//   document.getElementById('form1').style.display = "block"

// })



//  form - 5 start 


// count 1 start


const checkboxContainers = document.querySelectorAll(".checkbox-container");

checkboxContainers.forEach((container) => {
    const checkboxes = container.querySelectorAll(".checkbox");
    const countDisplay = container.querySelector(".count");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", updateCount);
    });

    function updateCount() {
        const selectedCheckboxes = container.querySelectorAll(".checkbox:checked");
        countDisplay.textContent = selectedCheckboxes.length;
    }
});





// form back button click


document.getElementById('limit').addEventListener('click', function () {
    document.getElementById('com').style.display = "block";


})

document.getElementById('sole').addEventListener('click', function () {
    document.getElementById('com').style.display = "none";


})
document.getElementById('yes').addEventListener('click', function () {
    document.getElementById('vat').style.display = "block";


})

document.getElementById('no').addEventListener('click', function () {
    document.getElementById('vat').style.display = "none";


})






