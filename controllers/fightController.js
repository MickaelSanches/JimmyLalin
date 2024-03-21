const { Fight } = require('../models');

exports.getFightSchedule = async (_, res) => {
    try {
        const fights = await Fight.findAll();
        res.render('fights', { fights });
    } catch (error) {
        console.error('Error fetching fights:', error);
        res.status(500).send('Internal Server Error');
    }
};
