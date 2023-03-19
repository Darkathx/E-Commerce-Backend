import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(dotenv.PORT, () => {
    console.log(`Server is started to running on {dotenv.PORT}.`);
})

