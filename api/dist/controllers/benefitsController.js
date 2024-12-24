"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = exports.getAll = void 0;
const getAll = (req, res) => {
    res.send("Birds home page");
};
exports.getAll = getAll;
const getById = (req, res) => {
    res.send("About birds");
};
exports.getById = getById;
