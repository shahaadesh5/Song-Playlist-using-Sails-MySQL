/**
 * SongsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: function (req, res, next) {
        var params = req.allParams();
        Songs.create(params, function(err, songs){
            if (err) return next(err);
            res.status(200);
            res.json(songs);
        });
    },

    find: async function (req, res, next){
        var playlist = await Songs.find().populate('playlist');
        res.status(200);
        res.json(playlist);
    },

    destroy: function (req, res, next){
        var id = req.param('id');
            Songs.destroy(id, function(err, result){
                if(err) return next(err);
                return res.json(result);
            });
    }

};

