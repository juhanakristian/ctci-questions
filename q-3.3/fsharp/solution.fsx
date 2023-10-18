type SetOfStacks() = 
    let mutable stacks = [[]]
    let threshold = 3

    member this.Push(value) = 
        let currentStack = stacks.Head
        if currentStack.Length < threshold then
            stacks <- (value :: currentStack) :: stacks.Tail
        else
            stacks <- [value] :: stacks

    member this.Pop() = 
        let currentStack = stacks.Head
        let value = currentStack.Head
        stacks <- currentStack.Tail :: stacks.Tail
        Some value


    // member this.PopAt(index) =
    //     let stack = stacks.[index]
    //     let value = stack.Head
    //     stacks.[index] <- stack.Tail
    //     Some value


      

let setOfStacks = new SetOfStacks()
setOfStacks.Push(1)
setOfStacks.Push(2)
setOfStacks.Push(3)
setOfStacks.Push(4)

printfn "%A" (setOfStacks.Pop())
