fn urlify(input: &str) -> String {
    let mut output = String::new();
    for c in input.chars() {
        if c == ' ' {
            output.push_str("%20");
        } else {
            output.push(c);
        }
    }    

    output
}

fn main() {
    println!("{}", urlify("Hello, world!"));
}
