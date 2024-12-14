import express from 'express';
import App from '../App.js';


export const apiController = {

  getNewPassword: async (req, res) => {
    const password = await App();
    res.json(password);
  }

}