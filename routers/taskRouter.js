const TaskController = require('../controllers/TaskController')

const router = require('express').Router()

router.get('/', TaskController.getTasks)
router.post('/', TaskController.addTask)
router.put('/:id', TaskController.editTask)
router.patch('/:id', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask)

module.exports = router