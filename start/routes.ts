/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async ({ view, logger }) => {
  logger.debug('Hello world')
  return view.render('pages/home')
})
