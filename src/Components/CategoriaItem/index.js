
import React from 'react';
import { CategoriaView, CategoriaFoto, CategoriaTexto } from './style';

const CategoriaItem = ({ foto, texto, id }) => {
    return (
        <CategoriaView key={id} id={id}>
            <CategoriaFoto source={{
                uri: foto.trim(),
                width: 98,
                height: 60
            }} />
            <CategoriaTexto>{texto}</CategoriaTexto>
        </CategoriaView>
    );
}

export default CategoriaItem;