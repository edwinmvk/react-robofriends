import React, { useState, useEffect } from 'react';
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll'
// import { detailslist } from './Details';

// 1. constructor()
// 2. render()
// 3. componentDidMount()
// 4. render()

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state= {
//             searchfield: "",
//             statedetailslist: [] // after we fetch the data, statedetailslist array wil be the array with every objects
//             // statedetailslist: detailslist
//         }
//     }

//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) =>{          // fetch method reduces the data used on page updates. it is AJAX
//             return response.json();
//         })
//         .then((onlinedetailslist) =>{
//             this.setState({statedetailslist: onlinedetailslist})
//         })
//     }
// }

const App= ()=> {

    const [statedetailslist, setstatedetailslist]= useState([])
    const [searchfield, setsearchfield]= useState('')
    const [count, setcount]= useState(0);

    // 2nd parameter in use effect is the stoping condition
    // shortcut for componentDidmount is [] as the 2nd parameter. i.e., useEffect only runs at the starting time
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(onlinedetailslist=> {setstatedetailslist(onlinedetailslist)})
    }, [count]) // now the data is only fetched when the count state changes 

    const onInputChange= (event) => setsearchfield(event.target.value);
  
    const filtereddetailslist= statedetailslist.filter((eachobjects)=> {
        return eachobjects.name.toLowerCase().includes(searchfield.toLowerCase());
    })  // here, actually the list itself is returned, but the contents of the list, i.e, the ojects are filtered 

    if(statedetailslist.length === 0){ 
        return <h3 className= "tc">Loading...........</h3>
    }
    else{
        return(
            <div className= "tc">
                <h1 className= "f2">RoboFriends</h1>
                <button className= 'br2 ba b pointer dim' onClick={()=> setcount(count + 1)}>Click me to Refresh</button>
                <SearchBox inputchange= {onInputChange}/> 
                <Scroll>
                    <CardList det= {filtereddetailslist} />
                </Scroll>        
            </div>  
        );          
    }
}

export default App;