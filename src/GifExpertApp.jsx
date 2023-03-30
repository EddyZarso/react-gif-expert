
import { useState } from 'react'
import { AddCategory, GifGrid } from './componets/';

export const GifExpertApp = () => {

    //? Logica

    // Variable para perservar valores
    const [categories, setCategories] = useState(['Smash bros Ultimate']);

    //Metodos
    const onAddCategory = ( newCategory ) =>{
        
        if(categories.includes(newCategory)) return;
        setCategories([ newCategory ,...categories])
    }


  return (
    <>
        <h1>Gif Expert</h1>

        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) }
         />

        {
            categories.map( category =>(
                <GifGrid 
                    key={category} 
                    category={category}/>
            ))
        }
    </>
  )
}
