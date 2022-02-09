async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;

  //从表单中获取post-title和post-url值并将它们与 POST 请求一起发送到/api/posts
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_url,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
