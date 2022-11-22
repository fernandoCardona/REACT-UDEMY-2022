import { useState } from "react";
import { AddCategory } from './components/AddCategory';

const apiKey ='MhqUYRbsmpzNQdLDG55qddao5X8IWLrt'
const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`;

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( ['One Punch', 'Dragon ball'] );
    //console.table( categories );
    

   
     
    const onAddCategory = ( newCategory ) => {
        
        setCategories([ newCategory, ...categories ])
        console.log(newCategory);
    }

    return (
        <>
            <h1>GifExpertApp</h1> 
            <AddCategory 
                onNewCategory={ onAddCategory }
            />
            
            
            <ol>
                {
                    categories.map( ( category ) => {
                        return <li key={ category }> { category }</li>
                        })
                 }
                 
            </ol>
        </>
    )
}
