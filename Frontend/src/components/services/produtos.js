import { http } from "./config"

export default {

    listar:() => {
        return http.get('produtos')
    },
    salvar:(produto) => {
        return http.post('produto', produto)
    },
    deletar:(produto) =>{
        return http.delete('produto', {data:produto})
    },
    atulizar:(produto) => {
        return http.put('produto', produto)
    }
}
