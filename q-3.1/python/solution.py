from typing import TypeVar, List, Generic, Any, Protocol


class SupportsComparison(Protocol):
    def __lt__(self: "SupportsComparison", other: Any) -> bool:
        ...

    def __le__(self: "SupportsComparison", other: Any) -> bool:
        ...

    def __eq__(self: "SupportsComparison", other: Any) -> bool:
        ...

    def __ne__(self: "SupportsComparison", other: Any) -> bool:
        ...

    def __gt__(self: "SupportsComparison", other: Any) -> bool:
        ...

    def __ge__(self: "SupportsComparison", other: Any) -> bool:
        ...


T = TypeVar("T", bound=SupportsComparison)


class MultiStack(Generic[T]):
    def __init__(self, num_stacks: int):
        self.stacks = [[] for _ in range(num_stacks)]

    def push(self, stack_num: int, x: T) -> None:
        self.stacks[stack_num].append(x)

    def pop(self, stack_num: int) -> T:
        return self.stacks[stack_num].pop()


if __name__ == "__main__":
    stack = MultiStack(3)
    stack.push(0, 1)
    stack.push(0, 2)
    stack.push(0, 3)
    stack.push(1, 4)
    stack.push(1, 5)
    stack.push(1, 6)
    stack.push(2, 7)
    stack.push(2, 8)
    stack.push(2, 9)
    assert stack.stacks == [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    assert stack.pop(0) == 3
    assert stack.pop(1) == 6
    assert stack.pop(2) == 9
    assert stack.stacks == [[1, 2], [4, 5], [7, 8]]
