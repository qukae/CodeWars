const input = [
  {
    type: 'rotten apples',
    material: 'organic'
  },
  {
    type: 'out of date yogurt',
    material: 'organic',
    secondMaterial: 'plastic'
  },
  {
    type: 'wine bottle',
    material: 'glass',
    secondMaterial: 'paper'
  },
  {
    type: 'amazon box',
    material: 'paper'
  },
  {
    type: 'beer bottle',
    material: 'glass',
    secondMaterial: 'paper'
  }
  ]

  // const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];

  // function recycle(objects) {
  //   return recyclerMaterials.map(m => objects.filter(o => o.material == m || o.secondMaterial == m).map(o => o.type));
  // }

  // function recycle(array) {
  //   let paper = [],
  //       glass = [],
  //       organic = [],
  //       plastic = []

  //   for (let { type, material, secondMaterial } of array) {
  //     if (material === 'paper' || secondMaterial === 'paper') {
  //       paper.push(type)
  //     }
  //     if (material === 'glass' || secondMaterial === 'glass') {
  //       glass.push(type)
  //     }
  //     if (material === 'organic' || secondMaterial === 'organic') {
  //       organic.push(type)
  //     }
  //     if (material === 'plastic' || secondMaterial === 'plastic') {
  //       plastic.push(type)
  //     }
  //   }

  //   return [paper, glass, organic, plastic]
  // }



  function recycler(arr){
    const paper = []
    const glass = []
    const organic = []
    const plastic = []

    const res = [paper, glass, organic, plastic]

    arr.map((item) => {
      switch (item.material) {
        case 'paper':
          paper.push(item.type);
          break;
        case 'glass':
          glass.push(item.type);
          break;
        case 'organic':
          organic.push(item.type);
          break;
        case 'plastic':
          plastic.push(item.type);
          break;
      }
      switch (item.secondMaterial) {
        case 'paper':
          paper.push(item.type);
          break;
        case 'glass':
          glass.push(item.type);
          break;
        case 'organic':
          organic.push(item.type);
          break;
        case 'plastic':
          plastic.push(item.type);
          break;
      }
    })

    return res
  }


  recycler(input)
