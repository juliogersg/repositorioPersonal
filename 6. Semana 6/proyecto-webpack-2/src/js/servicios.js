import axios from "axios";

const getUsers = async ()=>{
    const data = await axios.get("https://regres.in/api/users");
    return data.data;
}

export const getPosts = async ()=>{
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data.data;
}