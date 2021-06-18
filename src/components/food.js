import { AiFillDelete } from "react-icons/ai";
import {useState} from 'react';
const Food = ({nutritionFacts})=>{
    const [nutritionFactsState,setNutritionFactsState] = useState(nutritionFacts);
    //console.log(nutritionFacts);
    //console.log(nutritionFactsState);
    const deleteFact = (id)=>{
        const finalState = nutritionFactsState.filter((fact)=>fact.id!==id);
        console.log(finalState);
        setNutritionFactsState(finalState);
    }
    return <>
    <div className='container'>
        <table className='nutritionTable'>
            <th>Item</th><th>Calories</th><th>Protein</th><th>Carbs</th><th>Fat</th><th>Action</th>
            {nutritionFactsState.map((foodItem)=>{
                return (<tr key={foodItem.id}>
                    <td>{foodItem.itemName}</td>
                    <td>{foodItem.calories}</td>
                    <td>{foodItem.macro.protein}</td>
                    <td>{foodItem.macro.carbs}</td>
                    <td>{foodItem.macro.fat}</td>
                    <td><AiFillDelete onClick={()=>deleteFact(foodItem.id)}/></td>
                    </tr>);
            })}
        </table>
    </div>
    </>;
}

export default Food;