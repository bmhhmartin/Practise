import axios from "axios";
import { useEffect, useState } from "react";

const NewPosts =()=>{

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        const FetchPosts = async ()=>{
            try{
                const response = await axios.get(`http://localhost:8000/posts`);
                if (response && response.data) {
                    setPosts(response.data);
                }
            }catch(error){
                if (error.response) {
                    setError(`Error from server Status: ${error.response.status} Message: ${error.message}`);
                    
                }else{
                    setError(error.message);
                }
            }
            
        }

        FetchPosts();
    }, [])
    

    return (
        <>
            <h1>All Posts</h1>
            {
                error && <div>{error}</div>
            }
        </>
    )
}
export default NewPosts;