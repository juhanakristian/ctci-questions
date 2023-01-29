
let input = "Hello World"

let mutable found = []

for c in input do
    if List.contains c found then found <- c :: found

printfn "%b" (found.Length = input.Length)


