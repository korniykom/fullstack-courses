import path from 'path';
import { readFileSync, writeFile } from 'fs';
const tours = JSON.parse(readFileSync(path.join(process.cwd(), 'dev-data', 'data', 'tours.json'), 'utf-8'));
export function getAllTours(req, res) {
    res.status(200).json({ status: 'success', data: { tours: tours } });
}
export function getTourById(req, res) {
    console.log(req.requestTime);
    const tour = tours.find((element) => element.id === +req.params.id);
    res.status(200).json({
        status: 'success',
        data: { tour },
    });
}
export function postTour(req, res) {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    writeFile(path.join(process.cwd(), 'dev-data', 'data', 'tours.json'), JSON.stringify(tours), (err) => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour,
            },
        });
    });
}
export function patchTourById(req, res) {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here>',
        },
    });
}
export function deleteTourById(req, res) {
    res.status(204).json({
        status: 'success',
        data: null,
    });
}
export function checkBody(req, res, next) {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'failed',
            message: 'Missing name or price',
        });
    }
    next();
}
