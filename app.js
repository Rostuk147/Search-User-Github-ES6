
const gitHub = new GitHub();
const ui = new UI();

const inputVal = document.getElementById('searchInput');

document.getElementById('getUser').addEventListener('click', ()=>{
    gitHub.get(inputVal.value)
    .then(data => {
        if(data.message === "Not Found"){
            ui.showPopUp('alert alert-danger', 'User Not Found! Try Again!');
            ui.clearProfile()
        } else {
            ui.displayData(data)
            ui.showPopUp('alert alert-success', 'User Found!')
        }
    })
    .catch(err => console.log(err))
    ui.clearFields(inputVal)
})