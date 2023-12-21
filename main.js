// Select Variable
const showBtn = document.querySelectorAll(".showBTN");
const block = document.querySelectorAll(".block");
const btnChanger = document.querySelectorAll(".plus-line");

// Select All Buttons of questions And return Array
showBtn.forEach((btn, index) => {
     // Question block array with button index
     const blockArr = block[index];
     // Question Button Array with button index
     const btnArr = btnChanger[index];
     // Set Click listener on Buttons
     btn.addEventListener("click", () => {
          block.forEach(() => {
               // Remove and Add show Questions
               blockArr.classList.toggle("showbar");
          });
          btnChanger.forEach((btn) => {
               // Remove and Add show plus and minus button
               btnArr.classList.toggle("hiddenplus");
          });
     });
});
