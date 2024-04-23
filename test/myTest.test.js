const request = require('supertest');
const assert = require('assert');
const app = require('../index'); // Adjust the path if necessary

describe('GET /', function() {
  it('responds with HTML containing the message', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert(res.text.includes('Welcome to my Node.js App!'));
        done();
      });
  });

  it('responds with 404 for non-existent route', function(done) {
    request(app)
      .get('/nonexistent')
      .expect(404, done);
  });
});
