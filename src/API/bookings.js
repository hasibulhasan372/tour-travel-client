// Booking API 
export const roomBooking = async (bookingInfo) => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_LINK}/bookings`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(bookingInfo)
    })
    const data = await res.json()
    return data;
};

// Update the Bookings Status 

export const updateBooking = async (id, status) => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_LINK}/rooms/status/${id}`,
        {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({status})
        })
    const data = await res.json()
    return data;
}

// // update room status
// export const updateStatus = async (id, status) => {
//     const response = await fetch(
//       `${import.meta.env.VITE_API_URL}/rooms/status/${id}`,
//       {
//         method: 'PATCH',
//         headers: {
//           'content-type': 'application/json',
//         },
//         body: JSON.stringify({ status }),
//       }
//     )
//     const data = await response.json()
//     return data
//   }
  