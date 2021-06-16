
const Food = ({nutritionFacts})=>{
    return <>
    <div className='container'>
        <table className='nutritionTable'>
            <th>Item</th><th>Calories</th><th>Protein</th><th>Carbs</th><th>Fat</th>
            {nutritionFacts.map((foodItem)=>{
                return (<tr>
                    <td>{foodItem.itemName}</td>
                    <td>{foodItem.calories}</td>
                    <td>{foodItem.macro.protein}</td>
                    <td>{foodItem.macro.carbs}</td>
                    <td>{foodItem.macro.fat}</td>
                    </tr>);
            })}
        </table>
    </div>
    </>;
}

export default Food;