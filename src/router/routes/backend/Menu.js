import { lazy } from 'react'

const Menu = [
  {
    path: '/category/list',
    component: lazy(() => import('../../../views/backend/category/list')),
    meta: {
      action: 'read',
      resource: 'category'
    }
  },
  {
    path: '/category/edit/:id',
    component: lazy(() => import('../../../views/backend/category/save')),
    meta: {
      action: 'edit',
      resource: 'category'
    }
  },
  {
    path: '/category/save',
    component: lazy(() => import('../../../views/backend/category/save')),
    meta: {
      action: 'create',
      resource: 'category'
    }
  },
  {
    path: '/content/list',
    component: lazy(() => import('../../../views/backend/content/list')),
    meta: {
      action: 'read',
      resource: 'content'
    }
  },
  {
    path: '/content/edit/:id',
    component: lazy(() => import('../../../views/backend/content/save')),
    meta: {
      action: 'edit',
      resource: 'content'
    }
  },
  {
    path: '/content/save',
    component: lazy(() => import('../../../views/backend/content/save')),
    meta: {
      action: 'create',
      resource: 'content'
    }
  },
  {
    path: '/gallery/list',
    component: lazy(() => import('../../../views/backend/gallery/list')),
    meta: {
      action: 'read',
      resource: 'gallery'
    }
  },
  {
    path: '/gallery/edit/:id',
    component: lazy(() => import('../../../views/backend/gallery/save')),
    meta: {
      action: 'edit',
      resource: 'gallery'
    }
  },
  {
    path: '/gallery/save',
    component: lazy(() => import('../../../views/backend/gallery/save')),
    meta: {
      action: 'create',
      resource: 'gallery'
    }
  }
]

export default Menu
