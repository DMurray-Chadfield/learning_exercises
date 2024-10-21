import babbage as b
import long_babbage as lb
import unittest
import random

class TestBabbage(unittest.TestCase):
    test_cases = [
        (0, 0, 0),
        (5, 0, 0),
        (0, 5, 0),
        (1, 5, 0),
        (5, 9, 0),
        (0, 0, 1),
        (5, 0, 1),
        (0, 5, 1),
        (1, 5, 1),
        (5, 9, 1),
    ]
    expected_adds = [
        (0, 0, 0),
        (0, 5, 0),
        (0, 5, 0),
        (0, 6, 0),
        (0, 4, 1),
        (0, 1, 0),
        (0, 6, 0),
        (0, 6, 0),
        (0, 7, 0),
        (0, 5, 1),
    ]
    expected_subs = [
        (0, 9, 0),
        (0, 4, 0),
        (0, 4, 1),
        (0, 3, 1),
        (0, 3, 1),
        (0, 0, 1),
        (0, 5, 0),
        (0, 5, 1),
        (0, 4, 1),
        (0, 4, 1),
    ]

    multi_digit_ops = [
        1,
        50,
        0,
        1
    ]

    multi_digit_accs = [
        99,
        999999,
        49,
        50,
        0,
        1,
        1000000
    ]

    for i in range(10):
        int = random.randrange(0, lb.to_number([9]*39))
        multi_digit_accs.append(int)

    def test_addition(self):
        for i in range(len(self.test_cases)):
            test_case = self.test_cases[i]
            with self.subTest():
                self.assertEqual(
                    b.perform_babbage_addition(test_case[0], test_case[1], test_case[2]),
                    self.expected_adds[i],
                    f"Failed case: {test_case}"
                )

    def test_subtraction(self):
        for i in range(len(self.test_cases)):
            test_case = self.test_cases[i]
            with self.subTest():
                self.assertEqual(
                    b.perform_babbage_subtraction(test_case[0], test_case[1], test_case[2]),
                    self.expected_subs[i],
                    f"Failed case {i}: {test_case}"
                )

    def test_long_addition(self):
        for op in self.multi_digit_ops:
            for acc in self.multi_digit_accs:
                with self.subTest():
                    self.assertEqual(
                        lb.perform_long_addition(op, acc),
                        (0, op + acc, 0),
                        f"Failed case: {acc} + {op}"
                    )

    def test_long_addition(self):
        for op in self.multi_digit_ops:
            for acc in self.multi_digit_accs:
                with self.subTest():
                    self.assertEqual(
                        lb.perform_long_subtraction(op, acc),
                        (0, op + acc, 0),
                        f"Failed case: {acc} + {op}"
                    )

if __name__ == "__main__":
    print(lb.perform_long_subtraction(9, 5))
#    unittest.main()
