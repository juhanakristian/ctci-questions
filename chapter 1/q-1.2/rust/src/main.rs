fn is_permuation(input1: &str, input2: &str) -> bool {
    if input1.len() != input2.len() {
        return false;
    }

    let mut counts = [0; 128];
    for c in input1.chars() {
        counts[c as usize] += 1;
    }

    for c in input2.chars() {
        counts[c as usize] -= 1;
        if counts[c as usize] < 0 {
            return false;
        }
    }

    true
}
fn main() {
    println!("{}", is_permuation("abc", "cba"));
    println!("{}", is_permuation("asd", "aad"));
}
