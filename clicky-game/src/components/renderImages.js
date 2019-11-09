import React from 'react';

var styling = {
    container:{
        padding: '10px',
        border: 'none',
        textAlign: 'center',
    },
    image: {
        padding: '10px',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        height: '200px',
        maxWidth: '250px',
        backgroundColor: '#86A3c3',
        
    }
}
const ImageRender = (props) => { 
    return(
        <div style={styling.container}className="container col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <img
                style = {styling.image}
                id = {props.name}
                src={props.image}
                alt={props.name}
                key={props.id} onClick={()=>props.handleClick(props.id, props.clicked)}>  
            </img>
        </div>
    )   
}

export default ImageRender