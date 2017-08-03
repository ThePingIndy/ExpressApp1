'use strict';

exports.get = (req, res) => {

    res.render(
        'game',
        {
            title: 'Game Page'
        }
    );
}