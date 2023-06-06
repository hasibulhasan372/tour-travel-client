export const savedImage = async (image) =>{
    const formData = new FormData();
    formData.append("image", image)

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_PHOTO_STORED_KEY}`
    const res = await fetch(url, {
        method: "POST",
        body: formData
    })
    const data = res.json()
    return data;
}