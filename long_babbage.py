import babbage as b
max_digits = 40

def pad_with_zeros(list, desired_length):
    list += [0] * (desired_length - len(list))

def to_number(list):
    new_list = list.copy()
    new_list.reverse()
    num = int("".join([str(digit) for digit in new_list]))
    return num

def format_numbers(add, acc):
    add_list = [int(d) for d in str(add)]
    acc_list = [int(d) for d in str(acc)]
    add_list.reverse()
    acc_list.reverse()

    if len(add_list) > 40 or len(acc_list) > 40:
        raise Exception("Inputs must contain 40 digits or less")

    most_digits = max(len(add_list), len(acc_list))
    pad_with_zeros(add_list, most_digits + 1)
    pad_with_zeros(acc_list, most_digits + 1)

    return add_list, acc_list, most_digits + 1

def perform_long_addition(add, acc):
    add_list, acc_list, most_digits = format_numbers(add, acc)
    carry_list = [0] * (max_digits + 1)
    for i in range(most_digits):
        add_list[i], acc_list[i], carry_list[i + 1] = b.perform_babbage_addition(add_list[i], acc_list[i], carry_list[i])
        carry_list[i] = 0

    return to_number(add_list), to_number(acc_list), to_number(carry_list)


def perform_long_subtraction(sub, acc):
    print(f"\nSUBTRACTING {sub} FROM {acc}")
    sub_list, acc_list, most_digits = format_numbers(add, acc)
    carry_list = [1] * max_digits
    print()
    for i in range(most_digits):
        b.display_values(sub_list[i], acc_list[i], carry_list[i])
        sub_list[i], acc_list[i], carry_list[i + 1] = b.perform_babbage_subtraction(sub_list[i], acc_list[i], carry_list[i])
        carry_list[i] = 1
        b.display_values(sub_list[i], acc_list[i], carry_list[i])
        print()

    print()
    b.display_values(to_number(sub_list), to_number(acc_list), to_number(carry_list))

if __name__ == "__main__":

    try:
        print("Addend:")
        add=int(input())
        print("Accumulator:")
        acc=int(input())
    except ValueError:
        raise Exception("Input must be an integer")

    perform_long_addition(add, acc)
    perform_long_subtraction(add, acc)