
type TripleStack<'T>() =
    let mutable array1 = [||]
    let mutable array2 = [||]
    let mutable array3 = [||]

    member this.Push(value:'T, arrayId:int) =
        match arrayId with
        | 1 -> array1 <- Array.append array1 [|value|]
        | 2 -> array2 <- Array.append array1 [|value|]
        | 3 -> array3 <- Array.append array1 [|value|]
        | _ -> failwith "Invalid array identifier. It must be 1, 2 or 3."

    
    member this.Pop(arrayId:int) =
        match arrayId with
        | 1 -> 
          match array1.Length with
          | 0 -> None
          | _ -> 
            let value = array1.[array1.Length - 1]
            array1 <- Array.sub array1 0 (array1.Length - 1)
            Some value
        | 2 -> 
          match array1.Length with
          | 0 -> None
          | _ -> 
            let value = array2.[array2.Length - 1]
            array2 <- Array.sub array2 0 (array2.Length - 1)
            Some value
        | 3 -> 
          match array3.Length with
          | 0 -> None
          | _ -> 
            let value = array3.[array3.Length - 1]
            array3 <- Array.sub array3 0 (array2.Length - 1)
            Some value
        | _ -> failwith "Invalid array identifier. It must be 1, 2 or 3."
    

let tripleStack = new TripleStack<int>()
tripleStack.Push(1, 1)
tripleStack.Push(2, 1)
tripleStack.Push(3, 1)

tripleStack.Push(4, 2)

printfn "%A" (tripleStack.Pop(1))
printfn "%A" (tripleStack.Pop(2))
printfn "%A" (tripleStack.Pop(3))
