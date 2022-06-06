import { con } from './connection.js'

export async function ainme() {
    const comando =
    `
    id_anime
    nm_anime = ?
    from tb_anime
    `

    const [linha] =await con.query(comando, [])
    return linha [0]
}