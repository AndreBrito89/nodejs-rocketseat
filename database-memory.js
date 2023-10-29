import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    //#->representa chave privada da classe
    #videos = new Map()
    

    //CREATE
    create(video){ 

        const videoID = randomUUID()
        
        this.#videos.set(videoID, video)
    }
    //READ
    list(search) {
        //array.from converte valores para um array
        return Array.from(this.#videos.entries())
        .map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }
        })
        .filter(video => {
            if(search) {
                return video.title.includes(search)
            }
            return true
        })
    }
    //UPDATE
    update(id, video) {
        this.#videos.set(id,video)
    }
    //DELETE
    delete(id) {
        this.#videos.delete(id)
    }
}