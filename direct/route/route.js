// const express = require('express')
import express from 'express' 
import User from '../table.js'
// User
// const dbuser  = require('../table')

const router = express.Router()
//easy
router.get('/home/route',(req ,res) => {
    res.send('Done controller')
})
//difficult
router.post('/user' , async(req,res) => {
    // try {
        let {name,password,email } = req.body
        // console.log(name)

        
        // console.log(name)

        const newUser = new User(
            name,
            email,
            password
          );
          
          newUser.save((err, savedUser) => {
            if (err) {
              console.error(err);
            } else {
              console.log('User saved:', savedUser);
            }
          });
          res.send(200).json(newUser)
    // } catch (error) {
        // console.log("error");
    // }
})
export default router

