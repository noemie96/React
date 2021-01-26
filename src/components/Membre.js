import React from 'react'; // quand on n'indique rien sur le path, on fait ref à node_modules

//const Membre = (props) => {
    
 //   return ( 
//        <>
 //           <h2>Membre  : {props.nom.toUpperCase()}</h2>
//        </>
//     );
//}
const Membre = ({nom, children, age, hideName, handleChange}) => {
    
    return ( 
        <>
            <h2
                style={{ backgroundColor: age < 33 ? 'dodgerblue' : 'crimson', color: 'white'}}
            >
                Membre  : {nom.toUpperCase()} - {age} ans
            </h2>
            <input type="text" value={nom} onChange={handleChange} />
            <button onClick={hideName}>X</button>


            {children ? <p>{children}</p> : null}
        </>
     );
}

// const Membre = () => (
//     <h2>Membre de la famille</h2>
// )

// const Membre = () => {
//     return <h2>Membre de la famille</h2>
// }
 
export default Membre;