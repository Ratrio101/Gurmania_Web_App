// routes/admin.js
const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin');
const User = require('../models/User');
const News = require('../models/News');
const Recipe = require('../models/Recipe');

// CRUD для пользователей
router.get('/admin/users', isAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
} catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
}
});

router.post('/admin/users', isAdmin, async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
});

router.put('/admin/users/:id', isAdmin, async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});

router.delete('/admin/users/:id', isAdmin, async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

// CRUD для новостей
router.get('/news', isAdmin, async (req, res) => {
    const news = await News.find();
    res.json(news);
});

router.post('/news', isAdmin, async (req, res) => {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
});

router.put('/news/:id', isAdmin, async (req, res) => {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(news);
});

router.delete('/news/:id', isAdmin, async (req, res) => {
    await News.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

// CRUD для рецептов
router.get('/recipes', isAdmin, async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

router.post('/recipes', isAdmin, async (req, res) => {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
});

router.put('/recipes/:id', isAdmin, async (req, res) => {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(recipe);
});

router.delete('/recipes/:id', isAdmin, async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;