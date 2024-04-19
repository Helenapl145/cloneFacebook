let inputUser = document.querySelector("#inputUser")
let namePlace = document.querySelector("#placeName")
let signInInput = document.querySelectorAll('.signIn')
let signUpInput = document.querySelectorAll('.signUp')

let nameUser = JSON.parse(localStorage.getItem("@user"))
namePlace.textContent = nameUser

function registerSubmit(){
    let newPage = true

    signUpInput.forEach(function(input){
        if(input.value === ''){
            console.log(input)
            newPage = false
        }
    })


    if(newPage){
        window.location.href = '../../index.html'
    }else{
        alert('Coloque seus dados!')
    }
    
}

function loginSubmit(){
    let newPage = true
    localStorage.setItem("@user", JSON.stringify(inputUser.value))

    signInInput.forEach(function(input){
        if(input.value === ''){
            newPage = false
        }
    })

    if(newPage){
        window.location.href = '../src/pages/home.html'
    }else{
        alert('Coloque seus dados!')
    }   
}

function newProfile() {
    document.querySelector('.modal').classList.remove('hidden')
}

function handleClose(){
    document.querySelector('.modal').classList.add('hidden')
}

//npx tailwindcss -i ./src/input.css -o ./src/output.css --watch