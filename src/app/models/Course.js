const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 255 },
        videoId: { type: String },
        level: { type: String, maxLength: 255, required: true },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamp: true,
    },
);

module.exports = mongoose.model('Course', Course);
