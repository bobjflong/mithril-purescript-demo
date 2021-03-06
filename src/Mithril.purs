module Mithril where

import Control.Monad.Eff

foreign import data Request :: !

foreign import mithrilRequest :: forall e. { method :: Prim.String, url :: Prim.String } -> Eff (request :: Request | e) {}

foreign import data MithrilDomNode :: *

foreign import mithrilDomLink :: { href :: Prim.String } -> Prim.String -> MithrilDomNode

foreign import data MithrilAction :: !

foreign import mithrilMount :: forall a b c e f. Prim.String -> { page_list :: a, controller :: b, view :: c | e} -> Eff (action :: MithrilAction | f) {}

foreign import data PostList :: *

type Post = { title :: Prim.String, id :: Prim.String }

foreign import pages :: PostList -> Array Post
