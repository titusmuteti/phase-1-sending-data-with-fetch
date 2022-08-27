// Add your code here
function submitData () {
    return fetch ("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com",
    })
    })
    .then(response => {
    return response.json()
    })
    .then(data => {
    let h3 = document.createElement('h3');
    h3.innerHTML = data.id;
    document.body.appendChild(h3)
    console.log(data);
    })
    .catch(error=>{
    let h4 = document.createElement('h4');
    h4.innerHTML = error.message;
    document.body.append(h4);
    console.log(error.message);
    }) 
}
