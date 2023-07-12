open System.Collections.Generic

type Node = { Value: int; Next: (Node option) }


let rec kthLast (list) (k: int) : int option =
    let mutable kth: Node option = None

    let mutable node: Node option = list
    let mutable index = k

    while node.IsSome do
        if index = 0 && kth.IsNone then
            kth <- Some(list.Value)
        elif kth.IsSome then
            kth <- Some(kth.Value.Next.Value)

        index <- index - 1
        node <- node.Value.Next

    match kth with
    | Some(n) -> Some(n.Value)
    | None -> None

let list =
    Some(
        { Value = 1
          Next =
            (Some
                { Value = 2
                  Next =
                    (Some
                        { Value = 3
                          Next =
                            (Some
                                { Value = 4
                                  Next = (Some { Value = 5; Next = None }) }) }) }) }
    )

let value = kthLast list 0
printfn "%A" (value)
