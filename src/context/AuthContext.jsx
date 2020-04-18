import React, { createContext,useState } from 'react'
import axios from 'axios'

export const UserContext = createContext();

const UserContextProvider = (props) => {  
    const [numberOrEmail, setNumberOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [route, setRoute] = useState('');

    const userDefaultValue = {
        firstName: '',
        lastName: '',
        numberOrEmail: '',
        password: '',
        birthday: {
            month: 'Jan',
            day: 1,
            year: 1990
        },
        gender: 1
    };
    const [user, setUser] = useState(userDefaultValue);
    
    const handleStateChanges = (e) => {    
        console.dir(e.target);
        const { name, value } = { ...e.target };
        console.log(`name : ${e.target.name}`);
        console.log(`value : ${value}`);
        
        (e.target.name == "password") ? setPassword(value) : setNumberOrEmail(value) 
    } 
    const OnLogin = (e) => { 
        e.preventDefault();
        const user = {
            numberOrEmail: numberOrEmail,
            password: password
        };
        console.log(`user : ${user}`)
        axios.post('http://localhost:3200/user/login', user)
            .then(res => {  
                const { length } = res.data 
                localStorage.setItem('_id',res.data[0]._id)
                if(length == 1) 
                    setRoute('/home')
            })
            .catch(err => { 
                console.log(`err : ${err}`);
            })
    }  

    const handleStateChanges2 = (e) => {
        console.log(e)
        console.log(`e.target : ${e.target}`)
        let copyUser = { ...user }
        let isBirthday = false 
        const { name, value, type } = e.target
 
        // if (type === 'text' || type === 'password')
        //     newValue = value
        if (type === 'select-one') {
            isBirthday = true
            const birthday = { ...user.birthday };
            birthday[name] = value
            setUser({ ...user, birthday })

        } else { 
            setUser({ ...user, [name]:value })
        }
        // else if (type === 'radio')
        //     copyUser[name] = value 
        
    };

    const OnSignUp = (e) => {
        e.preventDefault();
        console.log(`On sign up!!`);
        axios.post('http://localhost:3200/user/SignUp', user)
            .then(res => { 
                console.dir(res.data); 
                localStorage.setItem('_id',res.data._id)
                setRoute('/home')
            })
            .catch(err => { 
                console.log(`err : ${err}`);
            })
        console.log(`route : ${route}`)

    }
    return ( 
        <UserContext.Provider value={{numberOrEmail,password, route,handleStateChanges,OnLogin, user,handleStateChanges2,OnSignUp}}>
            {props.children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;