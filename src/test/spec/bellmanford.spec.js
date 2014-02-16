define(["modules/bellmanford"], function (BellmanFord) {

  describe("Bellman-Ford Single-Source Shortest Paths", function () {

    var graph = {};
    graph.V = [
      {id: "a", key: Infinity},
      {id: "b", key: Infinity},
      {id: "c", key: Infinity},
      {id: "d", key: Infinity},
      {id: "e", key: Infinity},
      {id: "f", key: Infinity},
      {id: "g", key: Infinity},
      {id: "h", key: Infinity}
    ];
    graph.E = [
      {  from: graph.V[0], to: graph.V[1], w: 15 },
      {  from: graph.V[0], to: graph.V[2], w: 11 },
      {  from: graph.V[0], to: graph.V[3], w: 5  },
      {  from: graph.V[1], to: graph.V[2], w: 2  },
      {  from: graph.V[1], to: graph.V[5], w: 4  },
      {  from: graph.V[1], to: graph.V[6], w: 6  },
      {  from: graph.V[2], to: graph.V[3], w: 4  },
      {  from: graph.V[2], to: graph.V[4], w: 10 },
      {  from: graph.V[2], to: graph.V[5], w: 12 },
      {  from: graph.V[3], to: graph.V[4], w: 18 },
      {  from: graph.V[4], to: graph.V[5], w: 3  },
      {  from: graph.V[4], to: graph.V[7], w: 5  },
      {  from: graph.V[5], to: graph.V[6], w: 8  },
      {  from: graph.V[5], to: graph.V[7], w: 16 },
      {  from: graph.V[6], to: graph.V[7], w: 7  },

      {  from: graph.V[1], to: graph.V[0], w: 15 },
      {  from: graph.V[2], to: graph.V[0], w: 11 },
      {  from: graph.V[3], to: graph.V[0], w: 5  },
      {  from: graph.V[2], to: graph.V[1], w: 2  },
      {  from: graph.V[5], to: graph.V[1], w: 4  },
      {  from: graph.V[6], to: graph.V[1], w: 6  },
      {  from: graph.V[3], to: graph.V[2], w: 4  },
      {  from: graph.V[4], to: graph.V[2], w: 10 },
      {  from: graph.V[5], to: graph.V[2], w: 12 },
      {  from: graph.V[4], to: graph.V[3], w: 18 },
      {  from: graph.V[5], to: graph.V[4], w: 3  },
      {  from: graph.V[7], to: graph.V[4], w: 5  },
      {  from: graph.V[6], to: graph.V[5], w: 8  },
      {  from: graph.V[7], to: graph.V[5], w: 16 },
      {  from: graph.V[7], to: graph.V[6], w: 7  }
    ];

    graph.D = {a: 0,
      b: 11,
      c: 9,
      d: 5,
      e: 18,
      f: 15,
      g: 17,
      h: 23};


    it("should find the correct shortest path distances and parents", function () {
      graph.P = {
        a: null,
        b: "c",
        c: "d",
        d: "a",
        e: "f",
        f: "b",
        g: "b",
        h: "e"
      };
      var result = BellmanFord.run(graph, graph.V[0]);
      expect(result.distances).toEqual(graph.D);
      expect(result.parents).toEqual(graph.P);
      console.log(result.parents);
    });

  });

});