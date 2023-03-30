import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (e) => {
        setinputValue( e.target.value );
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const nuevoValor = inputValue.trim();

        if( nuevoValor.length <= 1 ) return;

        onNewCategory( nuevoValor );
        setinputValue(''); //Limpiamos caja de texto
    }


    return (

        <form onSubmit={ (e)=>onSubmit(e) }>
            <input 
                    type="text"
                    placeholder="Buscar Gif"
                    value={ inputValue } 
                    onChange={ (e) => onInputChange(e) }
            />
        </form>

    )
}
