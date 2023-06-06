export const savedUser = user =>{
    const updateUser = {
        email : user?.email,
    }
    fetch(`${import.meta.env.VITE_SERVER_LINK}/users/${user?.email}`,{
        method: "PUT",
        headers: {
            "content-type" : "applications/json"
        },
        body: JSON.stringify(updateUser)
    })
    .then(res => res.json())
};


// // Host API 
export const becomeHost = async email =>{
    const updateUser = {
              role: 'host',
            }
          
            return fetch(`${import.meta.env.VITE_SERVER_LINK}/users/${email}`, {
              method: 'PUT',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(updateUser),
            }).then(res => res.json())
};

// Get Host
export const getHost = async (email)=>{
    const res =  await fetch(`${import.meta.env.VITE_SERVER_LINK}/users/${email}`)
    const user = await res.json();
    return user?.role;
}