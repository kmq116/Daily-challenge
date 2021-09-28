-- Guards 用来表示值条件是否成立并取值 | 多分支时可读性更高
shortLongShort :: String -> String -> String
shortLongShort a b | length a < length b = a ++ b ++ a
                   | otherwise           = b ++ a ++ b

    