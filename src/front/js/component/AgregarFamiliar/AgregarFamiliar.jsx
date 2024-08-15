import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import style from "../AgregarFamiliar/agregarfamiliar.module.css"

export const AgregarFamiliar = () => {
    const [nacimiento, setNacimiento] = useState("");
    const [edad, setEdad] = useState(0);

    const calcularEdad = (fechaNacimiento) => {
        const hoy = new Date()
        const fechaNac = new Date(fechaNacimiento);
        let edadCalculada = hoy.getFullYear() - fechaNac.getFullYear();
        const mes = hoy.getMonth() - fechaNac.getMonth()

        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
            edadCalculada--;
        }
        return edadCalculada
    }



    /**
     *Recoge la fecha que le hemos pasado a través del calendario.
     *Lo pasa a la variable fechaNacimiento. 
     *Guardamos esa fecha con el setNacimiento
     *Guardamos el valor edad llamando a la función de arriba
     * @param {e} Recibe el evento del input de la fecha
     */
    const handleBirthdayChange = (e) => {
        const fechaNacimiento = e.target.value;
        setNacimiento(fechaNacimiento);
        setEdad(calcularEdad(fechaNacimiento));
    };



    return (
        <form>
            <div className="mb-3">
                <label htmlFor="alias" className="form-label fs-5">Alias</label>
                <input type="text" className="form-control" id="alias" placeholder="Ejemplo: mi padre" />

            </div>

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label fs-5">Nombre</label>
                <input type="text" className="form-control" id="nombre" />
            </div>

            <div className="mb-3">
                <label htmlFor="apellidos" className="form-label fs-5">Apellidos</label>
                <input type="text" className="form-control" id="apellidos" />
            </div>

            <div className="mb-3">
                <label htmlFor="telefono" className="form-label fs-5">Telefono</label>
                <input type="tel" className="form-control" id="telefono" />
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-8">
                        <label htmlFor="nacimiento" className="fs-5">Fecha de nacimiento</label><br></br>
                        <input onChange={handleBirthdayChange} type="date" id="nacimiento" name="nacimiento" value={nacimiento} />
                    </div>
                    <div className="col">
                        <label htmlFor="birthday" className="fs-5">Edad: </label><br></br>
                        <label htmlFor="birthday" className="fs-5">{edad} </label>

                    </div>
                </div>
            </div>

            {/* Selección de grado de dependencia */}
            <div className="mb-3">
                <label htmlFor="dependencia" className="form-label fs-5">Grado de dependencia </label>
                <div className="accordion" id="dependencia">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#dependOne" aria-expanded="true" aria-controls="dependOne">
                                Selecciona el grado de dependencia
                            </button>
                        </h2>
                        <div id="dependOne" className="accordion-collapse collapse" data-bs-parent="#dependencia">
                            <div className="accordion-body">
                                <p className={`text-secondary ${style.title_grado_dep}`}>Deja el cursor sobre el nivel para obtener más información</p>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gradodependencia" id="nivel" />
                                    <label
                                        className="form-check-label"
                                        htmlFor="nivel"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="right"
                                        title="Acompañamiento. Es independiente en tareas diarias y personales">
                                        Nivel 1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gradodependencia" id="nivel2" />
                                    <label
                                        className="form-check-label"
                                        htmlFor="nivel2"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="right"
                                        title="Dependencia leve. Requiere ayuda para cosas puntuales en algún momento del día para la rutina o autonomía personal">
                                        Nivel 2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gradodependencia" id="nivel3" />
                                    <label
                                        className="form-check-label"
                                        htmlFor="nivel3"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="right"
                                        title="Dependencia moderada. Requiere ayuda para actividades básicas, dos o tres veces al día">
                                        Nivel 3
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gradodependencia" id="nivel4" />
                                    <label
                                        className="form-check-label"
                                        htmlFor="nivel4"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="right"
                                        title="Dependencia severa. Necesita el apoyo indispensable de otra persona por pérdida de autonómia física, mental o intelectual">
                                        Nivel 4
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div>
            </div>



            {/* Select provincias */}
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="provincia" className="form-label fs-5">Provincia</label>
                    <select className="form-select" id="provincia" defaultValue={"Selecciona la provincia"} aria-label="Selecciona la provincia">
                        <option disabled hidden>Selecciona la provincia</option>
                        <option value="A Coruna">A Coruña</option>
                        <option value="Alava">Álava</option>
                        <option value="Albacete">Albacete</option>
                        <option value="Alicante">Alicante</option>
                        <option value="Almeria">Almería</option>
                        <option value="Asturias">Asturias</option>
                        <option value="Avila">Ávila</option>
                        <option value="Badajoz">Badajoz</option>
                        <option value="Baleares">Baleares</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Burgos">Burgos</option>
                        <option value="Caceres">Cáceres</option>
                        <option value="Cadiz">Cádiz</option>
                        <option value="Cantabria">Cantabria</option>
                        <option value="Castellon">Castellón</option>
                        <option value="Ciudad Real">Ciudad Real</option>
                        <option value="Cordoba">Córdoba</option>
                        <option value="Cuenca">Cuenca</option>
                        <option value="Girona">Girona</option>
                        <option value="Granada">Granada</option>
                        <option value="Guadalajara">Guadalajara</option>
                        <option value="Guipuzcoa">Guipúzcoa</option>
                        <option value="Huelva">Huelva</option>
                        <option value="Huesca">Huesca</option>
                        <option value="Jaen">Jaén</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Las Palmas">Las Palmas</option>
                        <option value="Leon">León</option>
                        <option value="Lleida">Lleida</option>
                        <option value="Lugo">Lugo</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Malaga">Málaga</option>
                        <option value="Murcia">Murcia</option>
                        <option value="Navarra">Navarra</option>
                        <option value="Ourense">Ourense</option>
                        <option value="Palencia">Palencia</option>
                        <option value="Pontevedra">Pontevedra</option>
                        <option value="Salamanca">Salamanca</option>
                        <option value="Segovia">Segovia</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Soria">Soria</option>
                        <option value="Tarragona">Tarragona</option>
                        <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
                        <option value="Teruel">Teruel</option>
                        <option value="Toledo">Toledo</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Valladolid">Valladolid</option>
                        <option value="Vizcaya">Vizcaya</option>
                        <option value="Zamora">Zamora</option>
                        <option value="Zaragoza">Zaragoza</option>
                        <option value="Ceuta">Ceuta</option>
                        <option value="Melilla">Melilla</option>
                    </select>
                </div>
            </div>



            <div className="mb-3">
                <label htmlFor="formFile" className="form-label fs-5">Foto</label>
                <input className="form-control" type="file" id="formFile" />
            </div>

            <div className="mb-3">
                <label htmlFor="observaciones" className="form-label fs-5">Otra información importante</label>
                <textarea className="form-control" rows={10} cols={40} id="observaciones" placeholder="Puedes añadir cualquier información / necesidad relevante para el acompañante" />
            </div>

            <div>
                <button type="submit" className={`btn fs-5 ${style.botonGuardar}`} >Guardar usuario</button>
            </div>
        </form >

    )
}