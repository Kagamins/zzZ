const withPWA = require("next-pwa");
const XIVAPI = require('@xivapi/js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { Client, GatewayIntentBits } = require('discord.js');
/** @type {import('next').NextConfig} */


module.exports = withPWA({
  pwa:{
  dest: "public",
  register: true,
  skipWaiting: true,
  
},    webpack5: true,
webpack:(config)=>{
  config.resolve.fallback = {fs:false};
  return config;
},images:{
  domains:['img2.finalfantasyxiv.com','img.finalfantasyxiv.com']
},xiv:{
  private_key: '8716924cef8942928c99ee3403c30885baf2eec9391b45098ea342aa52792dae',
  language: 'en',
  snake_case: true
}
})
