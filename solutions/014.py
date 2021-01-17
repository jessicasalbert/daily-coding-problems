# Longest common prefix

class Solution:
    def longestCommonPrefix(self, words):
        i = 0
        prefix = ""
        if len(words) == 0:
            return ""
        while i < len(words[0]):
            letter = words[0][i]
            for x in words:
                if i >= len(x) or x[i] != letter:
                    return prefix
            prefix += words[0][i]
            i += 1
        return prefix
