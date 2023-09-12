const express=require('express')
const {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote

}=require('../controllers/noteControllers')
const router=express.Router()

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