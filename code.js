function sum(a) {
    var sum = a[0];
    for(var i = 1; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
