const BookQueries = ({ text, className, onClick }) => {
  return (
    <>
      <div className="container">
        <div className="geoSuggest">
          <h6>Lugar</h6>
          <h5>El Chaltén</h5>
        </div>
        <div className="date-pickker">
          <div className="arrival">
            <h6>Fecha llegada</h6>
            <h5>Julio, 15</h5>
          </div>
          <div className="departure">
            <h6>Fecha partida</h6>
            <h5>Seleccione fecha</h5>
          </div>
        </div>
        <div class="button-container">
          <button>Botón ya hecho</button>
        </div>
      </div>
    </>
  );
};

export default BookQueries;
