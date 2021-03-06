/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 * 
 * path: baidu/browser/isWebkit.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/23
 */

///import baidu.browser;

/**
 * @property isWebkit 判断是否为webkit内核
 * @grammar baidu.browser.isWebkit
 * @meta standard
 * @see baidu.browser.isGecko
 */
baidu.browser.isWebkit = /webkit/i.test(navigator.userAgent);
