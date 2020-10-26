// todo: import env point to backend url

const callMmoApi = ({ method, url, params }) => {
    return fetch(url, { method, headers: new Headers({}) }).then((resp) =>
        resp.json()
    );
};

export const login = async ({ method, url, params }) => {
    const data = await callMmoApi({ method, url, params });
    return data
};

export const rss   = async (method, url, params) => {

    const response = await fetch(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'        
      }
    });

    const result =  await response.json()
    const data   = result.message

    const items = data.querySelectorAll("item");
    let objArray = [];
    items.forEach(el => {

      let obj = {
                 "title":el.querySelector("title").innerHTML,
                 "description":el.querySelector("title").innerHTML,
                 "link":el.querySelector("link").innerHTML,
                 "date":el.querySelector("link").innerHTML
                }

      objArray.push(obj)

    });

    return objArray

}

export const register = async (method, url, data = {}) => {

    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json(); 
    
  }
  
  export const getAllUsers = async (method, url, data = {}) => {

    const response = await fetch(url, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json(); 
    
  }

  export const user = async (method, url, data = {}) => {

    const response = await fetch(url, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json(); 
    
  }
 
