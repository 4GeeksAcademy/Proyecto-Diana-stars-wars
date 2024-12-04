import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavContext from "../store/FavContext";




const Card = ({ name, uid, tipo }) => {
    const navigate = useNavigate()
    const {favActions, favs} = useContext(FavContext)
    return (
        <div className="container d-flex flex-wrap gap-3 ">
            <div className="card mb-3 " style={{ width: "18rem" }}>
                <img src="https://images.unsplash.com/photo-1585280157431-bb8515ed4e11?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{tipo}</p>
                    <div className="d-flex justify-content-between">
                        <button href="#" className="btn btn-primary" onClick={() => navigate("/detail/"+uid+"/"+tipo)}>Learn more</button>
                        {favs.find((element) => element.uid == uid && element.tipo == tipo) ?
                        <button type="button" className="btn btn-outline-warning" onClick={() => favActions({type:"delete", payload:{uid, name, tipo}})}><i class="fa-solid fa-heart"></i></button> :
                        <button type="button" className="btn btn-outline-warning" onClick={() => favActions({type:"add", payload:{uid, name, tipo}})}><i className="fa-regular fa-heart"></i></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;