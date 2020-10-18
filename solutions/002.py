# Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

# For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

# Follow-up: what if you can't use division?

#Solution 1 - O(n) time; O(n) space
def productExceptIndex(array):
  prod = 1
  results = []
  for x in array:
    prod *= x
  for x in array:
    results.append(prod / x)
  return results

#Solution 2- O(n^2) time; O(n) space
def productExceptIndex(array):
  results = []
  for i in range(len(array)):
    prod = 1
    for j in range(len(array)):
      if i != j:
        prod *= array[j]
    results.append(prod)
  return results


def assertEquals(actual, expected, test):
  if actual == expected:
    print("pass")
  else:
    print(f"Failed [{test}]; Expected {expected} but got {actual}")


#tests
test1 = productExceptIndex([1, 2, 3, 4, 5])
assertEquals(test1, [120, 60, 40, 30, 24], "should work with all positive numbers")

test4 = productExceptIndex([3, 2, 1])
assertEquals(test4, [2, 3, 6], "should work with all positive numbers")

test2 = productExceptIndex([1, 2, 3, -4, 5])
assertEquals(test2, [-120, -60, -40, 30, -24], "should work with negative numbers")

test3 = productExceptIndex([])
assertEquals(test3, [], "should return empty array with empty array input")
