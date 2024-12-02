export default function Rating({vote}){
            
    
    const rating = vote / 2 
   
   return(
     <div className="rating">
        {[...Array(Math.floor(rating))].map((star, index) => {
            return (<span key={index}>★</span>)

        })}
        {/*print empty stars */}
        {[...Array(5-Math.floor(rating))].map((star, index) =>{
            return(<span key={index}>☆</span>)
        })}

        </div>


   )
}
