def display_values(add, acc, carry):
    print(f"Operand: {add} ; Accumulator: {acc} ; Carry: {carry}")

def check_input(number):
    if number < 0 or number > 9:
        raise Exception("Input must be in the range 0-9")

def perform_babbage_addition(arg_add, arg_acc, arg_carry=0):
    return_carry = 0
    while arg_add != 0 or arg_carry != 0:
        if arg_carry == 0:
            arg_add -= 1
        else:
            arg_carry -= 1

        arg_acc += 1
        arg_acc %= 10
        if arg_acc == 0:
            return_carry += 1

    return arg_add, arg_acc, return_carry

def perform_babbage_subtraction(arg_sub, arg_acc, arg_carry=1):
    return_carry = 1
    while arg_sub != 0 or arg_carry == 0:
        if arg_carry == 0:
            arg_carry += 1
        else:
            arg_sub-= 1

        arg_acc -= 1
        arg_acc %= 10
        if arg_acc == 9:
            return_carry -= 1

    return arg_sub, arg_acc, return_carry

if __name__ == "__main__":
    try:
        print("Addend:")
        add=int(input())
        check_input(add)
        print("Accumulator:")
        acc=int(input())
        check_input(acc)
    except ValueError:
        raise Exception("Input must be an integer")
    carry=0

    print("\nInitial:")
    display_values(add, acc, carry)

    add, acc, carry = perform_babbage_subtraction(add, acc, carry)

    print("\nFinal:")
    display_values(add, acc, carry)




