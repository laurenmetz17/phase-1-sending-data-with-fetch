// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
    }).then(resp => resp.json())
    .then(function(obj) {
        let newUser = document.createElement('p');
        newUser.textContent = obj.id;
        document.body.append(newUser);
    })
    .catch(function(error) {
        let err = document.createElement('p');
        err.innerHTML = error.message;
        console.log(err);
        document.body.append(err);
    });
};
