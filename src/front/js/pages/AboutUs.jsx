import React from "react";
import "../../styles/aboutUs"

const AboutUs = () => {
  return (
    <div className="container container-aboutUs">
      <h3 className="title-aboutUs">
        Tres cosas que debes saber sobre nosotros
      </h3>
      <div className="row mb-4">
        <div className="col-12 col-md-4 ho">
          <div className="p-3 text-who row-1 rounded">
            <h5>¿Quiénes somos?</h5>
            <p>
              Somos Carefy, tu aliado en la búsqueda del cuidado perfecto para
              esos seres queridos que tanto te importan. Nos encanta pensar que
              somos como un buen amigo que siempre tiene la recomendación
              adecuada, conectándote con acompañantes que no solo cuidan, sino
              que también hacen compañía de la buena.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="row-1">
            <img
              className="image-lady-armchair img-fluid rounded "
              src="https://images.pexels.com/photos/4057763/pexels-photo-4057763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="senora sentada en un sillón amarillo leyendo un libro"
              alt="senora sentada en un sillón amarillo leyendo un libro"
            />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className=" p-3 text-what row-1 rounded">
            <h5>¿Qué hacemos?</h5>
            <p>
              En Carefy, hacemos que encontrar el acompañante ideal sea tan
              fácil como un clic. Te ofrecemos dos opciones: puedes buscar entre
              nuestros maravillosos profesionales, o si prefieres, publicar lo
              que necesitas y dejar que ellos vengan a ti. Además, nos
              aseguramos de que cada acompañante tenga su propia "carta de
              presentación" con valoraciones y reseñas, para que sepas que están
              más que preparados para el trabajo.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="row-2">
            <img
              className="image-girl-lady img-fluid rounded"
              src="https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="senora de edad avanzada con niña preparando galletas"
              title="senora de edad avanzada con niña preparando galletas"
            />
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className=" p-3 text-why row-2 rounded">
            <h5>¿Por qué lo hacemos?</h5>
            <p>
              Lo hacemos porque creemos que nuestros mayores merecen lo mejor, y
              queremos que tú te sientas tranquilo sabiendo que están en buenas
              manos. Nos mueve el deseo de facilitarte la vida, haciendo que
              este proceso sea seguro, sencillo y, por qué no, ¡hasta un poco
              divertido! Al final del día, lo que más nos importa es crear
              conexiones que importan y cuidar a quienes lo merecen con todo el
              cariño del mundo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
