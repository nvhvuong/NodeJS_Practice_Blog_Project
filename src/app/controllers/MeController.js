const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/videos
    storedVideos(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-videos', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('News Details');
    }
}

module.exports = new MeController();
