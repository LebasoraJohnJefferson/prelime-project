const start = document.getElementsByClassName('start-container')
const form = document.getElementsByClassName('form-container')


const createHTMLForm =()=>{
    if(start[0]) start[0].style.display="none"
    if(form[0]) form[0].style.display = "flex"
}