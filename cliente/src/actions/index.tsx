export const SET_ID = 'SET_ID';
export const SET_USUARIO_DETALLE_DATA = 'SET_USUARIO_DETALLE_DATA';

const setId = (payload: any) => ({ type: SET_ID, payload});
const setUsuarioDetalle = payload => ({ type: SET_USUARIO_DETALLE_DATA, payload});


const apiUrl = "http://localhost:8080/api/detalle-usuario/";

export const setSelectedId = payload => {
    return dispatch => {
        const userId = apiUrl + payload;

        // activar en el estado un indicador de busqueda de datos
        dispatch(setId(payload));

        return fetch(userId).then(resolve => {
            return resolve.clone().json();
        }).then((data: any) => {
            // this.setState({ usuarioDetalle: data.data });
            const usuarioDetalle = data.data;
            // Modificar el estado con el resultado de la promise (fetch)
            dispatch(setUsuarioDetalle({id: payload, usuarioDetalle}))
        });
    };
};