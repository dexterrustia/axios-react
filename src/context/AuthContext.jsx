import React, { createContext,useState}from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [userId, setUserId] = useState('');
    const [numberOrEmail, setNumberOrEmail] = useState('');
    const [password, setPassword] = useState('')

    const Authenticte = () => { 
        const user = {
            numberOrEmail: numberOrEmail,
            password: password
        };
        console.log(`user : ${user}`)
        axios.post('http://localhost:3200/user/login', user)
            .then(res => { 
                console.dir(res.data);
                console.log(`len : ${res.data.length}`)
                if(res.data.length == 1) 
                    setRoute('/home')
            })
            .catch(err => { 
                console.log(`err : ${err}`);
            })


    }
    const handleStateChanges = (e) => {    
        console.dir(e.target);
        const { name, value } = { ...e.target };
        console.log(`name : ${e.target.name}`);
        console.log(`value : ${value}`);
        
        (e.target.name == "password") ? setPassword(value) : setNumberOrEmail(value) 
    }
    return ( 
        <AuthContext.Provider value={{userId}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;