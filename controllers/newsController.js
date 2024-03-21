const { News } = require('../models');

exports.getAllNews = async (_, res) => {
    try {
        const news = await News.findAll();
        res.render('news', { news });
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).send('Internal Server Error');
    }
};