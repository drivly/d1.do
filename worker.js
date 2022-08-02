const json = data => new Response(JSON.stringify({data}), null, 2, { headers: { 'content-type': 'application/json' }})

export default {
 fetch: async (req, env) => {
   const { pathname, searchParams } = new URL(req.url)
   const [ table ] = pathname.split('/')
//    if (!table) {
//     `SELECT name FROM sqlite_schema WHERE type='table' ORDER BY name` 
//    }
   const data = await env.DB.prepare('SELECT * FROM ?1').bind(table).all()
   return json(data)
 }
}
