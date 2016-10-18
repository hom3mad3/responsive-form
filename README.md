### Yo!
this app was scaffolded using yeoman (pardon the pun in the title) and other cool things for automation like gulp (browser refresh, building dists, easy install of dependencies) and bower.

**Simplicity**

i wondered if i should use a framework for the job. it turns out, for building this widget it seemed like unnecessary weight as it is a simple feature. let's say it works more like a small component and html and jquery did the job just right.

**Sass**

i tried to keep my sass files in accordance to a component based structure. also for sake of clarity and organisation.

**Tests**

as I lack a lot of experience, there is a lot of things to learn when it comes to testing, so I decided to try behaviour-driven approach for the first time. Mocha is very friendly, and uses english like assertions, but maybe for jquery testing I would rather have used Q-Unit.

**Validation**

I used jquery validation as it makes it super easy to make custom methods

### Setup

#### in order to run basic commands, it is important to have [bower](hh) and [gulp](ddd) globally installed:

**Gulp**

```sh
$ npm install --global gulp-cli
```
**Bower**

```sh
$ npm install -g bower
```

### Basic Commands

#### Running the app:

```sh
$ gulp serve
```

#### Running the tests:

```sh
$ gulp serve:test
```
tests are written using [Mocha](https://mochajs.org) and [Chai](http://chaijs.com/)

#### Build:

```sh
$ gulp
```
