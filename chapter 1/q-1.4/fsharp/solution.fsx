let add x =
    match x with
    | Some s -> Some(s + 1)
    | None -> Some 1

let isPalindromPermutation (input: string) =
    let mutable counts: Map<char, int> = Map.empty

    for c in input do
        counts <- counts.Change(c, add)

    let even = input.Length % 2 = 0
    let values = counts.Values |> Seq.toList |> List.sort

    let oddCounts = values |> List.filter (fun x -> x % 2 = 1)

    oddCounts.Length <= 1

printf "%b" (isPalindromPermutation "tacctccoa")
