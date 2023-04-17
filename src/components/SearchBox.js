import React from "react";

const SearchBox= (props)=> {
    return(
        <div className= "pa2">
            <input className= "tc pa3 ba br4 b--red bg-lightest-blue" 
            type= "search" placeholder= "search robots"
            onChange= {props.inputchange}/>
        </div>
    );
}

export default SearchBox;