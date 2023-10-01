type MinStack() = 
    let mutable stack = []
    let mutable minStack = []

    member this.Push(value) = 
        stack <- value :: stack
        match minStack with
        | [] -> minStack <- value :: minStack
        | _ ->
            let minValue = minStack.Head
            if value < minValue then
                minStack <- value :: minStack
            else
                minStack <- minValue :: minStack

    member this.Pop() = 
        match stack with
        | [] -> None
        | _ -> 
            let value = stack.Head
            stack <- stack.Tail
            // If value == minValue, then we need to pop the minStack as well
            if value = minStack.Head then
                minStack <- minStack.Tail
            Some value


    member this.Min() =
        match minStack with
        | [] -> 0
        | _ -> minStack.Head


let minStack = new MinStack()
minStack.Push(3)
printf "%d\n" (minStack.Min())
minStack.Push(2)
printf "%d\n" (minStack.Min())
minStack.Push(1)
printf "%d\n" (minStack.Min())
minStack.Push(4)
printf "%d\n" (minStack.Min())
minStack.Push(5)
printf "%d\n" (minStack.Min())
minStack.Pop()
printf "%d\n" (minStack.Min())
minStack.Pop()
printf "%d\n" (minStack.Min())
minStack.Pop()
printf "%d\n" (minStack.Min())
minStack.Pop()
printf "%d\n" (minStack.Min())

