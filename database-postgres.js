import { randomUUID } from "node:crypto"
import {sql} from "./db.js"
export class DatabasePostgres {


    //CREATE
    async create(video){ 
        const videoID = randomUUID()
        const {title, description, duration} = video

        await sql`insert into videos (id, title, description, duration) 
            VALUES(${videoID}, ${title}, ${description}, ${duration})`
    }
    //READ
    async list(search) {
        let videos
        if(search){
            videos = await sql`select * from videos where title ilike ${'%'+search+'%'}`
        } else{
            videos = await sql`select * from videos`
        }
        
    }
    //UPDATE
    async update(id, video) {
        const {title, description, duration} = video
        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`
    }
    //DELETE
    async delete(id) {
        await sql`delete from videos where id = ${id}`
    }
}