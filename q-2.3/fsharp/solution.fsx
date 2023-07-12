open System.Collections.Generic

type Node = { Value: int; Next: (Node option) }


let rec deleteNode (list: Node option) (nodeToDelete: Node) =
    match list with
    | None -> None // Base case: empty list
    | Some node ->
        if node = nodeToDelete then
            node.Next // Skip the node to delete
        else
            Some { node with Next = deleteNode node.Next nodeToDelete }

let node3 = { Value = 3; Next = None }
let node2 = { Value = 2; Next = Some node3 }
let node1 = { Value = 1; Next = Some node2 }

let value = deleteNode (Some node1) node2
printfn "%A" (value)
