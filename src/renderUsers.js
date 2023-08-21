import users from "./data";
import $ from "jquery";
const userList = $('.user-list');


export function renderCard (){
    users.forEach(function (user) {
        const listItem = $('<li>').addClass('user-item');
    const userInfo = `
      <h2>${user.name}</h2>
      <p><strong>Age:</strong> ${user.age}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Country:</strong> ${user.country}</p>
      <p><strong>Company:</strong> ${user.company}</p>
      <p><strong>Birthday:</strong> ${user.birthday}</p>
    `;

    listItem.append(userInfo);
    userList.append(listItem);
  });
}

export default renderCard; 