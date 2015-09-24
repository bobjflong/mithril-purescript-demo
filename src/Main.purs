module Main where

import Mithril
import Prelude

import Control.Monad.Eff.Console

api = "http://jsonplaceholder.typicode.com/posts"

app = {
  page_list: (\_ -> mithrilRequest { method: "GET", url: api }),
  controller: (\_ -> { pages: app.page_list unit }),
  view: view
}

type Post = { title :: Prim.String, id :: Prim.String }

post2Dom :: Post -> MithrilDomNode
post2Dom x = mithrilDomLink { href: x.id } x.title

view :: forall a. a -> Array MithrilDomNode
view x = map post2Dom (nullary x "pages")

controller = (\_ -> { pages: app.page_list unit })

main = do
  \_ -> mithrilMount "main" app