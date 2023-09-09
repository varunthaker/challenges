export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age > 30);
}

export function getPeopleNamesOlderThan(people, age) {}

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, givenId) {
  return people.find((person) => person.id === givenId);
}

export function isAnyoneOlderThan(people, givenAge) {
  return people.some((person) => person.age > givenAge);
}

export function getFullNamesSortedByAge(people) {
  const sortedArray = people
    .slice()
    .sort((name1, name2) => name1.age - name2.age);

  return sortedArray.map((name) => `${name.firstName} ${name.lastName}`);
}
