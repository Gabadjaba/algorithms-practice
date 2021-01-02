// replacing {{ variables }} in template

const testData = {
  className: 'testClass',
  chat: {
    id: '3'
  },
  handleClick: {
    test: () => console.log(123)
  },
  item: 'testItem'
}

const testTemplate = `
<ul class="{{ className }}" data-chat-id="{{chat.id}}" onClick="{{handleClick.test}}">
  {{ item }}
  {{ notExist.item }}
</ul>
`;

function buildTemplate(template, variables = {}, nullableVariables = null) {
  const variablesInTemplateRegexp = new RegExp('{{[a-z0-9 \.]+}}', 'igm');
  const variableNameRegexp = new RegExp('[a-z0-9\.]+', 'igm');



  return template.replace(variablesInTemplateRegexp, (matchedString) => {
    let variableName = matchedString.match(variableNameRegexp);
    let variable;

    if (variableName) {
      variableName = variableName[0].split('.');
      variable = variableName.reduce((object, value) => object ? object[value] : null, variables);
    }

    if (variable instanceof Function) {
      const window = {};  // if launched outside the browser

      variableName.reduce((object, value, index) => {
        if (object[value]) {
          return object[value];
        } else if (index === variableName.length) {
          object[value] = variable;
        } else {
          object[value] = {};
          return object[value];
        }
      }, window);

      return `${variableName.reduce((str, value) => `${str}.${value}`, 'window')}()`;
    }

    return variable ?? nullableVariables;
  })
}

console.log(buildTemplate(testTemplate, testData));