Cirrus * Eleventy Static Site
=============================

We have built an modern static theme using the `Eleventy`_ framework which is a simpler static site generator using `Cirrus`_, the most advanced responsive front-end framework in the world.

Click to check out our `demo`_

Features
--------

* Built using `Cirrus`_ & `Eleventy`_
* Comes with a number of Custom Pages & Templates such as Blog, Photo Gallery and much more to kickstart your site

.. _`Cirrus`: https://spiderpig86.github.io/Cirrus/
.. _`Eleventy`: https://www.11ty.dev/
.. _`pip`: https://packaging.python.org/tutorials/installing-packages/
.. _`npm`: https://www.npmjs.com/
.. _`demo`: https://static-web.chrisdev.com/

This project comes with a number of useful pages and a prebuilt content structures that will save you a tonne of work.

Getting Started
---------------

To get started the following dependencies need to be installed on your machine

* `pip`_
* `npm`_

**Now we need to install Cookiecutter** ::

    $ pip install cookiecutter

**Download our Foundation Static Theme with Git** ::

    $ cookiecutter https://github.com/lendlsmith/eleventy-cirrus.git

**The terminal will prompt you to give your project a name. The template will be downloaded into a folder with this name** ::

    project_name: Static Project
    project_slug: static_project
    host_name : static.chrisdev.com

**Then open the project folder and install dependencies** ::

    $ cd static_project/
    $ npm i

**Finally build your project** ::

    $ ELEVENTY_ENV=development npm run watch

You can access your site at ``http://localhost:8080``.

Creating Repo
-------------

**Create a git repo and push it there** ::

    $ git init
    $ git add .
    $ git commit -m "My First Commit"
    $ git remote add origin git@github.com:username/my_site.git
    $ git push -u origin master


Contributing
------------

Contributions are always welcome to improve this project. If you think you've found a bug or are interested in contributing fork this project and send the pull request. After review, your pull request will be merged. We are always happy to receive pull requests.

Please open all issues with this template on the main repo.

.. end-here
