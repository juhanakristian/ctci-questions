from typing import TypeVar, List, Generic, Any, Protocol


T = TypeVar("T")


class SetOfStacks(Generic[T]):
    def __init__(self, threshold: int):
        self.threshold = threshold
        self.stacks = [[]]

    def push(self, x: T) -> None:
        if not self.stacks or len(self.stacks[-1]) == self.threshold:
            self.stacks.append([])

        self.stacks[-1].append(x)

    def pop(self) -> T:
        if not self.stacks[-1]:
            self.stacks.pop()

        if not self.stacks:
            raise IndexError("pop from empty stack")

        return self.stacks[-1].pop()

    def pop_at(self, index: int) -> T:
        if index >= len(self.stacks):
            raise IndexError("pop from empty stack")

        if not self.stacks[index]:
            raise IndexError("pop from empty stack")

        value = self.stacks[index].pop()

        # Flatten the stacks after the popped stack.
        left_values = []
        for i in range(index, len(self.stacks)):
            left_values.extend(self.stacks[i])

        # Redistribute the values into stacks with max size of threshold.
        rest = [
            left_values[i : i + self.threshold]  # take a slice of size threshold
            for i in range(0, len(left_values), self.threshold)  # iterate by threshold
        ]
        self.stacks = self.stacks[:index] + rest

        return value

    def __str__(self):
        return str(self.stacks)


if __name__ == "__main__":
    stack = SetOfStacks(3)
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)

    print(stack)
    assert stack.stacks == [[1, 2, 3], [4, 5]]
    stack.pop()
    print(stack)
    assert stack.stacks == [[1, 2, 3], [4]]
    stack.pop_at(0)
    print(stack)
    assert stack.stacks == [[1, 2, 4]]
