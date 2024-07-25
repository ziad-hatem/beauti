class Router extends String {
  name
  #routes
  path
  #query
  prefix
  constructor(...args) {
    super()
    if (typeof args[0] == 'string') {
      this.name = args[0]
      this.#routes = args[1]
    }
    else
      this.#routes = args[0]
  }
  q(obj) {
    this.#query = new URLSearchParams(Object.fromEntries(Object.entries(obj).filter(([, value]) => value)))
    return this
  }
  toString() {
    let out = this.prefix
    out += this.#query ? `${this.path.slice(0, -1)}?${this.#query}` : this.path
    return out
  }
  #get(key) {
    if (this.#routes)
      return this.#routes[key]
  }
  // appRoute(...params) {
  //   this.prefix = process.env.NEXT_PUBLIC_BACKEND_URL
  //   return this.#route(...params)
  // }
  // route(...params){
  //   this.prefix = process.env.NEXT_PUBLIC_PUBLIC_URL
  //   return this.#route(...params)
  // }
  route(name, v = []) {
    let vars = typeof v == "string" ? [v] : Array.isArray(v) ? v : []
    let varsObj = !Array.isArray(v) && typeof v != "string" ? v : {}
    name = name.split('.')
    this.path = ''
    this.#query = null
    let current = this
    for (const route of name) {
      current = current.#get(route)
      if (current instanceof this.constructor) {
        this.path += ((current.name == '$' ? null : current.name) || route) + '/'

        let breakAll = false
        while (true) {
          let temp = [current.#get('$'), current.name]
          temp = [...temp, temp[0]?.name]
          if (temp[0] || temp[1] == "$") {
            this.path += (varsObj[temp[2]] || vars.shift()) + '/'
            current = temp[0]
          } else
            break
          if (!(current instanceof this.constructor)) {
            breakAll = true
            break
          }
        }

        if (breakAll)
          break
      }
      else {
        if (current)
          this.path += current + '/'
        break
      }
    }
    return this
  }
}
const r = (...args) => new Router(...args)
/*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*/

const routes = new Router({
  terms: r(),
  helpTopic: r(),
  "about-us": r(),
  "privacy-policy": r(),
  // customer: r({
  //   auth: r({
  //     "service-login": r('$'),
  //     "sign-up": r()
  //   })
  // }),
  product: r('$'),
  // products: r({
  //   $: r('filter', {
  //     $: r('page')
  //   })
  // }),
  products: r() // q
})
routes.prefix = process.env.NEXT_PUBLIC_PUBLIC_URL

const appRoutes = new Router({
  lang: r('$'),
  banner: r('$'),
  getCart: r(),
  customer: r({
    auth: r({
      "sign-up": r(),
      "service-login": r('$'),
      logout: r(),
      "loginFromModal": r(),
    })
  }),
  // orderedCategories: r(),
  // orderedCategoriesForHome: r(),
  level1Products: r(),
  searchProducts: r('searched-products'),
  confirmLocation: r('confirm-location-ajax'),
  subscription: r(),
  products: r(),
  brands: r(),
  categories: r(),
  contact: r({
    store: r()
  })
})
appRoutes.prefix = process.env.NEXT_PUBLIC_BACKEND_URL

const localAppRoutes = new Router({
  lang: r('$'),
  banner: r('$'),
  getCart: r(),
  customer: r({
    auth: r({
      "sign-up": r(),
      "service-login": r('$'),
      logout: r(),
      "loginFromModal": r(),
    })
  }),
  // orderedCategories: r(),
  // orderedCategoriesForHome: r(),
  level1Products: r(),
  searchProducts: r('searched-products'),
  confirmLocation: r('confirm-location-ajax'),
  subscription: r(),
  products: r(),
  brands: r(),
  categories: r(),
  contact: r({
    store: r()
  })
})
localAppRoutes.prefix = process.env.NEXT_LOCAL_BACKEND_URL

/*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*`*/
const route = (...args) => routes.route(...args)
export const appRoute = (...args) => appRoutes.route(...args)
export const localAppRoute = (...args) => localAppRoutes.route(...args)
export default route

/**
route('terms')
route('privacy-policy')
route('customer.auth')
route('customer')
X route('customer.auth.service-login')
route('customer.auth.service-login', 'facebook')
route('customer.auth.sign-up')
X route('products')
X route('products', {filter: 'best'})
route('products', {filter: 'best', page: 1})
 */