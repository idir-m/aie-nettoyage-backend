const express = require('express');

const router = express.Router();
const Service = require('../models/service');
const servicesCtrl = require('../controllers/services');
const verifyJWT = require('../middleware/verifyJWT');
const verifyRoles = require('../middleware/verifyRoles');
const ROLES_LIST = require('../config/roles_list');

router.post('/', verifyJWT, verifyRoles(ROLES_LIST.Entreprise),servicesCtrl.createService);
router.put('/:id', verifyJWT, verifyRoles(ROLES_LIST.Entreprise),servicesCtrl.modifyService);
router.delete('/:id', verifyJWT, verifyRoles(ROLES_LIST.Entreprise),servicesCtrl.deleteService);
router.get('/:id', verifyJWT, verifyRoles(ROLES_LIST.Entreprise),servicesCtrl.getOneService);
router.get('/', servicesCtrl.getAllServices);


module.exports = router ;
