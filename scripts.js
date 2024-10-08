    const button =document.querySelector( 'button')
const formdata ={
    email:"",
    password:"",
};
console.log(formdata);
function getFormInfo(e) {
    e.preventDefault();
    formdata.email=document.querySelector('input[name="email"]').value
    formdata.password=document.querySelector('input[name="password"]').value
    console.log(formdata)
}

button .addEventListener('click',getFormInfo)