import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Healer',
    tagline: 'ITS OK TO FEEL BROKEN WHAT MATTERS IS HOW YOU REBUILD.',
    description: '“Turn your healing into progress. Complete simple daily tasks to gain experience, level up your character, and slowly rebuild yourself after heartbreak. Share your thoughts and stories in a supportive community, where others understand what you’re going through. If you need deeper support, access guided therapy tools designed to help you reflect, cope, and grow stronger—one step at a time.”.',
    author: 'Xun Yang Leong'
  });
});

export default router;