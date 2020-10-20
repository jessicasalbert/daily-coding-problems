class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def serialize(node):
  if node == None:
    return "x"
  l = serialize(node.left)
  r = serialize(node.right)
  return str(node.val) + l + r



#NOT WORKING (remainingString passed value, not reference)
def deserialize(string):
  return helper(string)
    
def helper(remainingString):
  if remainingString[0] == "x":
      return None
  else:
    node = Node(remainingString[0])
    node.left = deserialize(remainingString[1:])
    node.right = deserialize(remainingString[1:])
    return node
    
    
#tests
#example 1
test = Node(1, Node(2), Node(3, None, Node(4)))

#example 2
node = Node('root', Node('left', Node('left.left')), Node('right'))
deserialize(serialize(node)).left.left.val == 'left.left'
