import express, {json} from "express";
import router from "./server_router";
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());
app.use(router);

const port = 8080;

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
