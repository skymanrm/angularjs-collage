// https://github.com/crispymtn/linear-partition/blob/master/linear_partition.coffee

var linear_partition;

linear_partition = (function(_this) {
  return function(seq, k) {
    var ans, i, j, l, m, n, p, q, r, ref, ref1, ref2, ref3, solution, table, x, y;
    n = seq.length;
    if (k <= 0) {
      return [];
    }
    if (k > n) {
      return seq.map(function(x) {
        return [x];
      });
    }
    table = (function() {
      var l, ref, results;
      results = [];
      for (y = l = 0, ref = n; 0 <= ref ? l < ref : l > ref; y = 0 <= ref ? ++l : --l) {
        results.push((function() {
          var p, ref1, results1;
          results1 = [];
          for (x = p = 0, ref1 = k; 0 <= ref1 ? p < ref1 : p > ref1; x = 0 <= ref1 ? ++p : --p) {
            results1.push(0);
          }
          return results1;
        })());
      }
      return results;
    })();
    solution = (function() {
      var l, ref, results;
      results = [];
      for (y = l = 0, ref = n - 1; 0 <= ref ? l < ref : l > ref; y = 0 <= ref ? ++l : --l) {
        results.push((function() {
          var p, ref1, results1;
          results1 = [];
          for (x = p = 0, ref1 = k - 1; 0 <= ref1 ? p < ref1 : p > ref1; x = 0 <= ref1 ? ++p : --p) {
            results1.push(0);
          }
          return results1;
        })());
      }
      return results;
    })();
    for (i = l = 0, ref = n; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
      table[i][0] = seq[i] + (i ? table[i - 1][0] : 0);
    }
    for (j = p = 0, ref1 = k; 0 <= ref1 ? p < ref1 : p > ref1; j = 0 <= ref1 ? ++p : --p) {
      table[0][j] = seq[0];
    }
    for (i = q = 1, ref2 = n; 1 <= ref2 ? q < ref2 : q > ref2; i = 1 <= ref2 ? ++q : --q) {
      for (j = r = 1, ref3 = k; 1 <= ref3 ? r < ref3 : r > ref3; j = 1 <= ref3 ? ++r : --r) {
        m = _.min((function() {
          var ref4, results, s;
          results = [];
          for (x = s = 0, ref4 = i; 0 <= ref4 ? s < ref4 : s > ref4; x = 0 <= ref4 ? ++s : --s) {
            results.push([_.max([table[x][j - 1], table[i][0] - table[x][0]]), x]);
          }
          return results;
        })(), function(o) {
          return o[0];
        });
        table[i][j] = m[0];
        solution[i - 1][j - 1] = m[1];
      }
    }
    n = n - 1;
    k = k - 2;
    ans = [];
    while (k >= 0) {
      ans = [
        (function() {
          var ref4, ref5, results, s;
          results = [];
          for (i = s = ref4 = solution[n - 1][k] + 1, ref5 = n + 1; ref4 <= ref5 ? s < ref5 : s > ref5; i = ref4 <= ref5 ? ++s : --s) {
            results.push(seq[i]);
          }
          return results;
        })()
      ].concat(ans);
      n = solution[n - 1][k];
      k = k - 1;
    }
    return [
      (function() {
        var ref4, results, s;
        results = [];
        for (i = s = 0, ref4 = n + 1; 0 <= ref4 ? s < ref4 : s > ref4; i = 0 <= ref4 ? ++s : --s) {
          results.push(seq[i]);
        }
        return results;
      })()
    ].concat(ans);
  };
})(this);