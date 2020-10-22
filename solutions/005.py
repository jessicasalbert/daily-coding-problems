# cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 
# For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
# CLOSURE

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

def car(pair):
  def fn(a,b):
    return a
  return pair(fn)

def cdr(pair):
  def fn(a,b):
    return b
  return pair(fn)
