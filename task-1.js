// написать код, который будет преобразовывать XML в JS-объект
// и выводить его в консоль.

const parser = new DOMParser();

const xmlString = `
<list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

let listStudents = [];
for (let i = 0; i < 2; i++) {
  const nameNode = studentNode[i].querySelector("name");
  const firstNode = nameNode.querySelector("first");
  const secondNode = nameNode.querySelector("second");
  const agedNode = studentNode[i].querySelector("age");
  const profdNode = studentNode[i].querySelector("prof");
  const longAttr = nameNode.getAttribute("lang");

  const result = {
    name: nameNode.textContent,
    age: Number(agedNode.textContent),
    prof: profdNode.textContent,
    lang: longAttr,
  };

  listStudents.push(result);
  console.log("list", listStudents);
}
