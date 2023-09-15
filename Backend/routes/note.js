const express=require('express')
const {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote

}=require('../controllers/noteControllers')

const requireAuth =require('../middleware/requireAuth')

const router=express.Router()

//require auth for all workout routes
router.use(requireAuth)

//GET all Notes
router.get('/',getNotes)

//GET a single Note
router.get('/:id',getNote)

//POST a new Note
router.post('/',createNote)

//Delete a Note
router.delete('/:id',deleteNote)

//UPDATE a Note
router.patch('/:id',updateNote)

module.exports=router