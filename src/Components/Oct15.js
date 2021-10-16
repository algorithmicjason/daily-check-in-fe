import React from 'react'

const Oct15 = () => {

    return(
        <div>
            <label for="feeling">HOW ARE YOU FEELING TODAY</label>
            {` `} {<b>1</b>}
            <input type="range" min='1' max='10' name='feeling' />
            {` `} {<b>10</b>}
        </div>
    )
}

export default Oct15