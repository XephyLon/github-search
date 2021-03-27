import { CombinedResponseData, SearchResponse } from "./models/search-response.model"

export const sortOptions = [
    { name: 'Best Match', value: ''},
    { name: 'Followers', value: 'followers'},
    { name: 'Repositories', value: 'repositories'},
    { name: 'Join Date', value: 'joined'},
]

export const defaultResponse: SearchResponse = {
  incomplete_results: false,
  total_count: 0,
  items: []
}

export const expectedResponse: CombinedResponseData = {
    "total_count": 1,
    "incomplete_results": false,
    "items": [
      {
        "login": "XephyLon",
        "id": 37638392,
        "node_id": "MDQ6VXNlcjM3NjM4Mzky",
        "avatar_url": "https://avatars.githubusercontent.com/u/37638392?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/XephyLon",
        "html_url": "https://github.com/XephyLon",
        "followers_url": "https://api.github.com/users/XephyLon/followers",
        "following_url": "https://api.github.com/users/XephyLon/following{/other_user}",
        "gists_url": "https://api.github.com/users/XephyLon/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/XephyLon/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/XephyLon/subscriptions",
        "organizations_url": "https://api.github.com/users/XephyLon/orgs",
        "repos_url": "https://api.github.com/users/XephyLon/repos",
        "events_url": "https://api.github.com/users/XephyLon/events{/privacy}",
        "received_events_url": "https://api.github.com/users/XephyLon/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Xephy Lon",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": true,
        "bio": "I hate carousels.",
        "twitter_username": null,
        "public_repos": 17,
        "public_gists": 0,
        "followers": 0,
        "following": 1,
        "created_at": "2018-03-21T21:12:15Z",
        "updated_at": "2021-03-24T19:58:13Z"
      }
    ]
  }