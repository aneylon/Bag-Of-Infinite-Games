export async function request(url, options) {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      return result;
    } else {
      console.error(response.status);
      throw new Error(`Response : ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

export function get(url) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return request(url, requestOptions);
}

export function post(url, body) {
  const requestOptions = {
    method: "POST",
    header: authHeader(),
    body: JSON.stringify(body),
  };
  return request(url, requestOptions);
}

export function put(url, body) {
  const requestOptions = {
    method: "PUT",
    header: authHeader(),
    body: JSON.stringify(body),
  };
  return request(url, requestOptions);
}

export function patch(url, body) {
  const requestOptions = {
    method: "PATCH",
    header: authHeader(),
    body: JSON.stringify(body),
  };
  return request(url, requestOptions);
}

export function del(url, body) {
  const requestOptions = {
    method: "DELETE",
    header: authHeader(),
    body: JSON.stringify(body),
  };
  return request(url, requestOptions);
}

export function authHeader() {
  const token = sessionStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
}
