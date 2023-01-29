let Value (c: char) = (int c) - (int 'A') + 1

let isPermutation (input1: string) (input2: string) =

    let chars s =
        s |> Seq.toList |> List.map (fun c -> Value(c)) |> Seq.toArray

    let input1Chars = chars input1
    let input2Chars = chars input2

    let count x xs =
        xs |> Array.filter (fun a -> a = x) |> Array.length

    input1Chars
    |> Array.map (fun x -> (count x input1Chars) = (count x input2Chars))
    |> Array.filter (fun x -> x = false)
    |> Array.length = 0
    && input1.Length = input2.Length






let result = isPermutation "asd" "das"

printf "RESULT %b" result
