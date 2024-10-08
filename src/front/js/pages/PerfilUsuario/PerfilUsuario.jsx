import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import style from "../PerfilUsuario/perfilusuario.module.css";
import nietaabuela from "../../../img/nietaabuela.jpg"
import { FormularioFamiliar } from "../../component/FormularioFamiliar/FormularioFamiliar.jsx";
import { AgregarFamiliar } from "../../component/AgregarFamiliar/AgregarFamiliar.jsx";
import { TarjetaFamiliar } from "../../component/TarjetaFamiliar/TarjetaFamiliar.jsx";
import { Jumbotron } from "../../component/Jumbotron/Jumbotron.jsx"
import { Context } from "../../store/appContext.js";


export const PerfilUsuario = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    // Declaramos una variable familiares que guarda la lista de familiares
    const [familiares, setFamiliares] = useState([]);


    //Se encarga de mostrar las cards actualizadas en la vista de PerfilUsuario
    useEffect(() => {
        // Obtener datos del contexto
        if (store.familiares) {
            setFamiliares(store.familiares);
        }
    }, [store.familiares]);


    // Cuando estoy logueado obtiene los detalles de los familiares
    useEffect(() => {
        if (store.userData.userId) {
            actions.getFamiliarDetalles(); // LLama a la función para obtener detalles del familiar si el usuario está logueado. 
        }
    }, [store.userData.userId, store.userData.token]);


    //Si no estoy logueado (no tengo token) me reenvia a la vista del login
    useEffect(() => {
        if (!store.userData.token) {
            navigate('/login');
        }
    }, [store.userData.token, navigate])

    useEffect(() => {
        if (store.userData.token && store.userData.role === "admin") {
            navigate('/moderar-anuncios');
        }
    }, [store.userData.token, navigate])


    const handleCreateAd = () => {
        navigate('/crear-anuncio')
        window.scrollTo(0, 0);

    }




    return (
        <>
            <Jumbotron bgImg={{ backgroundImage: "url('https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }} title={`Bienvenido/a ${store.userData.name ? store.userData.name : store.userData.username}`} subtitle={"Aquí puedes modificar tus datos y los de tus familiares que requieren acompañamiento."} />

            <div className={`${style.bg_publicar_anuncio}`}>
                <div className="py-3 container">
                    <p className="fs-1 text-light">Crea el perfil de tu familiar y publica tu primer anuncio<button className={`btn btn-primary fs-3 ms-3 text-dark ${style.btn_publicar_anuncio}`} onClick={handleCreateAd}>Publicar anuncio</button></p>

                </div>
            </div>
            <div className={`${style.paginaContacto}`}>
                <div className="container mt-5">

                    <div className="row">
                        <div className={`col-12 col-sm-6 ${style.formulario} ${style.contenedorForm} rounded align-content-center`}>
                            <FormularioFamiliar />
                        </div>
                        <div className="col-12 col-sm-6 align-content-center">
                            <img className={`${style.imagenDudas} rounded img-fluid`} src={nietaabuela}></img>
                        </div>
                    </div>

                    <div className="row">

                        {/* <!-- Button trigger modal --> */}
                        <button type="button" className={`btn btn-primary fs-4 my-5 ${style.botonAgregarUsuario}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Agregar familiar
                        </button>

                        {/* <!-- Modal --> */}
                        <div className={`modal fade`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                            <div className="modal-dialog modal-dialog-scrollable modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar familiar</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <AgregarFamiliar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {familiares && familiares.length > 0 ? (
                            familiares.map((familiar, index) => (
                                <div className="col col-sm-3" key={index}>
                                    <TarjetaFamiliar familiar={familiar} index={index} />
                                </div>
                            ))
                        ) : (<p>No has agregado aún ningún familiar.</p>)}
                    </div>
                </div>
            </div>

            <div className={`${style.bg_publicar_anuncio} mt-5`}>
                <div className="py-5 container">
                    <p className="fs-1 text-light">¿Ya creaste a la persona que necesita acompañamiento?<button className={`btn btn-primary fs-3 ms-3 text-dark ${style.btn_publicar_anuncio}`} onClick={handleCreateAd}>Publica un anuncio</button></p>

                </div>
            </div>
        </>
    )
}
