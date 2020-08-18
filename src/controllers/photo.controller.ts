import { Request, Response } from 'express';
import Photo from '../models/photos';

export async function getPhotos(req: Request, res: Response): Promise<Response> {
    const photos = await Photo.find();
    return res.json(photos);
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    };

    const photo = new Photo(newPhoto);
    console.log(photo);
    await photo.save();

    return res.json({
        success: true,
        message: 'Photo successfully uploaded',
        photo
    })
};