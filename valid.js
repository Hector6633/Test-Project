function validate()
{
    let name=document.regform.name
    let email=document.regform.email
    let password=document.regform.password
    let dob=document.regform.dob
    let sex=document.regform.sex

    if(name.value.length<=0)
    {
        alert('name must be required')
        name.focus();
        return false;
    }
    if(name.value.length<=0)
    {
        alert('name must be required')
    }
    if(name.value.length<=0)
    {
        alert('name must be required')
    }
    if(!(email.value.includes("@")) || (!email.value.includes(".")))
    {
        alert('invalid email')
    }
    if(gender.value=='sex')
    {
        alert('ddff')
    }
}

function color()
{
    let color_change = ['cyan','green','blue','yellow'];
    let button=document.getElementById('color')
    button.addEventListener('click',function(){
    //let label1=document.getElementById('colors');
        random=Math.floor(Math.random()*color_change.length);
        var selectcolor=color_change[random];
        document.body.style.backgroundColor=selectcolor;
        //label1.innerHTML=selectcolor;
    });
}

// Get the button element by its id
// var button = document.getElementById("color");

// // Add a click event listener to the button
// button.addEventListener("click", function() {
//   // Change the background color of the body to a random color
//   var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = randomColor;
// });
