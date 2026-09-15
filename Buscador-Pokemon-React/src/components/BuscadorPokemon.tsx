import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePokemon, type PokemonTarjeta } from '../context/PokemonTarjeta';

export const BuscadorPokemon: React.FC = () => {
  const { resgistrarEntrenador } = usePokemon();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [tipoidentificacion, setTipoIdentificacion] = useState('');
  const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [datosPersonales, setDatosPersonales] = useState(false);

  const eventoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!datosPersonales) {
      alert('Aceptar política de privacidad');
      return;
    }

    const nuevo: Usuario = {
      id: Date.now(),
      nombreCompleto: `${nombre} ${apellido}`.trim(),
      documento: {
        tipo: tipoidentificacion,
        numero: numeroIdentificacion,
      },
      fechaNacimiento,
      correo,
      datosPersonales,
      fechaRegistro: new Date().toLocaleDateString(),
    };

    resgistrarEntrenador(nuevo);
    navigate('/pokemon');
  };

  return (
    <div>
      <form onSubmit={eventoSubmit}>
        <div className="Nombre">
          <label htmlFor="nombre">Nombre:</label><br />
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} name="nombre" placeholder="Ej: Juan" required />
        </div>

        <div className="Apellido">
          <label htmlFor="apellido">Apellido:</label><br />
          <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} name="apellido" placeholder="Ej: Pérez" required />
        </div>

        <div className="Tipo_identificacion">
          <label htmlFor="tipo_identificacion">Tipo de Identificación:</label><br />
          <select id="tipo_identificacion" value={tipoidentificacion} onChange={(e) => setTipoIdentificacion(e.target.value)} name="tipo_identificacion" required>
            <option value="" disabled>Seleccione una opción</option>
            <option value="13 - Cédula de Ciudadanía (CC)">Cédula de Ciudadanía (CC)</option>
            <option value="12 - Tarjeta de Identidad (TI)">Tarjeta de Identidad (TI)</option>
            <option value="41 - Pasaporte (PA)">Pasaporte (PA)</option>
          </select>
        </div>

        <div className="Numero_identificacion">
          <label htmlFor="numero_identificacion">Número de Identificación:</label><br />
          <input type="text" id="numero_identificacion" value={numeroIdentificacion} onChange={(e) => setNumeroIdentificacion(e.target.value)} name="numero_identificacion" placeholder="Ej: 1020304050" required />
        </div>

        <div className="Fecha_nacimiento">
          <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label><br />
          <input type="date" id="fecha_nacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} name="fecha_nacimiento" required />
        </div>

        <div className="Correo">
          <label htmlFor="correo">Correo:</label><br />
          <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} name="correo" placeholder="Ej: juan@correo.com" required />
        </div>

        <div className="Celular">
          <label htmlFor="celular">Número de Celular:</label><br />
          <input type="tel" id="celular" value={celular} onChange={(e) => setCelular(e.target.value)} name="celular" pattern="[0-9]{10}" placeholder="3001234567" required />
        </div>

        <div className="Pais">
          <label htmlFor="pais">País:</label><br />
          <select id="pais" value={pais} onChange={(e) => setPais(e.target.value)} name="pais" required>
            <option value="" disabled>Seleccionar</option>
            <option value="169 - Colombia">Colombia</option>
            <option value="493 - México">México</option>
            <option value="589 - Perú">Perú</option>
          </select>
        </div>

        <div className="Ciudad">
          <label htmlFor="ciudad">Ciudad:</label><br />
          <select id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} name="ciudad" required>
            <option value="" disabled>Seleccione una opción</option>
            <optgroup label="Colombia">
              <option value="11001 - Bogotá D.C.">Bogotá D.C.</option>
              <option value="05001 - Medellín">Medellín</option>
              <option value="76001 - Cali">Cali</option>
              <option value="08001 - Barranquilla">Barranquilla</option>
              <option value="13001 - Cartagena">Cartagena</option>
            </optgroup>
            <optgroup label="México">
              <option value="09 - Ciudad de México">Ciudad de México</option>
              <option value="14039 - Guadalajara">Guadalajara</option>
              <option value="19039 - Monterrey">Monterrey</option>
              <option value="21114 - Puebla">Puebla</option>
              <option value="02004 - Tijuana">Tijuana</option>
            </optgroup>
            <optgroup label="Perú">
              <option value="150101 - Lima">Lima</option>
              <option value="040101 - Arequipa">Arequipa</option>
              <option value="130101 - Trujillo">Trujillo</option>
              <option value="080101 - Cusco">Cusco</option>
              <option value="200101 - Piura">Piura</option>
            </optgroup>
          </select>
        </div>

        <div className="Politica_datos">
          <input type="checkbox" id="politica_datos" checked={datosPersonales} onChange={(e) => setDatosPersonales(e.target.checked)} name="politica_datos" required />
          <label htmlFor="politica_datos">Acepto la política de tratamiento de datos.</label>
        </div>

        <div className="Submit">
          <input type="submit" id="boton_enviar" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

