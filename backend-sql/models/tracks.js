const mongoose = require("mongoose");

const TracksScheme = new mongoose.Schema(
    {
        artist: {
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            edad: {
                type: Number
            }
        },
        album: {
            name: {
                type: String
            },
            cover: {
                type: String // No existe el tipo 'url', debe ser 'String' para almacenar una URL
            }
        }
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false,
    }
);

module.exports = mongoose.model("trackModel", TracksScheme);
