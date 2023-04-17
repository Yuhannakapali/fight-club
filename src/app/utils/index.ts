import Player from "../base/player";

export const detectedRectangleCollision = (rect1: Player, rect2: Player): Boolean => {
  return (
    rect1.getAttackBox.position.x + rect1.getAttackBox.width >=
    rect2.position.x &&
    rect1.getAttackBox.position.x <=
    rect2.position.x + rect2.width &&
    rect1.getAttackBox.position.y + rect1.getAttackBox.height >=
    rect2.position.y &&
    rect1.getAttackBox.position.y <= rect2.position.y + rect2.height
  )
}