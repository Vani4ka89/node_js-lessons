const express = require('express');
const {json, urlencoded} = require("express");
const app = express();
const PORT = 5002;

const users = [
    {
        name: 'Oleh',
        age: 20,
        gender: 'male'
    },
    {
        name: 'Anton',
        age: 10,
        gender: 'male'
    },
    {
        name: 'Inokentiy',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Anastasiya',
        age: 15,
        gender: 'female'
    },
    {
        name: 'Cocos',
        age: 25,
        gender: 'other',
    },
];

app.use(json());
app.use(urlencoded({extended: true}));

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json({
        data: users[+id]
    });
});

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json({
        message: 'User has created'
    });
});

app.put('/users/:id', (req, res) => {
    const {id} = req.params;
    users[+id] = req.body;
    res.status(200).json({
        message: 'User has updated',
        data: users[+id]
    });
});

app.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    users.splice(+id, 1);
    res.status(200).json({
        message: 'User has deleted'
    });
});

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});