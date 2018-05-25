 class UI{
    displayData(user){
            const output =  document.querySelector('.output');
            output.innerHTML = `
            <div class="container">
                <div class="row">
                <div class="col-lg-5">
                    <img src="${user.avatar_url}">
                    <a href="${user.html_url}" target ="_blank" class="btn btn-primary btn-block mb-4">Visit Profile</a>
                </div>
                <div class="col-lg-7">
                    <ul class="list-group">
                        <li class="list-group-item">Login: ${user.login}</li>
                        <li class="list-group-item">Id: ${user.id}</li>
                    </ul>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
                </div>
            </div>
            `
    }

    showPopUp(type, message){
        const div = document.createElement('div')
        div.className = type
        div.innerHTML = message;

        const output =  document.querySelector('.output');
        const parent = output.parentNode;
        parent.insertBefore(div, output);

        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },2000);
    }

    clearFields(field){
        field.value = ''
    }
    clearProfile(data){
        const output =  document.querySelector('.output');
        output.innerHTML = ''
    }
}