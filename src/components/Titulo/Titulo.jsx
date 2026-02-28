import "./titulo.css";
import auto from "../../img/auto.png";

const Titulo = () => {
    
    return (
        <div className="head-titulo">
           
            <h2 className="titulo-h2">Bienvenidos al curso de React! </h2>  
             <img className="head-auto" src={auto} alt="" />          
      </div>
    )
};
export default Titulo;