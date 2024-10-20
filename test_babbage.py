import babbage as b
import long_babbage as lb
import unittest
import math

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

if __name__ == "__main__":
    unittest.main()
