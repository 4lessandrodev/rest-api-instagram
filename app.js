const  createError = require('http-errors');
const  express = require('express');
const  path = require('path');
const  cookieParser = require('cookie-parser');
const  logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const Auth = require('./middleware/Auth');
const helmet = require('helmet');

const  indexRouter = require('./routes/index');
const  usersRouter = require('./routes/users');
const  comentsRouter = require('./routes/coments');
const  postsRouter = require('./routes/posts');
const  likesRouter = require('./routes/likes');
const  followersRouter = require('./routes/followers');
const  messagesRouter = require('./routes/messages');
const notificationsRouter = require('./routes/notifications');
const brute = require('./middleware/Brute');
 
const  app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(brute.lockManySolicitations());
app.use('/', indexRouter);
app.use(Auth.verifyToken);
app.use('/users', usersRouter);
app.use('/comments', comentsRouter);
app.use('/posts', postsRouter);
app.use('/likes', likesRouter);
app.use('/followers', followersRouter);
app.use('/messages', messagesRouter);
app.use('/notifications', notificationsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
