export default {
  /** @param {Request} request @param {{ASSETS: {fetch: (request: Request) => Promise<Response>}}} env */
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/') { url.pathname='/ms/'; url.hostname='gayastreet.com'; url.protocol='https:'; return Response.redirect(url.toString(),301); }
    if (url.hostname === 'www.gayastreet.com' || (url.hostname === 'gayastreet.com' && url.protocol === 'http:')) {
      url.hostname = 'gayastreet.com';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
