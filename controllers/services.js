const service = require('../models/service');
const Service = require('../models/service');


exports.createService = (req, res, next) => {
      const service = new Service({
          ...req.body
      });
      service.save()
         .then(() => res.status(201).json({ message: 'Service enregistré' }))
         .catch(error => res.status(400).json({ 'message': error.message }))
};
exports.modifyService = (req, res, next) => {
      Service.updateOne({ _id: req.params.id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Service modifié !' }))
        .catch(error =>res.status(400).json({ 'message': error.message }));
};

exports.deleteService = (req, res, next) => {
     Service.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Service supprimé !' }))
        .catch(error =>res.status(400).json({ 'message': error.message }));
};

exports.getOneService = (req, res, next) => {
     Service.findOne({ _id: req.params.id })
         .then(service => res.status(200).json(service))
         .catch(error =>res.status(404).json({ 'message': error.message }))
};

exports.getAllServices = (req, res, next) => {
    Service.find()
       .then(services => res.status(200).json(services))
       .catch(error => res.status(400).json({ error }));
};