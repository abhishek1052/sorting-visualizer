function insertionSort(changearr, arr, changedis) {
    const finalarr = [];
    const showarr = [];
    for (var k = 0; k < arr.length; k++) {
        showarr.push(arr[k]);
    }
    let i, key, j;
    var n = showarr.length;
    var x = [];
    for (var f = 0; f < showarr.length; f++) {
        x.push(showarr[f]);
    }
    finalarr.push(x);
    for (i = 1; i < n; i++) {
        key = showarr[i];
        j = i - 1;
        while (j >= 0 && showarr[j] > key) {
            x = [];
            for (f = 0; f < showarr.length; f++) {
                if (f === j + 1 || f === j) {
                    x.push(showarr[f] * 10000);
                }
                else {
                    x.push(showarr[f]);
                }
            }
            finalarr.push(x);
            var temp = showarr[j + 1];
            showarr[j + 1] = showarr[j];
            showarr[j] = temp;
            x = [];
            for (f = 0; f < showarr.length; f++) {
                if (f === j + 1 || f === j) {
                    x.push(showarr[f] * 10000);
                }
                else {
                    x.push(showarr[f]);
                }
            }

            finalarr.push(x);
            j = j - 1;
        }
        x = [];
        for (var z = 0; z < showarr.length; z++) {
            if (z === j + 1 || z === i) {
                x.push(showarr[z] * 10000);
            }
            else {
                x.push(showarr[z]);
            }
        }
        finalarr.push(x);
        showarr[j + 1] = key;
    }
    finalarr.push(showarr);
    var count = finalarr.length;
    var ini = 0;
    var a = setInterval(set, 200);
    function set() {
        changearr(finalarr[ini]);
        ini++;
        count--;
        if (count === 0) {
            clearInterval(a);
            changedis(false);
        }
    }
}
function BubbleSort(changearr, arr, changedis) {
    const finalarr = [];
    const showarr = [];
    for (var k = 0; k < arr.length; k++) {
        showarr.push(arr[k]);
    }
    var x = [];
    for (var f = 0; f < showarr.length; f++) {
        x.push(showarr[f]);
    }
    finalarr.push(x);
    for (var i = 0; i < showarr.length; i++) {
        for (var j = 0; j < (showarr.length - i - 1); j++) {
            if (showarr[j] >= showarr[j + 1]) {
                x = [];
                for (f = 0; f < showarr.length; f++) {
                    if (f === j + 1 || f === j) {
                        x.push(showarr[f] * 10000);
                    }
                    else {
                        x.push(showarr[f]);
                    }
                }
                finalarr.push(x);
                [showarr[j],showarr[j+1]]=[showarr[j+1],showarr[j]];
                x = [];
                for (f = 0; f < showarr.length; f++) {
                    if (f === j + 1 || f === j) {
                        x.push(showarr[f] * 10000);
                    }
                    else {
                        x.push(showarr[f]);
                    }
                }
                finalarr.push(x);
            }
            else {
                x = [];
                for (f = 0; f < showarr.length; f++) {
                    if (f === j + 1 || f === j) {
                        x.push(showarr[f] * 10000);
                    }
                    else {
                        x.push(showarr[f]);
                    }
                }

                finalarr.push(x);
            }
        }
    }
    finalarr.push(showarr);
    var count = finalarr.length;
    var ini = 0;
    var a = setInterval(set, 200);
    function set() {
        changearr(finalarr[ini]);
        ini++;
        count--;
        if (count === 0) {
            clearInterval(a);
            changedis(false);
        }
    }
}
function merge(arr, l, m, r, finalarr) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    var i = 0;
    var j = 0;
    var k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            var x = [];
            for (var f = 0; f < arr.length; f++) {
                if (f == m + 1 + j || f == l + i) {
                    x.push(arr[f] * 10000);
                }
                else {
                    x.push(arr[f]);
                }
            }
            finalarr.push(x);
            arr[k] = L[i];
            var x = [];
            for (var f = 0; f < arr.length; f++) {
                if (f == k || f == l + i) {
                    x.push(arr[f] * 10000);
                }
                else {
                    x.push(arr[f]);
                }
            }
            finalarr.push(x);
            i++;
        }
        else {
            var x = [];
            for (var f = 0; f < arr.length; f++) {
                if (f === m + 1 + j || f === l + i) {
                    x.push(arr[f] * 10000);
                }
                else {
                    x.push(arr[f]);
                }
            }
            finalarr.push(x);
            arr[k] = R[j];
            var x = [];
            for (var f = 0; f < arr.length; f++) {
                if (f === m + 1 + j || f === k) {
                    x.push(arr[f] * 10000);
                }
                else {
                    x.push(arr[f]);
                }
            }
            finalarr.push(x);

            j++;
        }
        k++;
    }
    while (i < n1) {
        var x = [];
        for (var f = 0; f < arr.length; f++) {
            if (f == k || f == l + i) {
                x.push(arr[f] * 10000);
            }
            else {
                x.push(arr[f]);
            }
        }
        finalarr.push(x);
        arr[k] = L[i];
        var x = [];
        for (var f = 0; f < arr.length; f++) {
            if (f == k || f == l + i) {
                x.push(arr[f] * 10000);
            }
            else {
                x.push(arr[f]);
            }
        }
        finalarr.push(x);
        i++;
        k++;
    }
    while (j < n2) {
        var x = [];
        for (var f = 0; f < arr.length; f++) {
            if (f === m + 1 + j || f === k) {
                x.push(arr[f] * 10000);
            }
            else {
                x.push(arr[f]);
            }
        }
        finalarr.push(x);
        arr[k] = R[j];
        var x = [];
        for (var f = 0; f < arr.length; f++) {
            if (f === m + 1 + j || f === k) {
                x.push(arr[f] * 10000);
            }
            else {
                x.push(arr[f]);
            }
        }
        finalarr.push(x);
        j++;
        k++;
    }
}
function mergeSort(arr, l, r, finalarr) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m, finalarr);
    mergeSort(arr, m + 1, r, finalarr);
    merge(arr, l, m, r, finalarr);
}
function ms(changearr, arr, changedis) {
    var array = []
    var finalarr = []
    for (var i = 0; i < arr.length; i++) {
        array.push(arr[i])
    }
    mergeSort(array, 0, arr.length - 1, finalarr);
    finalarr.push(array);
    var count = finalarr.length;
    var ini = 0;
    var a = setInterval(set, 100);
    function set() {
        changearr(finalarr[ini]);
        ini++;
        count--;
        if (count === 0) {
            clearInterval(a);
            changedis(false);
        }
    }
}
function selectionSort(changearr, arr, changedis) {
    var array = []
    var finalarr = []
    for (var i = 0; i < arr.length; i++) {
        array.push(arr[i])
    }
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                var x = [];
                for (var f = 0; f < array.length; f++) {
                    if (f ===j || f===i) {
                        x.push(array[f] * 10000);
                    }
                    else {
                        x.push(array[f]);
                    }
                }
                finalarr.push(x);
                [array[j], array[i]] = [array[i], array[j]];
                var x = [];
                for (var f = 0; f < array.length; f++) {
                    if (f ===j || f===i) {
                        x.push(array[f] * 10000);
                    }
                    else {
                        x.push(array[f]);
                    }
                }
                finalarr.push(x);
            }
            else{
                var x = [];
                for (var f = 0; f < arr.length; f++) {
                    if (f ===j || f===i) {
                        x.push(array[f] * 10000);
                    }
                    else {
                        x.push(array[f]);
                    }
                }
                finalarr.push(x);
            }
        }
    }
    finalarr.push(array);
    var count = finalarr.length;
    var ini = 0;
    var a = setInterval(set, 200);
    function set() {
        changearr(finalarr[ini]);
        ini++;
        count--;
        if (count === 0) {
            clearInterval(a);
            changedis(false);
        }
    }
}
export { insertionSort, BubbleSort, ms,selectionSort };