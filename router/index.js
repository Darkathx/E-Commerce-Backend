import express from 'express';

const router = express.Router();

router.get("/", (req, res, next) => {
    res.json(200, {
        "success": "true",
        "message": "Hello Neo :)",
    })
})