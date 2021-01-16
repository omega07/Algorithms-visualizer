# Convex-Hull-Visualizer
https://omega07.github.io/Convex-Hull-Visualizer/<br>
This is an implementation of the gift wrapping algorithm.<br>
Given n points in 2D space it creates a convex hull of these points using a brute force technique
by checking all the points.<br>
Idea is to pick a point which will definetely lie on the hull i.e leftmost, rightmost, topmost etc.<br>
and begin the brute force from that point fixing a nearby point as the next vertex of the hull
and checking if we get a better answer.
