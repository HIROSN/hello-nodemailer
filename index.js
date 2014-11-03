'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

transporter.sendMail({
  from: 'hirosntest@gmail.com',
  to: 'hirosn@live.com',
  subject: 'hello',
  text: 'hello world!'
});
