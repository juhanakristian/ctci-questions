let isUniqueChars (input: string) =
    let mutable found = []

    for c in input do
        if List.contains c found then
            found <- c :: found

    found.Length = input.Length


let input = "Hello World"
printfn "%b" (isUniqueChars input)
