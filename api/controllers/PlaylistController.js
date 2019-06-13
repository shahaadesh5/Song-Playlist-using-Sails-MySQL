/**
 * PlaylistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: function (req, res, next) {
        var params = req.allParams();
        Playlist.create(params, function(err, playlist){
            if (err) return next(err);
            res.status(200);
            res.json(playlist);
        });
    }

};

