fn is_unique_chars(input: &str) -> bool {
    let mut seen = vec![];
    for c in input.chars() {
        if seen.contains(&c) {
            return false
        }
        seen.push(c);
    }


    return true
}

fn main() {
    println!("{}", is_unique_chars("Hello, world!"));
}
