(function (){
    const customerImgage = document.querySelector("#customerimg")
    const customerName = document.querySelector("#customer-name")
    const  customerText = document.querySelector("#customer-id")
    const btn = document.querySelectorAll('.btn')

    let index = 0
    const customers = []

function Customer (img,name,text){
    this.img = img
    this.name = name
    this.text = text
}
function createCustomer(img,name,text){
    let Img = `./image/${Image}.jpg`
    let customer = new customer(img,name,text)

    customers.push(customer)
}
createCustomer(0,'abhijeet','My name is abhijeet My name is abhijeetMy name is abhijeetMy name is abhijeetMy name is abhijeetMy name is abhijeetMy name is abhijeetMy name is abhijeet')

createCustomer(1,'Abhishek','My name is abhishek My name is abhishek name is abhishek name is abhijeetMy name is abhijeetMy name is abhijeetMy name is abhijeetMy name is abhijeet')

createCustomer(2,'raj','My name is abhishek My name is abhishek name is abhishek name is abhijeetMy name is abhijeetMy name is abhijeetMy name is abhijeetMy name is abhijeet')

createCustomer(3,'prasad','My name is abhishek My name is abhishek name is abhishek name is abhijeetMy name is abhijeetMy name is abhijeetMy name is abhijeetMy name is abhijeet')


btn.forEach(function(button){
    button.addEventListener(
    'click',function(e){
        if(e.target.parentElement.classList.contains('prevbtn')){
            if(index ===0){
                index = customers.length
            }
            index--
            customerImgage.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
        if(e.target.parentElement.classList.contains('nextbtn')){
           index++
            if(index === customers.length){
                index = 0
            }
            index--
            customerImgage.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
    }
    )
})




})()