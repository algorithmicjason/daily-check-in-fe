import React from 'react'

const Oct15 = () => {

    return(
        <div>
            <label for="feeling">HOW ARE YOU FEELING TODAY</label>
            <input type="range" min='1' max='10' name='feeling' value='5' />
        </div>
    )
}

export default Oct15