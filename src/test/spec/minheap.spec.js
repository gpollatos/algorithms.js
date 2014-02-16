define(["modules/minheap"], function(MinHeap) {

  console.log("yes");

  describe("A simple Binary MinHeap", function() {

    it("should initialize as an empty heap", function() {
      var Q = new MinHeap(function (elem) {
        return elem.key;
      }, function(elem) {
        return elem.id;
      });
      expect(Q.content.length).toBe(0);
    });

  });

});