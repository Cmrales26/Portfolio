class ShowMoreHandler {
  constructor(objectLength, currentLength, passLength) {
    this.objectLength = objectLength;
    this.currentLength = currentLength;
    this.passLength = passLength;
  }

  handleShowMore() {
    return Math.min(this.currentLength + this.passLength, this.objectLength);
  }
}

export default ShowMoreHandler;
