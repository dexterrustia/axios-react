import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios' 

import Pusher from 'pusher-js';

export const PostContext = createContext();

const PostContextProvider = (props) => {
    const [posts, setPosts] = useState([]); 
    const [postCount, setPostCount] = useState(10)

    function getPosts(){ 
        console.log(`getPosts PostContext`)
        axios.get(`http://localhost:3200/post`)  
            .then(res => { 
                console.table([...res.data]);
                setPosts([...res.data]);  
                console.log(`post length after: ${posts.length}`) 

                

            }).catch(err => { 
                console.log(`Error: ${err}`)
        }) 

    }
    async function savePost(post){ 
        console.log(`savePost PostContext`)
        return await  axios.post('http://localhost:3200/post', post)
            .then(doc => {  
                setPosts([...posts])
                setPostCount(posts.length++)
                
            }).catch(err => { console.log(`err : ${err}`) })
    }   
    useEffect(() => { 
        getPosts(); 
    }, [])
    useEffect(() => {
        
        //Start PUSHER CONFIG =============================================
        //===============================================================

        const pusher = new Pusher('7cf8ab01384a020e60c7', {
            cluster: 'ap1',
            forceTLS: true
        }); 

        const channel = pusher.subscribe('Post');
        channel.bind('create', function (data) {  
            console.log(`post length : ${posts.length}`)  
            console.log(data)
            console.log(posts)
            setPosts([data, ...posts])    
            
            console.log(`post length pusher: ${posts.length}`)
        }.bind(PostContextProvider));  

        //END PUSHER CONFIG =============================================
        //===============================================================
        return () => {
            pusher.unsubscribe('Post')
        }
    }, [posts])
 
    return ( 
        <PostContext.Provider value={{posts, setPosts, postCount, getPosts, savePost}}>
            {props.children}
        </PostContext.Provider>
     );
}
 
export default PostContextProvider;