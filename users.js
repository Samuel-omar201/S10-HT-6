const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const router = express.Router();

const usersFilePath = path.join(__dirname, 'users.json');


const readUsers = async () => {
    try {
        const data = await fs.readFile(usersFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return []; 
    }
};


const writeUsers = async (users) => {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
};


router.post('/', async (req, res) => {
    const { name, email, password, dpi } = req.body;
    const users = await readUsers();
    
    if (users.find(user => user.dpi === dpi)) {
        return res.status(400).json({ error: 'DPI ya registrado' });
    }
    
    const newUser = { name, email, password, dpi };
    users.push(newUser);
    await writeUsers(users);
    res.status(201).json(newUser);
});


router.get('/', async (req, res) => {
    const users = await readUsers();
    res.json(users);
});


router.put('/:dpi', async (req, res) => {
    const { dpi } = req.params;
    const { name, email, password } = req.body;
    const users = await readUsers();
    
    const user = users.find(user => user.dpi === dpi);
    if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    if (users.find(u => u.dpi === req.body.dpi && u.dpi !== dpi)) {
        return res.status(400).json({ error: 'DPI ya registrado' });
    }
    
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    await writeUsers(users);
    res.json(user);
});


router.delete('/:dpi', async (req, res) => {
    const { dpi } = req.params;
    const users = await readUsers();
    const userIndex = users.findIndex(user => user.dpi === dpi);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    users.splice(userIndex, 1);
    await writeUsers(users);
    res.status(204).send();
});

module.exports = router;
