import React from 'react'; // quand on n'indique rien sur le path, on fait ref à node_modules

//const Membre = (props) => {
    
 //   return ( 
//        <>
 //           <h2>Membre  : {props.nom.toUpperCase()}</h2>
//        </>
//     );
//}
const Membre = ({nom, children, age}) => {
    
    return ( 
        <>
            <h2>Membre  : {nom.toUpperCase()} - {age} ans</h2>
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