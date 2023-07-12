let urlify (input: string) =
    input
    |> Seq.toList
    |> Seq.map (fun x -> if x = ' ' then "%20" else x.ToString())
    |> String.concat ""

let value = urlify "test value"
printf "%s" value
