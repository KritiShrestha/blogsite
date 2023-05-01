const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');
const { route } = require('../routes');

//Get route for root page
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({});
        if (commentData.length === 0) {
          res.status(404).json({ message: 'Error' });
          return;
        }
    
        res.status(200).json(commentData);
      } catch (err) {
        res.status(500).json(err);
      }
    });

    //Find comment by ID value

    router.get('/:id', async (req, res) => {
        
        try {
        const commentData = await Comment.findByPk(req.params.id, {

        });
        if (commentData===0) {
            res.status(404).json({message: 'No comments found with that id!' });
        }
        res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }  
    });

    //Add a new comment
    router.post('/', async (req, res) => {
       try{
       const newComment = await Comment.create(req.body);
       res.status (200).json(newComment)
       }catch (err) {
        res.status(400).json(err);
      }
      });
  
//Update new comment by id
      router.put('/:id', async (req, res) => {
      
        try {
          const updateComment = await Comment.update(req.body, {
            where: { id: req.params.id },
          });
      
          if (!updateComment[0]) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
          }
      
          res.status(200).json(updateComment);
        } catch (err) {
          res.status(500).json(err);
        }
      });
      
      router.delete('/:id', async (req, res) => {
        // delete comment by its `id` value
        try {
          const deleteComment = await Comment.destroy({
            where: { id: req.params.id },
          });
      
          if (!deleteComment) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
          }
      
          res.status(200).json(deleteComment);
        } catch (err) {
          res.status(500).json(err);
        }
      });
      module.exports = router