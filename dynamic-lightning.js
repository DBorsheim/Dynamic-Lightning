t = effect("Calculations")("Second Layer");

p1 = thisComp.layer("Control").effect("Dynamic Lightning")("Top Left");
p2 = thisComp.layer("Control").effect("Dynamic Lightning")("Bottom Right");

w = p2[0]-p1[0];
h = p2[1]-p1[1];

wOffset = p1[0];
hOffset = p1[1];

x = 0;
y = 0;

s = effect("Search Iterations")("Slider");

ind = index;
seed = thisComp.layer("Control").effect("Dynamic Lightning")("Seed");

seedRandom(ind + seed, false);

// Loop 10 times and exit if a pixel with a brightness above 0.5 is found
for (i = 0; i < s; i++) {
    // Randomly generate a position within the comp
    x = Math.random() * w + wOffset;
    y = Math.random() * h + hOffset;

    // Search for a pixel at the randomly generated position
    p = t.sampleImage([x, y], [1, 1]);

    // Convert the rgba to hsla
    hsl = rgbToHsl(p);

    if (hsl[2] > 0.5) {
        // Exit the loop if the brightness is above 0.5
        break;
    }

    x = 0;
    y = 0;
    
}

[x, y]
