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


class MinStack(Generic[T]):
    def __init__(self):
        self.min_stack: List[T] = []
        self.stack: List[T] = []

    def push(self, x: T) -> None:
        self.stack.append(x)
        if not self.min_stack or x <= self.min_stack[-1]:
            self.min_stack.append(x)

    def pop(self) -> T:
        if self.stack[-1] == self.min_stack[-1]:
            self.min_stack.pop()
        return self.stack.pop()


if __name__ == "__main__":
    min_stack = MinStack()
    min_stack.push(1)
    min_stack.push(2)
    min_stack.push(3)
    min_stack.push(2)
    assert min_stack.min_stack == [1]
    assert min_stack.stack == [1, 2, 3, 2]
    assert min_stack.pop() == 2
    assert min_stack.min_stack == [1]
