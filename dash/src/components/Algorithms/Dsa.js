import React, { useState } from "react";

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  Tooltip,
  Link,
  Button,
  Tabs,
  Tab,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";



const dsaTopics = [
  {
    day: 'Day 1 : Arrays I',
    questions: [
      { title: 'Majority Element', difficulty: 'EASY', link: 'https://leetcode.com/problems/majority-element/' },
      { title: 'Repeat & Missing Number', difficulty: 'EASY', link: 'https://leetcode.com/problems/find-the-duplicate-number/' },
      { title: 'Merge 2 Sorted Arrays', difficulty: 'EASY', link: 'https://leetcode.com/problems/merge-sorted-array/' },
      { title: 'Single Number', difficulty: 'EASY', link: 'https://leetcode.com/problems/single-number/' },
      { title: 'Stock Buy & Sell', difficulty: 'EASY', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
      { title: 'Compute Pow X^N', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/powx-n/' },
    ]
  },
  {
    day: 'Day 2 : Arrays II',
    questions: [
      { title: "Kadane's Algorithm", difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/maximum-subarray/' },
      { title: 'Search in 2D Matrix', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/search-a-2d-matrix/' },
      { title: 'Container With Most Water', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/container-with-most-water/' },
      { title: 'Sort Colors (0s,1s,2s)', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/sort-colors/' },
      { title: '3Sum', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/3sum/' },
      { title: '4Sum', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/4sum/' },
    ]
  },
  {
    day: 'Day 3 : Arrays III',
    questions: [
      { title: 'Next Permutation', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/next-permutation/' },
      { title: 'Merge Overlapping Intervals', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/merge-intervals/' },
      { title: 'Longest Substring Without Repeating Characters', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
      { title: 'Set Matrix Zeroes', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/set-matrix-zeroes/' },
      { title: 'Word Search', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/word-search/' },
      { title: 'Product of Array Except Self', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/product-of-array-except-self/' },
    ]
  },
  {
    day: 'Day 4 : Arrays IV',
    questions: [
      { title: 'Subarray Sum Equals K', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
      { title: 'Find Duplicate', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/find-the-duplicate-number/' },
      { title: 'Spiral Matrix', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/spiral-matrix/' },
      { title: 'Search in Sorted Matrix II', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/search-a-2d-matrix-ii/' },
      { title: 'Count Inversions', difficulty: 'HARD', link: 'https://www.codingninjas.com/studio/problems/count-inversions_615' },
    ]
  },
  {
    day: 'Day 5 : Arrays V',
    questions: [
      { title: 'Trapping Rainwater', difficulty: 'HARD', link: 'https://leetcode.com/problems/trapping-rain-water/' },
      { title: 'Sliding Window Maximum', difficulty: 'HARD', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
      { title: 'Reverse Pairs', difficulty: 'HARD', link: 'https://leetcode.com/problems/reverse-pairs/' },
      { title: 'Largest Rectangle in Histogram', difficulty: 'HARD', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
    ]
  },
  {
    day: 'Day 6 : Strings I',
    questions: [
      { title: 'Valid Palindrome', difficulty: 'EASY', link: 'https://leetcode.com/problems/valid-palindrome/' },
      { title: 'Valid Anagram', difficulty: 'EASY', link: 'https://leetcode.com/problems/valid-anagram/' },
      { title: 'Reverse Words in a String', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/reverse-words-in-a-string/' },
      { title: 'Remove All Occurrences of a Substring', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/remove-all-occurrences-of-a-substring/' },
      { title: 'Permutation in String', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/permutation-in-string/' },
      { title: 'String Compression', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/string-compression/' },
    ]
  },
  {
    day: 'Day 7 : Strings II',
    questions: [
      { title: 'Reverse Words in a String', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/reverse-words-in-a-string/' },
      { title: 'Longest Common Prefix', difficulty: 'EASY', link: 'https://leetcode.com/problems/longest-common-prefix/' },
      { title: 'Group Anagrams', difficulty: 'MEDIUM', link: 'https://leetcode.com/problems/group-anagrams/' },
      { title: 'Minimum Window Substring', difficulty: 'HARD', link: 'https://leetcode.com/problems/minimum-window-substring/' },
      { title: 'KMP Algorithm', difficulty: 'HARD', link: 'https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/' },
      { title: 'Rabin-Karp Algorithm', difficulty: 'HARD', link: 'https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/' },
    ]
  },
  {
    day: "Day 8 : Binary Search",
    questions: [
      { title: "Peak Index in Mountain Array", difficulty: "MEDIUM", link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/" },
      { title: "Search in Rotated Sorted", difficulty: "MEDIUM", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
      { title: "Single Element in Sorted Array", difficulty: "MEDIUM", link: "https://leetcode.com/problems/single-element-in-a-sorted-array/" },
      { title: "Aggressive Cows", difficulty: "MEDIUM", link: "https://www.geeksforgeeks.org/aggressive-cows-dynamic-programming-solution/" },
      { title: "Allocate Minimum Pages", difficulty: "MEDIUM", link: "https://www.geeksforgeeks.org/allocate-minimum-number-pages/" },
      { title: "Painter’s Partition", difficulty: "MEDIUM", link: "https://www.geeksforgeeks.org/painters-partition-problem/" },
      { title: "Single Element in Sorted Array", difficulty: "MEDIUM", link: "https://leetcode.com/problems/single-element-in-a-sorted-array/" }, // Duplicate
      { title: "Median of 2 Sorted Arrays", difficulty: "HARD", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" }
    ]
  },
  {
    day: "Day 9 : Recursion & Backtracking",
    questions: [
      { title: "Combination Sum I", difficulty: "MEDIUM", link: "https://leetcode.com/problems/combination-sum/" },
      { title: "Combination Sum II", difficulty: "MEDIUM", link: "https://leetcode.com/problems/combination-sum-ii/" },
      { title: "Palindrome Partitioning", difficulty: "MEDIUM", link: "https://leetcode.com/problems/palindrome-partitioning/" },
      { title: "N Queens", difficulty: "HARD", link: "https://leetcode.com/problems/n-queens/" },
      { title: "Sudoku Solver", difficulty: "HARD", link: "https://leetcode.com/problems/sudoku-solver/" },
      { title: "M-Coloring Problem", difficulty: "MEDIUM", link: "https://www.geeksforgeeks.org/m-coloring-problem-backtracking-5/" }
    ]
  },
  {
    day: "Day 10 : Recursion & Backtracking",
    questions: [
      { title: "Subsets II", difficulty: "MEDIUM", link: "https://leetcode.com/problems/subsets-ii/" },
      { title: "Knights Tour", difficulty: "MEDIUM", link: "https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/" },
      { title: "rat in a maze", difficulty: "MEDIUM", link: "https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/" },
      { title: "merge sort", difficulty: "MEDIUM", link: "https://www.geeksforgeeks.org/merge-sort/" },
      { title: "count inversions", difficulty: "HARD", link: "https://www.geeksforgeeks.org/counting-inversions/" }
    ]
  },
  {
    day: "Day 11 : Linked List I",
    questions: [
      { title: "Reverse Linked List I", difficulty: "EASY", link: "https://leetcode.com/problems/reverse-linked-list/" },
      { title: "Middle of a Linked List", difficulty: "EASY", link: "https://leetcode.com/problems/middle-of-the-linked-list/" },
      { title: "Merge 2 Sorted LL", difficulty: "EASY", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { title: "Detect Cycle in a LL", difficulty: "EASY", link: "https://leetcode.com/problems/linked-list-cycle/" },
      { title: "Remove Cycle in a LL", difficulty: "MEDIUM", link: "https://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/" },
      { title: "Flatten a Linked List", difficulty: "MEDIUM", link: "https://www.geeksforgeeks.org/flattening-a-linked-list/" }
    ]
  },
  {
    day: "Day 12 : Linked List II",
    questions: [
      { title: "Is LL a Palindrome or Not", difficulty: "EASY", link: "https://leetcode.com/problems/palindrome-linked-list/" },
      { title: "Clone List with Random Pointers", difficulty: "MEDIUM", link: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
      { title: "Add 2 Numbers", difficulty: "MEDIUM", link: "https://leetcode.com/problems/add-two-numbers/" },
      { title: "Reverse Linked List II", difficulty: "MEDIUM", link: "https://leetcode.com/problems/reverse-linked-list-ii/" },
      { title: "Rotate a Linked List", difficulty: "MEDIUM", link: "https://leetcode.com/problems/rotate-list/" },
      { title: "Reverse Nodes in K Groups", difficulty: "HARD", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/" }
    ]
  },
  {
    day: "Day 13 : Stacks & Queues I",
    questions: [
      { title: "Implement Stack using Queue", difficulty: "EASY", link: "https://leetcode.com/problems/implement-stack-using-queues/" },
      { title: "Implement Queue using Stack", difficulty: "EASY", link: "https://leetcode.com/problems/implement-queue-using-stacks/" },
      { title: "Next Greater Element", difficulty: "EASY", link: "https://leetcode.com/problems/next-greater-element-i/" },
      { title: "Valid Parenthesis", difficulty: "EASY", link: "https://leetcode.com/problems/valid-parentheses/" },
      { title: "1st Non Repeating in Stream", difficulty: "EASY", link: "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1" },
      { title: "Reverse 1st K Elements of Queue", difficulty: "EASY", link: "https://www.geeksforgeeks.org/reversing-first-k-elements-queue/" }
    ]
  },
  {
    day:"Day 14 : Stacks & Queues II",
    questions: [
      { title: "Time needed to Buy Tickets", link: "https://leetcode.com/problems/time-needed-to-buy-tickets/", difficulty: "EASY" },
      { title: "Next Smaller Element", link: "https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1", difficulty: "MEDIUM" },
      { title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", difficulty: "MEDIUM" },
      { title: "Celebrity Problem", link: "https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1", difficulty: "MEDIUM" },
      { title: "Get Min Element from Stack", link: "https://practice.geeksforgeeks.org/problems/special-stack/1", difficulty: "MEDIUM" }
    ]
  },
  {
    day:"Day 15 : Stacks & Queues III",
    questions: [
      { title: "Sort a Stack", link: "https://practice.geeksforgeeks.org/problems/sort-a-stack/1", difficulty: "MEDIUM" },
      { title: "Circular Tour / Gas Station", link: "https://leetcode.com/problems/gas-station/", difficulty: "MEDIUM" },
      { title: "Rotten Oranges", link: "https://leetcode.com/problems/rotting-oranges/", difficulty: "MEDIUM" },
      { title: "Stock Span", link: "https://practice.geeksforgeeks.org/problems/stock-span-problem-1587115621/1", difficulty: "MEDIUM" },
      { title: "Max Area in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "HARD" }
    ]
  },
  {
    day:"Day 16 : Binary Trees I",
    questions: [
      { title: "Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "EASY" },
      { title: "Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/", difficulty: "EASY" },
      { title: "Postorder Traversal", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/", difficulty: "EASY" },
      { title: "Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "MEDIUM" },
      { title: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", difficulty: "EASY" },
      { title: "Minimum Distance between Nodes", link: "https://leetcode.com/problems/minimum-distance-between-bst-nodes/", difficulty: "EASY" }
    ]
  },
  {
    day:"Day 17 : Binary Trees II",
    questions: [
      { title: "Are 2 Trees Identical or Not", link: "https://leetcode.com/problems/same-tree/", difficulty: "EASY" },
      { title: "Morris Inorder Traversal", link: "https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/", difficulty: "EASY" },
      { title: "Diameter of a Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "EASY" },
      { title: "Is Tree Height Balanced", link: "https://leetcode.com/problems/balanced-binary-tree/", difficulty: "EASY" },
      { title: "Subtree of Another Tree", link: "https://leetcode.com/problems/subtree-of-another-tree/", difficulty: "EASY" },
      { title: "Check if BT Mirror of itself or not", link: "https://practice.geeksforgeeks.org/problems/mirror-tree/1", difficulty: "EASY" }
    ]
  },
  {
    day:"Day 18 : Binary Trees III",
    questions: [
      { title: "Top View of a Tree", link: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1", difficulty: "MEDIUM" },
      { title: "Bottom View of a Tree", link: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1", difficulty: "MEDIUM" },
      { title: "Kth Level of Tree", link: "https://www.geeksforgeeks.org/print-nodes-at-k-distance-from-root/", difficulty: "MEDIUM" },
      { title: "Lowest Common Ancestor (LCA)", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "MEDIUM" },
      { title: "Transform to Sum Tree", link: "https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1", difficulty: "MEDIUM" },
      { title: "Construct BT from Inorder & Preorder", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: "MEDIUM" }
    ]
  },
  {
    day: "Day 19 : Binary Trees IV",
    questions: [
      { title: "Construct BT from Inorder & Postorder", link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", difficulty: "MEDIUM" },
      { title: "Flatten BT to LL", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", difficulty: "MEDIUM" },
      { title: "Max Width of BT", link: "https://leetcode.com/problems/maximum-width-of-binary-tree/", difficulty: "MEDIUM" },
      { title: "Zig Zag Traversal of BT", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "MEDIUM" },
      { title: "Max Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "HARD" },
      { title: "Kth Ancestor", link: "https://practice.geeksforgeeks.org/problems/kth-ancestor-in-a-tree/1", difficulty: "HARD" }
    ]
  },
  {
    day: "Day 20 : BST I",
    questions: [
      { title: "Kth largest in BST", link: "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1", difficulty: "EASY" },
      { title: "Sorted Array to Balanced BST", link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", difficulty: "EASY" },
      { title: "Validate BST", link: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "MEDIUM" },
      { title: "Kth Smallest in BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", difficulty: "MEDIUM" },
      { title: "LCA in BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", difficulty: "MEDIUM" }
    ]
  },
  {
    day: "Day 21 : BST II",
    questions: [
      { title: "Populate Next Right Pointers", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", difficulty: "MEDIUM" },
      { title: "Recover BST", link: "https://leetcode.com/problems/recover-binary-search-tree/", difficulty: "MEDIUM" },
      { title: "Construct from Preorder", link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/", difficulty: "MEDIUM" },
      { title: "BST Iterator", link: "https://leetcode.com/problems/binary-search-tree-iterator/", difficulty: "MEDIUM" },
      { title: "Flatten BST to Sorted list", link: "https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/", difficulty: "MEDIUM" }
    ]
  },
  {
    day: "Day 22 : BST III",
    questions: [
      { title: "Serialize & Deserialize BST", link: "https://leetcode.com/problems/serialize-and-deserialize-bst/", difficulty: "HARD" },
      { title: "Merge 2 BSTs", link: "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/", difficulty: "HARD" },
      { title: "Inorder Successor", link: "https://leetcode.com/problems/inorder-successor-in-bst/", difficulty: "MEDIUM" },
      { title: "Inorder Predecessor", link: "https://www.geeksforgeeks.org/inorder-predecessor-successor-binary-search-tree/", difficulty: "MEDIUM" },
      { title: "Largest BST in BT", link: "https://practice.geeksforgeeks.org/problems/largest-bst/1", difficulty: "HARD" }
    ]
  },
  {
    day: "Day 23 : Heaps",
    questions: [
      { title: "Merge K Sorted Arrays", link: "https://www.geeksforgeeks.org/merge-k-sorted-arrays/", difficulty: "EASY" },
      { title: "K most Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "MEDIUM" },
      { title: "Heap Sort", link: "https://www.geeksforgeeks.org/heap-sort/", difficulty: "MEDIUM" },
      { title: "Kth Smallest Element", link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", difficulty: "MEDIUM" },
      { title: "Median from Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "HARD" },
      { title: "Smallest Range in K Sorted List", link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", difficulty: "HARD" }
    ]
  },
  {
    day: "Day 24 : Tries",
    questions: [
      { title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "EASY" },
      { title: "Word Break Problem", link: "https://leetcode.com/problems/word-break/", difficulty: "MEDIUM" },
      { title: "Implement a Phone Directory", link: "https://www.geeksforgeeks.org/phone-directory-using-trie/", difficulty: "MEDIUM" },
      { title: "Implement a Trie", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: "MEDIUM" },
      { title: "Longest String with All Prefix", link: "https://practice.geeksforgeeks.org/problems/longest-string-with-all-prefixes/1", difficulty: "MEDIUM" }
    ]
  },
  {
    day: "Day 25 : Graphs I",
    questions: [
      { title: "Number of Provinces", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-provinces/" },
      { title: "Find if Path Exists in Graph", difficulty: "Easy", link: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
      { title: "Number of Connected Components in an Undirected Graph", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" },
      { title: "Graph Valid Tree", difficulty: "Medium", link: "https://leetcode.com/problems/graph-valid-tree/" }
    ]
  },
  {
    day: "Day 26 : Graphs II",
    questions: [
      { title: "Detect Cycle in an Undirected Graph", difficulty: "Medium", link: "https://leetcode.com/problems/graph-valid-tree/" },
      { title: "Detect Cycle in a Directed Graph", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule/" },
      { title: "Course Schedule II", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule-ii/" },
      { title: "Is Graph Bipartite?", difficulty: "Medium", link: "https://leetcode.com/problems/is-graph-bipartite/" }
    ]
  },
  {
    day: "Day 27 : Graphs III",
    questions: [
      { title: "Rotting Oranges", difficulty: "Medium", link: "https://leetcode.com/problems/rotting-oranges/" },
      { title: "Shortest Path in Binary Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" },
      { title: "Network Delay Time", difficulty: "Medium", link: "https://leetcode.com/problems/network-delay-time/" },
      { title: "Path With Minimum Effort", difficulty: "Medium", link: "https://leetcode.com/problems/path-with-minimum-effort/" }
    ]
  },
  {
    day: "Day 28 : Graphs IV",
    questions: [
      { title: "Swim in Rising Water", difficulty: "Hard", link: "https://leetcode.com/problems/swim-in-rising-water/" },
      { title: "Cheapest Flights Within K Stops", difficulty: "Medium", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
      { title: "Find the City With the Smallest Number of Neighbors at a Threshold Distance", difficulty: "Medium", link: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" },
      { title: "Reconstruct Itinerary", difficulty: "Hard", link: "https://leetcode.com/problems/reconstruct-itinerary/" }
    ]
  },
  {
    day: "Day 29 : Graphs V",
    questions: [
      { title: "Alien Dictionary", difficulty: "Hard", link: "https://leetcode.com/problems/alien-dictionary/" },
      { title: "Word Ladder", difficulty: "Hard", link: "https://leetcode.com/problems/word-ladder/" },
      { title: "Word Ladder II", difficulty: "Hard", link: "https://leetcode.com/problems/word-ladder-ii/" },
      { title: "Minimum Height Trees", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-height-trees/" }
    ]
  },
  {
    day: "Day 30 : Dynamic Programming I",
    questions: [
      { title: "Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/climbing-stairs/" },
      { title: "House Robber", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber/" },
      { title: "House Robber II", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber-ii/" },
      { title: "Longest Palindromic Substring", difficulty: "Medium", link: "https://leetcode.com/problems/longest-palindromic-substring/" }
    ]
  },
  {
    day: "Day 31 : Dynamic Programming II",
    questions: [
      { title: "Partition Equal Subset Sum", difficulty: "Medium", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { title: "Coin Change", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change/" },
      { title: "Longest Increasing Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { title: "Maximum Product Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-product-subarray/" }
    ]
  },
  {
    day: "Day 32 : Dynamic Programming III",
    questions: [
      { title: "Word Break", difficulty: "Medium", link: "https://leetcode.com/problems/word-break/" },
      { title: "Decode Ways", difficulty: "Medium", link: "https://leetcode.com/problems/decode-ways/" },
      { title: "Unique Paths", difficulty: "Medium", link: "https://leetcode.com/problems/unique-paths/" },
      { title: "Interleaving String", difficulty: "Hard", link: "https://leetcode.com/problems/interleaving-string/" }
    ]
  },
  {
    day: "Day 33 : Dynamic Programming IV",
    questions: [
      { title: "Edit Distance", difficulty: "Hard", link: "https://leetcode.com/problems/edit-distance/" },
      { title: "Burst Balloons", difficulty: "Hard", link: "https://leetcode.com/problems/burst-balloons/" },
      { title: "Regular Expression Matching", difficulty: "Hard", link: "https://leetcode.com/problems/regular-expression-matching/" },
      { title: "Wildcard Matching", difficulty: "Hard", link: "https://leetcode.com/problems/wildcard-matching/" }
    ]
  },
  {
    day: "Day 34 : Miscellaneous",
    questions: [
      { title: "LRU Cache", difficulty: "Medium", link: "https://leetcode.com/problems/lru-cache/" },
      { title: "LFU Cache", difficulty: "Hard", link: "https://leetcode.com/problems/lfu-cache/" },
      { title: "Median of Two Sorted Arrays", difficulty: "Hard", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
      { title: "Data Stream as Disjoint Intervals", difficulty: "Hard", link: "https://leetcode.com/problems/data-stream-as-disjoint-intervals/" }
    ]
  }
];




const DsaSheetPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        py: 4,
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: "10000px",
          borderRadius: 4,
          p: { xs: 2, sm: 4, md: 6 },
          backgroundColor: "#ffffff",
        }}
      >
        {/* Back Button */}
        <Box display="flex" justifyContent="flex-start">
          <Button
            onClick={() => navigate(-1)}
            startIcon={<ArrowBackIosNewIcon />}
            sx={{
              mb: 3,
              backgroundColor: "#fff",
              color: "#333",
              border: "1px solid #ddd",
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              px: 2.5,
              py: 1,
              boxShadow: 1,
              "&:hover": {
                backgroundColor: "#f0f0f0",
                boxShadow: 2,
              },
            }}
          >
            Back
          </Button>
        </Box>

        {/* Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            centered
            sx={{
              "& .MuiTab-root": {
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                px: 3,
              },
              "& .MuiTabs-indicator": {
                backgroundColor: theme.palette.primary.main,
                height: 3,
              },
            }}
          >
            <Tab label="DSA 34-Day Sheet" />
            <Tab label="Practice Sheet" />
          </Tabs>
        </Box>

        {/* Tab Panels */}
        {tabIndex === 0 && (
          <>
            {dsaTopics.map((topic, index) => (
              <Accordion
                key={index}
                defaultExpanded={index === 0}
                sx={{
                  borderRadius: 4,
                  mb: 3,
                  boxShadow: 2,
                  backgroundColor: "#ffffff",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{ px: 4, py: 2 }}
                >
                  <Typography variant="subtitle1" fontWeight={700} color="#333">
                    {topic.day}
                  </Typography>
                </AccordionSummary>

                {topic.questions && (
                  <AccordionDetails sx={{ px: 4, pb: 3 }}>
                    <List disablePadding>
                      {topic.questions.map((q, i) => (
                        <Card
                          key={i}
                          variant="outlined"
                          sx={{
                            mb: 2,
                            borderRadius: 4,
                            boxShadow: 1,
                            transition: "0.3s",
                            "&:hover": {
                              transform: "translateY(-2px)",
                              boxShadow: 4,
                            },
                          }}
                        >
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              flexWrap: "wrap",
                              gap: 2,
                            }}
                          >
                            <Box>
                              <Typography variant="body1" fontWeight={600} color="#222">
                                {q.title}
                              </Typography>
                              <Chip
                                label={q.difficulty}
                                size="small"
                                sx={{
                                  mt: 0.5,
                                  backgroundColor:
                                    q.difficulty === "EASY"
                                      ? theme.palette.success.light
                                      : q.difficulty === "MEDIUM"
                                      ? theme.palette.warning.light
                                      : theme.palette.error.light,
                                  color:
                                    q.difficulty === "EASY"
                                      ? theme.palette.success.main
                                      : q.difficulty === "MEDIUM"
                                      ? theme.palette.warning.main
                                      : theme.palette.error.main,
                                  fontWeight: 600,
                                }}
                              />
                            </Box>

                            <Tooltip title="Open Question in LeetCode" arrow>
                              <Link
                                href={q.link}
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                  color: "#444",
                                  fontWeight: 600,
                                  "&:hover": {
                                    textDecoration: "underline",
                                  },
                                }}
                              >
                                Go to Qs <ArrowForwardIcon fontSize="small" />
                              </Link>
                            </Tooltip>
                          </CardContent>
                        </Card>
                      ))}
                    </List>
                  </AccordionDetails>
                )}
              </Accordion>
            ))}
          </>
        )}

        {tabIndex === 1 && (
          <>
            {isMobile ? (
              <Box px={0} py={2}>
                <Typography variant="h6" fontWeight={700}>
                  Start Practice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dive into hand-picked practice questions
                </Typography>
                <Button
                  onClick={() => navigate("/dtopic")}
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Go to Practice
                </Button>
              </Box>
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="50vh"
                px={2}
              >
                <Card
                  onClick={() => navigate("/dtopic")}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    boxShadow: 3,
                    cursor: "pointer",
                    transition: "0.3s",
                    width: 400,
                    "&:hover": {
                      boxShadow: 6,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Start Practice
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dive into hand-picked practice questions
                  </Typography>
                </Card>
              </Box>
            )}
          </>
        )}

        {/* Footer */}
        <Divider sx={{ mt: 6, mb: 2 }} />
        <Typography variant="body2" textAlign="center" color="text.secondary">
          🚀 Keep learning, keep growing. DSA mastery is a journey!
        </Typography>
      </Paper>
    </Box>
  );
};

export default DsaSheetPage;