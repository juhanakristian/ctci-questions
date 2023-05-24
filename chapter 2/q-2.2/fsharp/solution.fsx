open System.Collections.Generic

type LinkedList<'t> =
    | Node of 't * LinkedList<'t>
    | End

let rec walk =
    function
    | End -> printfn "%s" "End"
    | Node(value, list) ->
        printfn "%A" value
        walk list

let rec toLinkedList =
    function
    | [] -> End
    | x :: xs -> Node(x, (toLinkedList xs))

let rec kthLast list k =

let list = [ 1; 2; 1; 1; 1 ]
let linkedList = toLinkedList list
walk linkedList
let dedupedList = kthLast linkedList 2
