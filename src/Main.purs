module Main where

import Mithril
import Prelude

api = "http://jsonplaceholder.typicode.com/posts"

app = {
  page_list: mithrilRequest { method: "GET", url: api },
  controller: \_ -> { pages: app.page_list },
  view: view
}

post2Dom :: Post -> MithrilDomNode
post2Dom x = mithrilDomLink { href: x.id } x.title

view :: PostList -> Array MithrilDomNode
view x = map post2Dom (pages x)

main = \_ -> mithrilMount "main" app
