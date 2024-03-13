import { useEffect, useState } from "react";
import { getpost } from "../utility/getpost";


const Post =()=>{

    const [posts, setPosts] = useState([]);

    
    useEffect(() => {

        async function allData() {
            const json = await getpost();
            setPosts(json);
            console.log(posts);
            
        }
        allData();
    }, [posts]);

    return (
        <>
            all post
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}
                
            </ul>
        </>
    )
}
export default Post;