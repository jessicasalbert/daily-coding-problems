#Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

#For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

#You can modify the input array in-place.


def findMissing(array):
  if array == None or len(array) == 0:
    return 1
  else:
    length = len(array)
    containsOne = False
    for x in range(length):
      if array[x] == 1:
        containsOne = True
      if array[x] < 1 or array[x] > length + 1:
        array[x] = 1
    if not containsOne:
      return 1
    else:
      for x in range(length):
        index = abs(array[x]) - 1
        if array[index] > 0:
          array[index] = -array[index]
      for x in range(length):
        if array[x] > 0:
          return x + 1
      return len(array) + 1
