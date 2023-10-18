let rec splitIntoChunks arr size =
    match arr with
    | [] -> []
    | _ ->
        if arr.Length < size then
            [arr]
        else
          let chunk, rest = List.splitAt size arr
          chunk :: splitIntoChunks rest size

type SetOfStacks() = 
    let mutable stacks = [[]]
    let threshold = 3

    member this.Push(value) = 
        let currentStack = stacks.[stacks.Length - 1]
        if currentStack.Length < threshold then
            stacks <- stacks.GetSlice(Some(0), Some(stacks.Length - 2)) @ [currentStack @ [value]]
        else
            stacks <- stacks @ [[value]]


    member this.Pop() = 
        let currentStack = stacks.[stacks.Length - 1]
        let items = currentStack.GetSlice(Some(0), Some(currentStack.Length - 2))
        let value = currentStack.[currentStack.Length - 1]

        if items.Length = 0 then
            stacks <- stacks.GetSlice(Some(0), Some(stacks.Length - 2))
        else
          stacks <- stacks.GetSlice(Some(0), Some(stacks.Length - 2)) @ [items]

        Some(value)
            



    member this.PopAt(index) =
        if index = stacks.Length - 1 then
            this.Pop()
        else

        let before = stacks.GetSlice(Some(0), Some(index - 1))
        let stack = stacks.[index]
        let value = stack.[stack.Length - 1]

        let stackItems = stack.GetSlice(Some(0), Some(stack.Length - 2))
        let restOfStacks = stacks.GetSlice(Some(index + 1), Some(stacks.Length - 1))

        let restOfStacksItems = restOfStacks |> List.collect (fun x -> x)
        let restacked = stackItems @ restOfStacksItems
        stacks <- before @ splitIntoChunks restacked threshold


        Some value

    member this.Print() =
        printfn "%A" stacks



      

let setOfStacks = new SetOfStacks()
setOfStacks.Push(1)
setOfStacks.Push(2)
setOfStacks.Push(3)
setOfStacks.Push(4)
setOfStacks.Push(5)
setOfStacks.Print()
printfn "Pop()"
setOfStacks.Pop()
setOfStacks.Print()
printfn "PopAt(0)"
setOfStacks.PopAt(0)
setOfStacks.Print()
printfn "Pop()"
setOfStacks.Pop()
setOfStacks.Print()


