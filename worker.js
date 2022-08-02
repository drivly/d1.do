export default {
 fetch: async (req, env) => {
   const { pathname, searchParams } = new URL(req.url)
   const [ table ] = pathname.split('/')
   const data = await db.prepare('SELECT * FROM ?1').bind(table).all()
   return new Response(JSON.stringify({data}), null, 2, { headers: { 'content-type': 'application/json' }})
 }
}
