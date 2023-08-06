module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component for Storybook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where would you like to create this component?',
        default: 'src/components',
      },
    ],
    actions: (answers) => {
      const componentPath = `${answers.path}/${answers.name}`;
      return [
        {
          type: 'add',
          path: `${componentPath}/index.tsx`,
          templateFile: 'plop-template/component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${componentPath}/{{name}}.stories.tsx`,
          templateFile: 'plop-template/component.stories.tsx.hbs',
          data: {
            absolutePathToComponent: `${answers.path}/${answers.name}`,
          },
        },
      ];
    },
  });
};
