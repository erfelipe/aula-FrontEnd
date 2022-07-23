import React, { useState, useEffect } from 'react'

export default function Usuarios2() {

    const [usuarios, setUsuarios] = useState([]);

    const url = "http://localhost:8081/";

    useEffect(() => {
      fetch(url + "usuarios")
        .then((response) => response.json())
        .then((data) => setUsuarios(data))
        .catch((err) => console.log(err));
    }, [url]);

  return (
    <div>
        {usuarios.map( (item) => {
            return (
                <div>
                    {item.nome}
                </div>
            )
            } 
        )}
    </div>
  )
}
