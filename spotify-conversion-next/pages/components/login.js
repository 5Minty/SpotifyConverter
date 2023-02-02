var client_id = "b1263098ab4b4da7911e4c3c55f6621e";
var redirect_uri = "http://localhost:3000/callback";

var app = express(); //node only framework?

app.get("/login", function (req, res) {
  var state = generateRandomString(16);
  var scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize?" + //redirect to login page and then back
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});
