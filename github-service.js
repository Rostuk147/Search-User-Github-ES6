class GitHub{
    constructor(){
        this.client_id = 'ab785e7bdd0466fd79ff';
        this.client_secret = '770b2846a5972e871facf36dc89bd376fb804e5c';
    }
    get(userName){
        return fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}



