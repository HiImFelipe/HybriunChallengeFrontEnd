import React from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

class PasswordEye extends React.Component{

    components = {
        hidden: AiFillEyeInvisible,
        visible: AiFillEye
    };

    
    hidePassword(){

        let x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
            
        } else {
            x.type = "password";
            
        }

    }

    render(){

        const ComponentName = this.components[this.props.tag || 'visible'];

        return(

            <ComponentName onClick={hidePassword()} />

        )
        
    }
}

