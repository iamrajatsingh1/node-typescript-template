import * as express from 'express';
import Controller from '../../interfaces/controller.interface';
import logger from "../../utils/logger/sp-logger";

class HomeController implements Controller {
  public path = '/';
  public router = express.Router();
  public childRouter = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.home);
  }

  private home = async (req, res) => {
    logger.info("RAJAT SINGH SERVICE",{url:req.originalUrl});
    res.status(200).send({"success":true,"data":{"title":"Rajat Singh SVC API","version":1.0,"web":"http://www.iamrajatsingh.com",meta:req.meta}});
  }
}

export default HomeController;
