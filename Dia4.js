function fitsInOneBox(boxes){
    let biggestBox = {l: 0, w: 0, h: 0};
    const boxesSorted = boxes.sort((current, previous) => current.l - previous.l)
    .every(box => {
      const {l, w, h} = box;
      if(l > biggestBox.l && w > biggestBox.w && h > biggestBox.h){
        biggestBox = box;
        return true;
      }
    });
    
    return boxesSorted
  }