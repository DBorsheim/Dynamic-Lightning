# Dynamic-Lightning
Expression used with Advanced Lightning in After Effects to create lightning strikes on opaque pixels.

## TODO
Create a reference lightning animation that has all the values needed to create a lightning bolt.

Then each bolt looks for a place to strike.
  - This could reference a mask to limit the area of the screen.
  - Basing off a conductivity setting would be how often it strikes.

When it strikes, it determines a life span.
  - This could be based off a life span setting which could have a random range.
  
Using the life span, it determines how many frames it will be active.

Over the life span, it will could move the origin and the end point an amount based off a random range.
  - Speed: How fast it moves
  - Direction: What angle it moves in
  - Direction Spread: How much the angle can vary (0 = straight, 180 = random)
  - Maintain Alpha: If true, the origin and end point will continue to look for a new location on pixel values that are not transparent
  - Maintain Mask: If true, the origin and end point will continue to look for a new location within the mask
  
Extra Settings:
  - Origin and Endpoint:
    - Search Location: Alpha, Black, Random
    - Search Location Invert: If true, it will search for the opposite of the search location
    - Search Location Mask: If true, it will search for the search location within the mask
    - Search Location Mask Invert: If true, it will search for the opposite of the search location within the mask
