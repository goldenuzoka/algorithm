set1 = [3, 1, 7, 9]
set2 = [2, 4, 1, 9, 3]

combined_list = list(set(set1 + set2))


result = sum(combined_list)

print(result)



// Procedure to calculate the dot product of two vectors
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

// Algorithm to determine if n pairs of vectors are orthogonal
function areVectorsOrthogonal(n, vectorPairs) {
    for (let i = 0; i < n; i++) {
        const v1 = vectorPairs[i][0];
        const v2 = vectorPairs[i][1];
        const ps = dot_product(v1, v2);
        
        if (ps === 0) {
            console.log("Vectors v1 and v2 are orthogonal");
        } else {
            console.log("Vectors v1 and v2 are not orthogonal");
        }
    }
}

// Example usage:
const n = 3; // Number of vector pairs
const vectorPairs = [
    [[3, 1, 2], [2, -3, 1]],
    [[1, 0, 0], [0, 1, 0]],
    [[1, 2, 3], [-3, -2, -1]]
];

areVectorsOrthogonal(n, vectorPairs);

// Function to calculate the dot product of two vectors
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

// Algorithm to determine if n pairs of vectors are orthogonal
function areVectorsOrthogonal(n, vectorPairs) {
    for (let i = 0; i < n; i++) {
        const v1 = vectorPairs[i][0];
        const v2 = vectorPairs[i][1];
        const ps = dot_product(v1, v2);
        
        if (ps === 0) {
            console.log("Vectors v1 and v2 are orthogonal");
        } else {
            console.log("Vectors v1 and v2 are not orthogonal");
        }
    }
}

// Example usage:
const n = 3; 
const vectorPairs = [
    [[3, 1, 2], [2, -3, 1]],
    [[1, 0, 0], [0, 1, 0]],
    [[1, 2, 3], [-3, -2, -1]]
];

areVectorsOrthogonal(n, vectorPairs);