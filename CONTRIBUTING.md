<div align="center">
  <h1>Contribution Guidelines</h1>
First and foremost, thank you! Your time is valuable and your contributions mean a lot.
</div>


## Important Notice

By contributing to this project:

- You agree that you have authored 100% of the content.
- You agree that you have the necessary rights to the content.
- You agree that you have received the necessary permissions from your employer to make the contributions (If applicable).
- You agree that the content you contribute may be provided under the Projects license.
- You agree that you read the [code of conduct](https://github.com/umut-sahin/javascript-examples/blob/master/CODE_OF_CONDUCT.md) and to act accordingly.


## How Can You Contribute?

There are several ways to contribute to this repository:

- Submitting feature requests
- Reporting issues
- Fixing issues
- Improving existing examples
- Adding new examples


## Submitting Feature Requests

You can submit feature requests to improve existing examples or to add new examples.

Before submitting feature requests make sure that you are using the latest version of the repository as the feature you wish to have could be already added. If you are using the latest version, please use the Github search to check if a similar feature request is already present. If you've found a feature request that is:

- __Open:__ Drop a comment to describe the additional things you wish.
- __Missing:__ Open a new feature request.

As a minimum, please report the following in your requests:

- Describe the things you wish.
- Show an already implemented example of the feature (If applicable) (Could also be in another language).
- Challenges in implementing such a feature.
- Whether you want to implement the feature yourself or not.
- If you want, you can also provide the reason you want this feature.


## Reporting Issues

Before creating an issue make sure that you are using the latest version of the repository as the issue you wish to report could be already resolved. If you are using the latest version, please use the Github search to check if the issue is already known. If you've found an issue that is:

- __Closed:__ Check if the issue provides a solution for your issue. If it's
  already fixed using a commit it could be that there has been a regression in
  the code. In this case, it's best to open a new issue. For all other cases, it
  might make more sense to just add a comment to the closed issue explaining that
  you're still affected by this.
- __Open:__ Try to provide more details about the issue. If you can reproduce the
  issue in a different way than the one used by the original author, please add
  this. The more ways there is to reproduce the bug, the more are the chances to
  get it fixed quickly.
- __Missing:__ Open a new issue. While doing so, to save everyone time and make it much more likely for your issue to be understood, worked on and resolved quickly, it would help if you're mindful of [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) when pressing the "Submit new issue" button.

As a minimum, please report the following in your issues:

- Operating system you are using.
- Version of Node.js you are using.
- Version of the repository you are using.
- Name of the example that you experienced the issue.
- What you expected to happen?
- What actually happened?
- Steps to reproduce (If applicable).


## Development Workflow

For all the other ways of contributing, you need to fork the repository and install dependencies.

```
$ git clone https://github.com/umut-sahin/javascript-examples.git
$ cd javascript-examples
$ npm install
$ git checkout development
```

Now you are ready to make changes.

After you are happy with your changes you need to commit using [commitizen](https://github.com/commitizen/) (Please answer the questions appropriately). You can do this with the following command.

```
$ npm run commit
```

This command might fail if the changes you make do not match with the code style of the project.

Commit as much as you like. After you are confident with your work, push your changes to your fork with the following command.

```
$ git push origin development
```

Then, open a __descriptive__ pull request to original repositories __development__ branch (Pull requests to master will be closed).

After that, the changes you made will be reviewed and given feedback. Once everybody agrees that the code is ready to be merged to master, a maintainer will make necessary changes and merge the development branch with master.


## Notes

### General

- [Make sure your fork is up to date before you start committing](https://help.github.com/articles/syncing-a-fork/)

### Adding new examples

- The easiest way to add a new example is to copy __write-to-console__ directory and rename it to the example you want. Then, add a new npm script named after the folder you just created. You are now good to go. Make necessary changes to the example. Upon finishing writing code, head to README in new examples directory and update it appropriately.
