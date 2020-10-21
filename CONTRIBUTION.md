# To get started.

* Get repo
 ```
1. Fork repository the <upstream> organization repo
2. Clone your fork git clone <your fork url>
3. Set upstream git remote add upstream <upstream url>
 ```

* Before any work ensure you are up to date with upstream 
 ```
4. git fetch upstream
5. git merge upstream/develop
 ```

* Install packages to check work locally 
 ```
5. Install backend packages npm install
6. Install front end packages cd client && npm install 
 ```

* Create your feature branch issue and work in it
 ```
7. New branch git branch <feature or issue name>
8. Move into git checkout <feature or issue name>
 ```

* Implement your features and commit changes
 ```
9. git add . 
1. git commit m "short clear message"
 ```

* Check work locally 
 ```
11. Front End Only npm run client
    Back End Only npm run server
    Entire app npm run dev
  ```

* Create pull request
 ```
13. git push --set-upstream origin <feature or issue name>
 ```

* Next work 
 ```
14. Start at number 4
 ```

* Udate master for ...admins only
```
15. 
git checkout develop
git pull origin develop
git checkout master
git merge develop
git push origin master
 ```

