const Api = {
  async get(path, setting = { cache: false }) {
    let Cookie = setting.cache ? undefined : (await import('next/headers')).cookies().toString()
    return fetch(typeof path == 'string' ? process.env.NEXT_LOCAL_BACKEND_URL + path : `${path}`, {
      cache: setting.cache ? 'force-cache' : 'default',
      method: 'GET',
      credentials: "same-origin",
      headers: {
        Cookie,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      next: { tags: ['Api'] },
    })

      // .then(r => r.text())

      .then(r => r.json())
  },
  async post(path, data) {
    return fetch(process.env.NEXT_LOCAL_BACKEND_URL + path, {
      method: 'POST',
      credentials: "same-origin",
      body: data instanceof FormData ? data : JSON.stringify(data),
      headers: {
        Cookie: (await import('next/headers')).cookies().toString(),
        Accept: 'application/json',
        'Content-Type': data instanceof FormData ? undefined : 'application/json'
      },
    }).then(r => r.json())
  },
}
export default Api