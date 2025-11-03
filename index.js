// phones


// instructions from assignment page.


// class phone to hold brand and model. But also could hold price, color, storage, etc.
class phone {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
}

// class menu to hold phones.
class Menu {
    constructor() {
        this.phones = [];
    }

// see a menu

showMainMenu() {
    console.log('in show main menu')
    return prompt(`
        Main Menu:
        +++++
        0) Exit
        1) Add Phone
        2) Delete Phone
        3) View all Phones in inventory
        `);
}


// get infor from user. Like prompt for brand and model.
// create new phone object.
// add phone object to phones array.

addPhone() {
    let brand = prompt("Enter phone brand:");
    let model = prompt("Enter phone model:");
    this.phones.push(newPhone(brand, model));
} 

deletePhone () {
    let phoneIndex = prompt("Please enter which phone you would like to delete.")
    this.phones.splice(phoneIndex, 1);
}




viewPhones() {
    let displayPhones = "";
    for (let i = 0; i < this.phones.length; i++) {
        this.phones[i].brand

        displayPhones += `
        ${this.phones[i].brand} ${this.phones[i].model}`
        }


        alert(`
            Phone Inventory:
            +++

            ${displayPhones}   
            `);





    }


// menu

start(){
    let userSelection = this.showMainMenu();

    while(userSelection != 0) {

        switch(userSelection) {
            case 1:{
                 this.addPhone();
                break;
            }
            case "2": {
                this.deletePhone()
                break;
            }

            case "3":{
                this.viewPhones();
            break;
            }
            case 0: {
                console.log('in default')
            userSelection = 0;
            }
        }
        userSelection = this.showMainMenu();
    }
    alert("You have selected to exit the menu.");0




}

}

// Try to add a few phones to the menu.

let menu = new Menu();
menu.start();