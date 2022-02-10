const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;

// our own middleware function that can authguard routes.
// To authguard a route means to restrict it to authenticated users only.

// 在前端注销。尝试访问http://localhost:3001/dashboard 您应该被重定向到/login. 
// 有了这个中间件，您可以轻松地保护（即 authguard）其他路由
