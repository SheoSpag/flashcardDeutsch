import { FlashCard } from "../models/FlashCard.js"
import CustomError from '../errors/CustomError.js'

const flashCardService = {}

flashCardService.getAllFlashCards = async () => {
    const allFlashCards = await FlashCard.findAll()
    return allFlashCards
}

flashCardService.getOneFlashCard = async (id) => {
    const serchedFlashCard = await FlashCard.findByPk(id)

    if (!serchedFlashCard) {
        throw new CustomError(404, `No se encontro la flash card con el id ${id}`)
    }

    return serchedFlashCard
}

flashCardService.createFlashCard = async (data) => {
    const { german_word } = data

    const serchedFlashCard = await FlashCard.findOne({
        where: {
            german_word
        }
    })

    if (serchedFlashCard) {
        throw new CustomError(409, `La FlashCard: ${german_word} ya existe`)
    }

    const createdFlashCard = await FlashCard.create(data)
    return createdFlashCard
}

flashCardService.deleteFlashCard = async (flashCardId) => {

    const serchedFlashCard = await FlashCard.findByPk(flashCardId)

    if (!serchedFlashCard) {
        throw new CustomError(404, `No se encontro un archivo con el id ${flashCardId}`)
    }

    await FlashCard.destroy({
        where: {
            id: flashCardId
        }
    })

    return serchedFlashCard
}

flashCardService.updateFlashCard = async (flashCardId, data) => {

    const serchedFlashCard = await FlashCard.findByPk(flashCardId)

    if (!serchedFlashCard) {
        throw new CustomError(404, `No se encontro un archivo con el id ${flashCardId}`)
    }
    
    await FlashCard.update(
        data, 
        {
            where: { 
                id: flashCardId 
            }   
    });

    const updatedFlashCard = await FlashCard.findByPk(flashCardId)

    return updatedFlashCard
}

export default flashCardService