const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/home', siteRouter);

    app.use('/courses', courseRouter);

    app.use('/', siteRouter);
}

module.exports = route;
