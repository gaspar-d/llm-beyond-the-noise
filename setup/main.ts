import { defineAppSetup } from '@slidev/types'

// Workaround for Slidev v52 double-base navigation bug:
// internal next/prev prepends the deploy base to the route before pushing,
// but the router already has the base configured — producing routes like
// "/llm-beyond-the-noise/5" that match nothing. This guard strips the
// duplicated prefix. No-op in local dev (base "/").
const BASE = '/llm-beyond-the-noise/'

export default defineAppSetup(({ router }) => {
  router.beforeEach((to, _from, next) => {
    if (to.path.startsWith(BASE))
      next(to.fullPath.slice(BASE.length - 1))
    else
      next()
  })
})
