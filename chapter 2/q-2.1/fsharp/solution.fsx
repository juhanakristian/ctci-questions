type ListNode =
    struct
        val Value: int
        val Next: ListNode option
    end

let rec printList (list: ListNode option) =
    match list with
    | None -> ()
    | Some node ->
        printfn "%d" node.Value
        printList node.Next


let rec dedupe (head: ListNode) = function
    | None -> None
    | Some node ->
        let rec loop (list: ListNode) = function
            | None -> None
            | Some node: ListNode ->
                if node.Value = node.Next.Value then
                    loop node.Next
                else
                    Some { Value = node.Value; Next = loop node.Next }
        Some { Value = node.Value; Next = loop node.Next }
