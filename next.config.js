const withPWA = require("next-pwa");
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
}})
