const express = require("express");
const route = express.Router();   //Yoo Asitti const app = express() jenne app haraa ijaa uumuuf. Akkas Jechuu Nu Hin Brbachisuu. So Just Inistance Isaa  Dhumudha Just route = express.Route() Jenne

const services = require('../services/render');
const controller = require('../controller/controller');




/**
 * @description Root Route
 * @method GET / 
 */
route.get('/', services.homeRoutes);

/**
 * @description add comments
 * @method GET /add-comment
 */
route.get('/add-comment', services.add_comment);

/**
 * @description for select dept users
 * @method GET /select-dept
 */
route.get('/select-dept', services.select_dept);
 


route.get('/login-page', services.login_page);

route.get('/logout-page', services.logout_page);

route.post('/admin-page', services.admin_page);

//anaysis-page using get Method
route.get('/analysis-page', services.analysis_page);




//API
route.post('/api/comments', controller.create);
route.get('/api/comments', controller.find);
// route.put('/api/comments/:id', controller.update);
route.delete('/api/comments/:id', controller.delete);


module.exports = route;