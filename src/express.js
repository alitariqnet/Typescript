import {express} from 'express'


const app = express();

app.listen(5555,(req,res) => {
    return res.status(200).json({"message":"hello"})
});


export default app