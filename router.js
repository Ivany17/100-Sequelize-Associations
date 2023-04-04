const {Router} = require('express');
const UserController = require('./controllers/user.controller');
const TaskController = require('./controllers/task.controller');

const router = Router();

router.post('/user', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.patch('/users/:id', UserController.updateUser);
router.patch('/users-v2/:id', UserController.updateUserInstance);
router.post('/user/:id/task', TaskController.createTask);

module.exports = router;