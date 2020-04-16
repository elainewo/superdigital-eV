import React from 'react';
import './Wirkung.css';


function Wirkung() {
  return (
    <div className="Wirkung">
    
      <h2 style={{textAlign: "center", fontFamily: "Ubuntu Mono, monospace", fontSize:20 }}>So arbeiten wir</h2>
      <section className="WirkungSection">
      <article className="textArticle"> 
         <h1 className="uuh1">Wirkungsbereiche</h1>
      <p style={ {width: "400px", marginLeft:"7rem"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, recusandae fuga repellendus nemo ratione facere quas excepturi in et saepe doloremque rerum illum sequi, laboriosam eveniet. Mollitia aspernatur perferendis ipsa corporis consequuntur eum fugit quos sint quisquam suscipit vitae delectus facere, molestiae nesciunt error. Dignissimos qui quos quo expedita maiores?</p> 
    </article>
    <article className="imgArticle">
    <img style={{width: "60%", height:"50vh"}} src="./img/Bild1.png" alt=""/>
    <img style={{width: "60%", height:"50vh"}} src="./img/Bild2.png" alt=""/>
    <img style={{width: "60%", height:"50vh"}} src="./img/Bild3.png" alt=""/>
    </article>
    </section>
    
    </div>
  );
}


export default Wirkung;
