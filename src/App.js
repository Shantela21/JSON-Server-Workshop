"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var C_UsersTraineeDownloadsJSON_Server_Workshop_ode_modulesaxiosindex_js_1 = require("C:UsersTraineeDownloadsJSON-Server-Workshop\node_modulesaxiosindex.js");
var response = C_UsersTraineeDownloadsJSON_Server_Workshop_ode_modulesaxiosindex_js_1.default
    .get("http://localhost:3000/items")
    .then(function (response) {
    console.log(response);
})
    .catch(function (error) {
    console.log(error);
});
