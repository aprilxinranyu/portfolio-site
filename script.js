
//add users 
const submitBtn = document.getElementById("submitBtn")
const users = [
    {
        firstName: "April",
        lastName: "Yu",
        email: "aprilxinranyu@gmail.com",
        DOB: "04/27/1989",
        selfIntro: "I'm the profile owner"
    }
]

submitBtn.addEventListener("click", addUser) 

function addUser () {
    const first_name = document.getElementById("firstName").value
    const last_name = document.getElementById("lastName").value
    const email_address =  document.getElementById("email").value
    const date_of_birth =  document.getElementById("DOB").value
    const self_intro =  document.getElementById("selfIntro").value
    if (email_address.includes("@")) {
        const newUser = 
        {
            firstName: first_name,
            lastName: last_name,
            email: email_address,
            DOB: date_of_birth,
            selfIntro: self_intro
        }
        users.push(newUser)
        alert("You are officially in my contacts! TTYL:P")
        console.log (users)
    } else {
        alert("T.T I can't reach you with an invalid email...")
    }
}

clearBtn.addEventListener("click", resetForm)

function resetForm () {
    const form = document.getElementById("contactForm")
    form.reset()
}


