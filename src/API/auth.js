export const savedUser = user =>{
    const updateUser = {
        email : user?.email
    }
    fetch(`http://localhost:5000/users/${user?.email}`,{
        method: "PUT",
        headers: {
            "content-type" : "applications/json"
        },
        body: JSON.stringify(updateUser)
    })
    .then(res => res.json())
    .then(data => console.log(data))
};