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

let rec dedupeList =

    function
    | End -> End
    | Node(value, list) ->
        let values = new HashSet<int>([ value ])

        let rec loop =
            function
            | End -> End
            | Node(value, list) ->

                if values.Contains(value) then
                    loop list
                else
                    values.Add(value) |> ignore
                    Node(value, loop list)

        Node(value, loop list)

let list = [ 1; 2; 1; 1; 1 ]
let linkedList = toLinkedList list
walk linkedList
let dedupedList = dedupeList linkedList
walk dedupedList
