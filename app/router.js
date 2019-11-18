'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/get',controller.home.select)
  router.post('/api/add',controller.home.add)
  router.post('/api/remove',controller.home.remove)
  router.post('/api/update',controller.home.update)
};
