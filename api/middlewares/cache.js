// Simple cache strategy from:
// https://dev.to/vigzmv/a-simple-caching-strategy-for-node-rest-apis-part-1-72a

const NodeCache = require('node-cache');

// stdTTL: time to live in seconds for every generated cache element
const cache = new NodeCache({ stdTTL: 5 * 60 });

function getUrlFromRequest(req) {
  const url = `${req.protocol}://${req.headers.host}${req.originalUrl}`;

  return url;
}

const customCache = {
  set(req, res, next) {
    const url = getUrlFromRequest(req);

    cache.set(url, res.locals.data);

    next();
  },
  get(req, res, next) {
    const url = getUrlFromRequest(req);
    const content = cache.get(url);

    if (content) {
      res.status(200).json(content);
    } else {
      next();
    }
  },
  clear(req, res, next) {
    cache.keys((err, keys) => {
      if (!err) {
        const resourceUrl = req.baseUrl;
        const resourceKeys = keys.filter(key => key.includes(resourceUrl));

        cache.del(resourceKeys);
      }
    });

    next();
  },
};

module.exports = customCache;
