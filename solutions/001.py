# Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
# For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.


def twoSum(arr, target):
  memoize = {}
  for x in arr:
    if (target - x) in memoize:
      return True
    else:
      memoize[x] = True
  return False


def assertEquals(actual, expected, test):
  if actual == expected:
    print("pass")
  else:
    print(f"Failed [{test}]; Expected {expected} but got {actual}")


#tests
test1 = twoSum([10, 15, 3, 7], 17)
assertEquals(test1, True, "should return true if two numbers add to target")

test2 = twoSum([10, 15, 3, 1], 17)
assertEquals(test2, False, "should return false if no two numbers add to target")

test3 = twoSum([], 17)
assertEquals(test3, False, "should return false if array is empty")

test4 = twoSum([1, 2, 3], 6)
assertEquals(test4, False, "should not count any index twice")

test5 = twoSum([1, 2, 3, 4], 5)
assertEquals(test5, True, "should return true if multiple combinations add to target")

test6 = twoSum([4, 5, 6, 7], 5)
assertEquals(test4, False, "should return false if not exactly 2 numbers add to target")