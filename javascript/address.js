console.log("hello")

// Some starter code
const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `

})

document.querySelector("#saveWish").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const personProduct = document.querySelector("#product").value
    const personShop = document.querySelector("#shop").value


    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>I can purchase ${personProduct} at ${personShop} </h1>
        </section>
    `

})




const HTMLGenerator = (object) => {
    return `
    <h2>${object.name}</h2>
    <p>${object.birthday}</p>`
}

let objectBuilder = (nameValue, birthdayValue) => {
    let object = {
        name: nameValue,
        birthday: birthdayValue
    }
    return object
}



document.querySelector("#saveBirth").addEventListener("click", event => {
    let personNameBirthday = document.querySelector("#name").value
    let personBirthday = document.querySelector("#birthday").value
    let birthdayList = document.querySelector("#saveBirthday")
    if (personNameBirthday === "" || personBirthday === "") {
        alert("Fill it please")
    }
    else {
        birthdayList.innerHTML += HTMLGenerator(objectBuilder(personNameBirthday, personBirthday))
        let nameBox = document.querySelector("#name")
        nameBox.value = ""
        nameBox.focus()
        let birthdayBox = document.querySelector("#birthday")
        birthdayBox.value = ""
    
    }
    
})

