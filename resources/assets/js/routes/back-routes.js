export default [
  {
    path: '/',
    component: () => import('pages/public/default'),
    children: [
      {
        path: '',
        component: () => import('pages/public/site-home/default')
      },
      {
        path: 'sobre',
        component: () => import('pages/public/site-sobre/default')
      },
      {
        path: 'projetos-sociais',
        component: () => import('pages/public/site-projetos-sociais/default')
      },
      {
        path: 'lojas',
        component: () => import('pages/public/site-lojas/default'),
        children: [
          {
            path: 'details/:lojasId',
            component: () => import('pages/public/site-lojas/details')
          }
        ]
      },
      {
        path: 'contact',
        component: () => import('pages/public/site-contact/default')
      },
      {
        path: 'reset-password/:token',
        component: () => import('pages/public/site-forgot-password/default'),
        beforeEnter (to, from, next) {
          const { token } = to.params

          LoadingEvent.$emit(EVENT_LOADING_ALL, true)

          const URL = URL_API + '/auth/forgot-password-verify/' + token

          axios
            .get(URL)
            .then(() => {
              LoadingEvent.$emit(EVENT_LOADING_ALL, false)

              next()
            })
            .catch(() => {
              LoadingEvent.$emit(EVENT_LOADING_ALL, false)

              Notify.create({
                message: 'Token de recuperação de senha inválido!',
                type: 'negative',
                position: 'top-right'
              })

              next({
                path: '/'
              })
            })
        }
      },
      {
        path: 'client-login',
        component: () => import('pages/public/site-client-login/default')
      },
      {
        path: 'participe',
        component: () => import('pages/public/site-client-check/default')
      },
      {
        path: 'client-registry',
        component: () => import('pages/public/site-client-registry/default')
      },
      {
        path: 'client',
        component: () => import('pages/public/site-client/default'),
        children: [
          {
            path: 'user',
            component: () => import('pages/public/site-user/default'),
            children: [
              {
                path: '',
                component: () => import('pages/public/site-user/view')
              },
              {
                path: 'edit',
                component: () => import('pages/public/site-user/edit')
              }
            ]
          },
          {
            path: 'projects',
            component: () => import('pages/public/site-project/default'),
            children: [
              {
                path: '',
                component: () => import('pages/public/site-project/projects')
              },
              {
                path: 'new',
                component: () => import('pages/public/site-project/project-new')
              },
              {
                path: 'files/:idProject',
                component: () =>
                  import('pages/public/site-project/project-files')
              }
            ]
          }
        ],
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem(STORAGE_USER_CLIENT_TOKEN)) {
            const URL = URL_API + '/auth/verify'
            const token = localStorage.getItem(STORAGE_USER_CLIENT_TOKEN)

            LoadingEvent.$emit(EVENT_LOADING_ALL, true)

            axios
              .get(URL, {
                headers: {
                  Authorization: token
                }
              })
              .then(({ status }) => {
                LoadingEvent.$emit(EVENT_LOADING_ALL, false)
                next()
              })
              .catch(() => {
                LoadingEvent.$emit(EVENT_LOADING_ALL, false)

                Notify.create({
                  message:
                    'Efetue o login ou cadastre-se para submeter seu projeto',
                  type: 'warning',
                  position: 'top-right'
                })

                localStorage.removeItem(STORAGE_USER_CLIENT_TOKEN)
                next({
                  path: '/client-registry'
                })
              })
          } else {
            Notify.create({
              message:
                'Efetue o login ou cadastre-se para submeter seu projeto',
              type: 'warning',
              position: 'top-right'
            })

            next({
              path: '/client-registry'
            })
          }
        }
      }
    ]
  },

  {
    path: '/admin',
    component: () => import('pages/private/default'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem(STORAGE_USER_TOKEN)) {
        const URL = URL_API + '/adm-auth/verify'
        const token = localStorage.getItem(STORAGE_USER_TOKEN)

        axios
          .get(URL, {
            headers: {
              Authorization: token
            }
          })
          .then(({ status }) => {
            next()
          })
          .catch(() => {
            localStorage.removeItem(STORAGE_USER_TOKEN)
            next({
              path: '/login'
            })
          })
      } else {
        next({
          path: '/login'
        })
      }
    },
    children: [
      {
        path: '',
        component: () => import('pages/private/dashboard/default'),
        redirect: '/admin/projects'
      },
      {
        path: 'deadlines',
        component: () => import('pages/private/deadlines/default'),
        children: [
          {
            path: '',
            component: () => import('pages/private/deadlines/list')
          },
          {
            path: 'view',
            component: () => import('pages/private/deadlines/view')
          }
          // {
          // path: 'text',
          // component: () => import('pages/private/site-home/site-home-text')
          // }
        ]
      },
      {
        path: 'projects',
        component: () => import('pages/private/projects/default'),
        children: [
          {
            path: '',
            component: () => import('pages/private/projects/list')
          },
          {
            path: 'view',
            component: () => import('pages/private/projects/view')
          }
          // {
          // path: 'text',
          // component: () => import('pages/private/site-home/site-home-text')
          // }
        ]
      },
      {
        path: 'administradores',
        component: () => import('pages/private/adm-users/default'),
        children: [
          {
            path: '',
            component: () => import('pages/private/adm-users/list')
          }
        ]
      },
      {
        path: 'site-home',
        component: () => import('pages/private/site-home/default'),
        children: [
          {
            path: '',
            component: () => import('pages/private/site-home/site-home-list')
          },
          {
            path: 'banner',
            component: () => import('pages/private/site-home/site-home-banner')
          },
          {
            path: 'text',
            component: () => import('pages/private/site-home/site-home-text')
          }
        ]
      }
    ]
  },

  {
    path: '/login',
    component: () => import('pages/public/auth-default'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem(STORAGE_USER_TOKEN)) {
        next({
          path: '/admin'
        })
      } else {
        next()
      }
    },
    children: [
      {
        path: '',
        component: () => import('pages/public/auth-login')
      },
      {
        path: '/registry',
        component: () => import('pages/public/auth-registry')
      }
    ]
  },

  // {
  //   path: '/:estado',
  //   component: () => import('pages/public/site-submit/site-submit'),
  //   beforeEnter (to, from, next) {
  //     const {estado} = to.params

  //     const URL = URL_API + '/state/verify-deadline/' + estado

  //     axios.get(URL)
  //       .then(({status}) => {
  //         next()
  //       })
  //       .catch(() => {
  //         Notify.create({
  //           message: 'Prazo para submissão de projeto foi encerrado para este estado.',
  //           // timeout: 3000,
  //           type: 'warning',
  //           position: 'top-right'
  //         })

  //         next()
  //       })
  //   }
  // },

  {
    // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
