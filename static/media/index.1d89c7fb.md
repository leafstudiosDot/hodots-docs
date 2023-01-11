# Posts

Your post is your content, by posting on hodots. means your content must abide by the [Guidelines](https://hodots.com/help/guidelines) and [Terms of Services](https://hodots.com/help/terms).

## View Post by Post Link

### View Post URI

[GET] [https://api.hodots.com/posts/postpage](https://api.hodots.com/posts/postpage)?={Post Link (String)}

This requires you to have an authentication token provided in Bearer Token from your approved token in your application on hodots. Developer Portal.

### Media Source

By viewing a hodots. Post Video/Image in your application, you may encounter with the response from `"media": {"videosrc"}`, You may use a hodots. CDN URI below
`[https://cdn.hodots.com/userposts/{Media Source (String)}/raw.mp4](https://cdn.hodots.com/userposts/{Media)` - Raw Uploaded Video
`[https://cdn.hodots.com/userposts/{Media Source (String)}/](https://cdn.hodots.com/userposts/{Media)hls/hls.m3u8` - HLS Processed Video

### Successful Response

[200 OK]

```json
{
    "alternates": {
        "youtube": "{YouTube Video Link (String)}"
    },
    "options": {
        "comments": {Comments (Bool)},
        "ratings": {Rating (Bool)},
        "nsfw": {NSFW Content (Bool)},
        "licensed": "{License (String)}",
        "sourcelabel": "{Source Label (String)}",
        "monetization": {Post is allowed to monetize content (Bool)},
        "status": "{Post Status (String)}"
    },
    "media": {
        "videosrc": "{Video Source (String)}",
        "videothumbsrc": "{Video Thumbnail (String)}",
        "processedstream": {
            "dash": {Processed Video as Dash (Bool)},
            "hls": {Processed Video as HLS (Bool)}
        }
    },
    "date": "{Post Date Created (String)}",
    "id": {Post ID (INT)},
    "postlink": "{Post Link (String)}",
    "userid": {User ID (INT)},
    "title": "{Post Title (String)}",
    "description": "{Post Description (String)}",
    "type": "{Post Type (String)}",
    "userdetails": {
        "username": "{Username (String)}",
        "verified": {User with Verified Check (Bool)},
        "userpage": "{User Page Link (String)}",
        "monetized": {User is allowed to monetize content (Bool)}
    },
    "viewcount": {Views (INT)}
}
```

### Errors

[404 Not Found] This response means the post isn’t found on hodots. or the post link is invalid.

```json
"Post not found"
```

[403 Forbidden] This response from hodots. CDN means the media isn’t found from the CDN server.

```json
AccessDeniedAccess Denied{Request ID}
```

## Create Post

### Create Post URI

[POST] [https://api.hodots.com/posts/createtext](https://api.hodots.com/posts/createtext) - Text
[POST] [https://api.hodots.com/posts/createvideo](https://api.hodots.com/posts/createvideo) - Video
[POST] [https://api.hodots.com/posts/createimage](https://api.hodots.com/posts/createimage) - Image

### Successful Response

[200 OK]

```json
{
    "title": "{Post Title (String)}",
    "userid": {User ID (INT)},
    "message": "Post by {User ID (INT)} succesfully in '{Post Link (String)}'",
    "link": "{Post Link (String)}",
    "code": "200"
}
```

### Errors

[403 Forbidden] This response means either your authentication token is invalid or expired.

```json
{
	"message": "Session not found"
}
```