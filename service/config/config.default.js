/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1621336331665_8158";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: "localhost",
      // port
      port: "3306",
      // username
      user: "root",
      // password
      password: "root",
      // database
      database: "react_blog",
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  // 这个文件主要设置的是允许什么域名和请求方法可以进行跨域访问。配置代码如下。
//   config.security = {
//     csrf: { enable: false },
//     domainWhiteList: ["*"],
//   };
//   config.cors = {
//     origin: "http://localhost:3000",
//     credentials: true, //允许Cook可以跨域   配合路由守卫
//     allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
//   };
//   return {
//     ...config,
//     ...userConfig,
//   };
// };
config.security = {
  csrf: {
    enable: false,
  },
  domainWhiteList: [ '*' ],
};

config.cors = {
  origin: 'http://127.0.0.1:3000', // 只允许这个域进行访问接口
  credentials: true, // 开启认证  允许cook跨域
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
};

return {
  ...config,
  ...userConfig,
};
};