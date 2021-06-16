const Admin =()=>{
return <>
    <div className="container">
        <form className="addFoodItem">
            <label htmlFor="itemName">Item Name</label>
            <input type="text" name="itemName"/>
            <button type="submit" className='btn'>Add</button>
        </form>
    </div>
</>;
};
export default Admin;