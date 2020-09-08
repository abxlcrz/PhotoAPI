"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoto = exports.getPhotos = void 0;
const photos_1 = __importDefault(require("../models/photos"));
async function getPhotos(req, res) {
    const photos = await photos_1.default.find();
    return res.json(photos);
}
exports.getPhotos = getPhotos;
async function createPhoto(req, res) {
    const { title, description } = req.body;
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    };
    const photo = new photos_1.default(newPhoto);
    console.log(photo);
    await photo.save();
    return res.json({
        success: true,
        message: 'Photo successfully uploaded',
        photo
    });
}
exports.createPhoto = createPhoto;
;
