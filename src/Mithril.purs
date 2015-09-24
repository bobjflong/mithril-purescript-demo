module Mithril where

import Control.Monad.Eff

foreign import calculateInterest :: Number -> Number

foreign import data Request :: !

foreign import mithrilRequest :: forall e a. { method :: Prim.String, url :: Prim.String } -> Eff (request :: Request | e) {}

foreign import data MithrilDomNode :: *

foreign import mithrilDomLink :: { href :: Prim.String } -> Prim.String -> MithrilDomNode

foreign import data MithrilAction :: *

foreign import mithrilMount :: forall a b c e. Prim.String -> { page_list :: a, controller :: b, view :: c | e} -> MithrilAction

foreign import nullary :: forall a b. a -> Prim.String -> b
