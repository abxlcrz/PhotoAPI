"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initConnection = void 0;
const mongoose_1 = require("mongoose");
async function initConnection() {
    await mongoose_1.connect('mongodb://localhost/photo-db', {
        useNewUrlParser: true
    });
    console.log('database connected!');
}
exports.initConnection = initConnection;
