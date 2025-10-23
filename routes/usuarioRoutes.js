import express from 'express';
import usuarioController from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', usuarioController.listar);
router.get('/:id', usuarioController.obtenerPorId);
router.post('/', usuarioController.crear);
router.put('/:id', usuarioController.actualizar);
router.delete('/:id', usuarioController.eliminar);

export default router;