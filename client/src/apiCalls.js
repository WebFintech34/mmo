// todo: import env point to backend url

const callMmoApi = ({ method, url, params }) => {
    return fetch(url, { method, headers: new Headers({}) }).then((resp) =>
        resp.json()
    );
};

export const login = async ({ method, url, params }) => {
    const data = await callMmoApi({ method, url, params });
};
