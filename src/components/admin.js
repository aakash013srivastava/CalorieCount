import { React,useState } from "react";
import nutritionFacts from '../nutritionFacts';

const Admin =()=>{

const [name,setName] = useState('');
const [cal,setCal] = useState(0);
const [protein,setProtein] = useState(0);
const [carbs,setCarbs] = useState(0);
const [fat,setFat] = useState(0);
const [nutritionFactsFinal,setNutritionFactsFinal] = useState(nutritionFacts);

const handleSubmit = (e)=>{
    e.preventDefault();
    const newId = (nutritionFacts[nutritionFacts.length-1]).id;
    // console.log(id);
    if(newId && name && cal && protein && carbs && fat){
        const nutrition = {
            id:newId,itemName:name,calories:cal,
            macro:{carbs:carbs,protein:protein,fat:fat}
        };
        setNutritionFactsFinal([...nutritionFactsFinal,nutrition]);
    }
}
    

return <>
    <div className="container">
        
        <form className="addFoodItem" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="itemName">Item Name</label>
                <input type="text" id="itemName"name="itemName" required
                value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="calories">Calories</label>
                <input type="text" id="calories" pattern="[0-9]{1,3}" name="calories" required
                value={cal} onChange={(e)=>setCal(e.target.value)} style={{marginLeft:'1rem'}}/>
            </div>
            <div className="form-control">
                <label htmlFor="protein">Protein</label>
                <input type="text" id="protein" pattern="[0-9]{1,3}" name="protein" required
                value={protein} onChange={(e)=>setProtein(e.target.value)} style={{marginLeft:'1rem'}}/>
            </div>
            <div className="form-control">
                <label htmlFor="carbs">Carbs</label>
                <input type="text" id="carbs" pattern="[0-9]{1,3}" name="carbs" required
                value={carbs} onChange={(e)=>setCarbs(e.target.value)} style={{marginLeft:'2rem'}}/>
            </div>
            <div className="form-control">
                <label htmlFor="fat">Fat</label>
                <input type="text" id="fat" name="fat" required
                value={fat} onChange={(e)=>setFat(e.target.value)} style={{marginLeft:'3rem'}}/>
            </div>
            <button type="submit" className='btn btn-default'>Add</button>
        </form>
    </div>
</>;
};
export default Admin;