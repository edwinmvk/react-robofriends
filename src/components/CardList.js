import React from 'react';
import Card from './Card';

// if we give ({det}) instead of props, then we can write det[0] directly
const CardList= (props)=> {  
    return(
        <div>
            {
                props.det.map((userinfo, i)=> {
                    return (<Card key= {i} id= {props.det[i].id} name= {props.det[i].name} username= {props.det[i].username} email= {props.det[i].email}/>);
                })
            }
        </div>
    );
}


// const CardList= (props) =>{
//     return(
//         <div>
//             <Card id= {props.det[0].id} name={props.det[0].name} username={props.det[0].username} email={props.det[0].email}/>
//             <Card id= {props.det[1].id} name={props.det[1].name} username={props.det[1].username} email={props.det[1].email}/>
//             <Card id= {props.det[2].id} name={props.det[2].name} username={props.det[2].username} email={props.det[2].email}/>
//         </div>
//     );
// }

export default CardList;