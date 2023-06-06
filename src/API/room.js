export const addRoom = async (room) =>{
    const res = await fetch(`${import.meta.env.VITE_SERVER_LINK}/rooms`,{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(room)
    })
    const data = await res.json()
    return data;
}


export const allRooms = async () =>{
    const res = await fetch(`${import.meta.env.VITE_SERVER_LINK}/rooms`)
    const data = await res.json()
    return data;
}

export const room = async (id) =>{
    const res = await fetch(`${import.meta.env.VITE_SERVER_LINK}/room/${id}`)
    const data = await res.json()
    return data;
}



// // Add a room
// export const addRoom = async roomData => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(roomData),
//     })
  
//     const data = await response.json()
//     return data
//   }