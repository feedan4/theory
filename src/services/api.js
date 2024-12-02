import axios from "axios";

async function getAllProducts() {
    const res = await axios.get(`https://ecommerse.apasni.me/products/all?limit=102`)
    return res.data 
}

// async function getProductsByCategory(catid) {
//     const res = await axios.get(`https://ecommerse.apasni.me/products/${catid}`)
//     return res.data 
// }

async function getAllCategories() {
    const res = await axios.get("https://ecommerse.apasni.me/categories/all")
    return res.data
}

async function getCategoryById(catid) {
    const res = await axios.get(`https://ecommerse.apasni.me/categories/get/${catid}`)
    return res.data
}


export {getAllProducts, getAllCategories, getCategoryById}