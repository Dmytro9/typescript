enum Membership {
  Simple,
  Standart,
  Premium
}

export enum TaskStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE"
}

const membership = Membership.Standart;
console.log(membership);
const membershipreverse = Membership[2];
console.log(membershipreverse);

console.log("TaskStatus ", TaskStatus.DONE);
