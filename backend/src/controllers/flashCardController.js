import flashCardService from "../services/flashCardService.js"

const flashCardController = {

}

flashCardController.getOneFlashCard = async (req, res, next) => {
    try {
        const { flashCardId } = req.params

        if (!flashCardId) {

            const allFlashCards = await flashCardService.getAllFlashCards()

            if (allFlashCards.length == 0) {
                res.status(204).send(allFlashCards)
            } else {
                res.status(200).send(allFlashCards)
            }

        } else {

            const serchedFlashCard = await flashCardService.getOneFlashCard(flashCardId)
            res.status(200).send(serchedFlashCard)
        }

    } catch (error) {
        next(error)
    }
}

flashCardController.getRandom = async (req, res, next) => {
    try {
        const allFlashCards = await flashCardService.getAllFlashCards()
        const randomFlashCard = allFlashCards[Math.floor(Math.random() * allFlashCards.length)];
        res.status(200).send(randomFlashCard)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

flashCardController.createFlashCard = async (req, res, next) => {
    try {
        const data = req.body

        if (!data) {
            res.status(400).json({ message: "Solicitud Invalida" })
        }

        const { german_word, spanish_word, article } = data;

        if (!german_word) {
            res.status(422).json({ message: "Un campo obligatorio no esta declarado" })
        }

        if (!spanish_word && !article) {
            res.status(422).json({ message: "Al menos uno de los campos opcionales debe ser proporcionado" })
        }

        const createdFlashCard = await flashCardService.createFlashCard(data)
        res.status(200).send(createdFlashCard)

    } catch (error) {
        next(error)
    }
}

flashCardController.deleteFlashCard = async (req, res, next) => {
    try {
        const { flashCardId } = req.params

        if (!flashCardId) {
            throw Error("No se envia un id por parametro")
        }

        const deletedFlashCard = await flashCardService.deleteFlashCard(flashCardId)
        res.status(200).send(deletedFlashCard)
    } catch (error) {
        next(error)
    }
}

flashCardController.updateFlashCard = async (req, res, next) => {
    try {
        const { flashCardId } = req.params
        
        const data = req.body

        if (!flashCardId) {
            res.status(400).json({ message: "No se propociono un ID por parametro"})
        }

        if (!data) {
            res.status(400).json({ message: "No se proporcionaron cambios a realizar" })
        }
        
        const updatedFlashCard = await flashCardService.updateFlashCard(flashCardId, data)
        res.status(200).send(updatedFlashCard)

    } catch (error) {
        next(error)
    }
}


export default flashCardController