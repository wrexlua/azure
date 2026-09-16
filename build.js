const fs = require('fs');
const path = require('path');

const header = `// ==UserScript==
// @name         Azure by wrex
// @namespace    https://tampermonkey.net/
// @version      1.0.0
// @description  Bypass locked links with simple click!
// @author       wrex
//
//
// @match        https://links.lootlabs.gg/*
// @match        https://ultra-links.net/*
// @match        https://lootboost.net/*
// @match        https://fast-links.org/*
// @match        https://loot-reward.com/*
// @match        https://*.lootdest.org/*
// @match        https://lootdest.org/*
// @match        https://*.loot-link.com/*
// @match        https://loot-link.com/*
// @match        https://*.loot-links.com/*
// @match        https://loot-links.com/*
// @match        https://shrtslug.biz/*
// @match        https://biovetro.net/*
// @match        https://technons.com/*
// @match        https://yrtourguide.com/*
// @match        https://tournguide.com/*
// @match        https://rekonise.com/*
// @match        https://lockr.net/*
// @match        https://lockr.so/*
//
//
// @match        https://*.work.ink/*
// @match        https://work.ink/*
//
//
// @run-at       document-start
//
//
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @connect      *
// ==/UserScript==

`;

const src = fs.readFileSync(path.join(__dirname, 'src', 'main.js'), 'utf8');

const out = header + src + '\n';
fs.writeFileSync(path.join(__dirname, 'azure.user.js'), out);
console.log('Built azure.user.js (' + Buffer.byteLength(out, 'utf8') + ' bytes)');