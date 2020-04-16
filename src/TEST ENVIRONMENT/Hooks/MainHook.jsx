import React, { useState, Fragment } from 'react'

const MainHook = () => { 
    const [ songs, setSongs ] = useState([
        { id: 1, title: 'Halik' },
        { id: 2, title: 'Faithfully' },
        { id: 3, title: 'Sige daw be' },
    ])
    const [ newSong, setNewSong] = useState('')

    const textChange = (e) => {
        setNewSong(e.target.value) 
    }
    const saveSong = () => { 
        setSongs([...songs, { id: 4, title: newSong }]) 
        setNewSong('')
    }
 
    return (
        <Fragment>
            <ul>
                {
                    songs.map(song => (<li key={song.id}>{song.title}</li>))
                }
            </ul>
            <input type="text" value={newSong} onChange={textChange}/>
            <button onClick={saveSong}>Save</button>
        </Fragment>
     ); 
}
 
export default MainHook;