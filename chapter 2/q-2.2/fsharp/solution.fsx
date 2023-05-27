open System.Collections.Generic

type Node = { Value: int; Next: (Node option) ref }


let rec kthLast list : Node =
    let mutable kth: Node option ref = ref None

    // Loop through the list and keep track of the kth last element
    let mutable node: Node option ref = ref list
    let mutable index = 0

    while (node.Value.IsSome) do
        if index >= 3 then
            if kth.Value.IsSome then
                kth <- kth.Value.Value.Next
            else
                kth <- node

        index <- index + 1
        node <- node.Value.Value.Next

    kth.Value.Value

let list =
    Some(
        { Value = 1
          Next =
            ref (
                Some
                    { Value = 2
                      Next =
                        ref (
                            Some
                                { Value = 3
                                  Next =
                                    ref (
                                        Some
                                            { Value = 4
                                              Next = ref (Some { Value = 5; Next = ref None }) }
                                    ) }
                        ) }
            ) }
    )

let value = kthLast list
printfn "%A" value.Value
