function quicksort(arr) {

    // Return array if it is empty 
    if (arr.length <= 1) {
        return arr
    }
    
    let stack = [];
    stack.push(0);
    stack.push(arr.length - 1);

    while (stack.length > 0) {
        let high = stack.pop();
        let low = stack.pop();

        let pivot = arr[high];
        let i = low - 1;

        // Somewhat of partitioning logic in this function 
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap elements
            }
        }

        // Pivot will be moved into correct position
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        let pivotIndex = i + 1;

        // Push the left subarray onto the stack
        if (pivotIndex - 1 > low) {
            stack.push(low);
            stack.push(pivotIndex - 1);
        }

        // Push the right subarray onto the stack
        if (pivotIndex + 1 < high) {
            stack.push(pivotIndex + 1);
            stack.push(high);
        }
    }

    return arr;
}
